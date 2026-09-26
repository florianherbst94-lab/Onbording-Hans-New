const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const userId = "cmppqrowf000a1243ujhf4wbu"; // Milan's ID
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { onboardingStatus: true }
  });
  console.log(user.onboardingStatus);
}
run().catch(console.error).finally(() => prisma.$disconnect());
