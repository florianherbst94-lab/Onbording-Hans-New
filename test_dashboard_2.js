const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function run() {
  const userId = "cmppqrowf000a1243ujhf4wbu"; // Milan's ID
  
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      onboardingStatus: true,
      documents: {
        where: {
          type: { in: ['CONTRACT_SIGNED', 'INSTRUCTION', 'HYGIENE_CERTIFICATE'] }
        },
        orderBy: { uploadedAt: 'desc' }
      },
      payslips: {
        orderBy: [
          { year: 'desc' },
          { month: 'desc' }
        ]
      }
    }
  });

  const globalInstructions = await prisma.document.findMany({
    where: { type: 'INSTRUCTION', userId: null },
    orderBy: { uploadedAt: 'desc' }
  });

  const taxDataProgress = await prisma.stepProgress.findUnique({
    where: { userId_stepId: { userId, stepId: "tax-data" } }
  });

  const allDocuments = [...(user?.documents || []), ...globalInstructions];
  if (taxDataProgress?.completed) {
    allDocuments.push({
      id: "tax-questionnaire-virtual",
      name: "Personalfragebogen (Steuer)",
      url: "/dashboard/tax-form",
      type: "TAX_QUESTIONNAIRE",
      uploadedAt: taxDataProgress.updatedAt,
      userId: userId
    });
  }

  const personalDataProgress = await prisma.stepProgress.findUnique({
    where: { userId_stepId: { userId, stepId: "personal-data" } }
  });

  let firstName = "";
  if (personalDataProgress?.data) {
    try {
      const parsed = JSON.parse(personalDataProgress.data);
      firstName = parsed.firstName || "";
    } catch { }
  }

  const displayName = firstName || user?.name?.split(" ")[0] || "Mitarbeiter/-in";

  const now = new Date();
  const monthStartStr = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
  
  const [currentMonthTimesheets, nextShift, openRequests] = await Promise.all([
    prisma.timesheet.findMany({
      where: {
        userId,
        date: { gte: monthStartStr },
        status: 'APPROVED'
      },
      select: { totalHours: true, hourlyWage: true }
    }),
    prisma.staffPlanRow.findFirst({
      where: {
        employeeId: userId,
        plan: { status: 'FINAL', date: { gte: now } }
      },
      include: { plan: true },
      orderBy: { plan: { date: 'asc' } }
    }),
    prisma.availabilityRequest.findMany({
      where: {
        status: 'PUBLISHED',
        endDate: { gte: now },
        days: {
          some: {
            responses: {
              none: { employeeId: userId }
            }
          }
        }
      },
      take: 2,
      orderBy: { updatedAt: 'desc' }
    })
  ]);

  const currentMonthEarnings = currentMonthTimesheets.reduce((acc, t) => acc + (t.totalHours * (t.hourlyWage || 13.90)), 0);

  function safeSerializeDates(obj) {
    if (!obj) return obj;
    return JSON.parse(JSON.stringify(obj));
  }

  const props = {
    user: safeSerializeDates({
      name: displayName,
      email: user?.email || null,
      startDate: user?.startDate || null
    }),
    documents: safeSerializeDates(allDocuments),
    payslips: safeSerializeDates(user?.payslips || []),
    summary: {
      currentMonthEarnings,
      nextShift: safeSerializeDates(nextShift),
      openRequests: safeSerializeDates(openRequests)
    }
  };

  fs.writeFileSync('milan_props.json', JSON.stringify(props, null, 2));
}

run().catch(console.error).finally(() => prisma.$disconnect());
