import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log('Received migration data, starting insert...');

    if (data.users?.length) {
      await prisma.user.createMany({ data: data.users, skipDuplicates: true });
    }
    if (data.accounts?.length) {
      await prisma.account.createMany({ data: data.accounts, skipDuplicates: true });
    }
    if (data.sessions?.length) {
      await prisma.session.createMany({ data: data.sessions, skipDuplicates: true });
    }
    if (data.onboardingStatuses?.length) {
      await prisma.onboardingStatus.createMany({ data: data.onboardingStatuses, skipDuplicates: true });
    }
    if (data.stepProgresses?.length) {
      await prisma.stepProgress.createMany({ data: data.stepProgresses, skipDuplicates: true });
    }
    if (data.payslips?.length) {
      await prisma.payslip.createMany({ data: data.payslips, skipDuplicates: true });
    }
    if (data.documents?.length) {
      await prisma.document.createMany({ data: data.documents, skipDuplicates: true });
    }
    if (data.timesheets?.length) {
      await prisma.timesheet.createMany({ data: data.timesheets, skipDuplicates: true });
    }
    if (data.benefits?.length) {
      await prisma.benefit.createMany({ data: data.benefits, skipDuplicates: true });
    }
    if (data.shiftTemplates?.length) {
      await prisma.shiftTemplate.createMany({ data: data.shiftTemplates, skipDuplicates: true });
    }
    if (data.shiftTemplateRows?.length) {
      await prisma.shiftTemplateRow.createMany({ data: data.shiftTemplateRows, skipDuplicates: true });
    }
    if (data.requests?.length) {
      await prisma.availabilityRequest.createMany({ data: data.requests, skipDuplicates: true });
    }
    if (data.days?.length) {
      await prisma.availabilityDay.createMany({ data: data.days, skipDuplicates: true });
    }
    if (data.responses?.length) {
      await prisma.availabilityResponse.createMany({ data: data.responses, skipDuplicates: true });
    }
    if (data.planDays?.length) {
      await prisma.staffPlanDay.createMany({ data: data.planDays, skipDuplicates: true });
    }
    if (data.planRows?.length) {
      await prisma.staffPlanRow.createMany({ data: data.planRows, skipDuplicates: true });
    }

    return NextResponse.json({ success: true, message: 'Data perfectly migrated' });
  } catch (error: any) {
    console.error('Migration error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
