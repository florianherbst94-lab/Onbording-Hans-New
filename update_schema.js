const fs = require('fs');

let schema = fs.readFileSync('prisma/schema.prisma', 'utf-8');

// Update User model
if (!schema.includes('timeTrackingType')) {
  schema = schema.replace(
    '  hourlyWage       Float             @default(13.90)',
    '  hourlyWage       Float             @default(13.90)\n  timeTrackingType String            @default("SIMPLE") // SIMPLE, TIME_ACCOUNT\n  weeklyHours      Float?\n  timeAccountStartDate DateTime?'
  );
  
  schema = schema.replace(
    '  staffPlanRows         StaffPlanRow[]',
    '  staffPlanRows         StaffPlanRow[]\n  workSchedules         EmployeeWorkSchedule[]\n  timeAccountMonths     TimeAccountMonth[]\n  timeAccountAdjustments TimeAccountAdjustment[]'
  );
}

// Update Timesheet model
if (!schema.includes('absenceType')) {
  schema = schema.replace(
    '  status       String   @default("DRAFT") // DRAFT, SUBMITTED, APPROVED, REJECTED',
    '  status       String   @default("DRAFT") // DRAFT, SUBMITTED, APPROVED, REJECTED\n  absenceType  String   @default("NONE") // NONE, VACATION, SICK, HOLIDAY, OTHER'
  );
}

// Add new models
if (!schema.includes('model EmployeeWorkSchedule')) {
  schema += `

model EmployeeWorkSchedule {
  id            String   @id @default(cuid())
  userId        String
  weekday       Int      // 1=Monday, 2=Tuesday, ..., 7=Sunday
  targetMinutes Int
  enabled       Boolean  @default(true)
  user          User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, weekday])
}

model TimeAccountMonth {
  id                       String   @id @default(cuid())
  userId                   String
  year                     Int
  month                    Int
  openingBalanceMinutes    Int
  targetMinutes            Int
  actualMinutes            Int
  monthlyDifferenceMinutes Int
  closingBalanceMinutes    Int
  updatedAt                DateTime @updatedAt
  user                     User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, year, month])
}

model TimeAccountAdjustment {
  id        String   @id @default(cuid())
  userId    String
  date      DateTime
  minutes   Int
  reason    String
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
`;
}

fs.writeFileSync('prisma/schema.prisma', schema);
console.log("Schema updated.");
