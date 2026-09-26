const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const userId = "cmppqrowf000a1243ujhf4wbu"; // Milan's ID
  
  const personalDataProgress = await prisma.stepProgress.findUnique({
    where: { userId_stepId: { userId, stepId: "personal-data" } }
  });
  
  console.log("data:", personalDataProgress?.data);
  try {
    const parsed = JSON.parse(personalDataProgress.data)
    const firstName = parsed.firstName || ""
    console.log("firstName:", firstName)
  } catch (e) {
    console.error("ERROR:", e.message)
  }
}

run().catch(console.error).finally(() => prisma.$disconnect());
