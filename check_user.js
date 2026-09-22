const fs = require('fs');
const envConfig = fs.readFileSync('.env', 'utf8').split('\n').forEach(line => {
  const match = line.match(/^([^#\s]+)=(.*)$/);
  if (match) process.env[match[1]] = match[2].replace(/^['"](.*)['"]$/, '$1');
});

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    where: { name: { contains: "Magdalena" } },
    include: {
      documents: true,
      payslips: true,
      stepProgresses: true
    }
  });
  console.log(JSON.stringify(users, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
