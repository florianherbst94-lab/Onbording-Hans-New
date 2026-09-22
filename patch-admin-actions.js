const fs = require('fs');
const file = 'src/app/admin/adminActions.ts';
let content = fs.readFileSync(file, 'utf8');

// Add resetEmployeePassword function
const newFunction = `
export async function resetEmployeePassword(userId: string) {
  try {
    const session = await auth()
    if (!session?.user || (session.user as { role?: string }).role !== "ADMIN") {
      throw new Error("Nicht autorisiert")
    }

    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      throw new Error("Benutzer nicht gefunden")
    }

    const rawPassword = crypto.randomBytes(4).toString("hex") // 8 characters
    const hashedPassword = crypto.createHash("sha256").update(rawPassword).digest("hex")

    await (prisma.user.update as any)({
      where: { id: userId },
      data: { password: hashedPassword }
    })

    const loginUrl = "https://team.hansimclub.de"

    if (process.env.RESEND_API_KEY && user.email) {
      try {
        await resend.emails.send({
          from: "onboarding@hansimclub.de",
          to: user.email,
          subject: "Dein Passwort wurde zurückgesetzt",
          html: \`
            <p>Hi \${user.name || ''},</p>
            <p>dein Passwort für das Mitarbeiterportal wurde von einem Administrator zurückgesetzt.</p>
            <p>Deine neuen Zugangsdaten lauten:</p>
            <p><strong>E-Mail:</strong> \${user.email}<br/><strong>Passwort:</strong> \${rawPassword}</p>
            <p><a href="\${loginUrl}/login">Hier geht's zum Login</a></p>
            <p>Du kannst das Passwort jederzeit in deinem Profil ändern.</p>
          \`,
        })
      } catch (e: unknown) {
        console.error("[Resend API Error]:", (e as Error).message)
      }
    }

    revalidatePath("/admin")
    return { success: true, newPassword: rawPassword }
  } catch (error: any) {
    console.error("[resetEmployeePassword] Error:", error)
    return { success: false, error: error.message || "Fehler beim Zurücksetzen des Passworts" }
  }
}
`;

if (!content.includes('export async function resetEmployeePassword')) {
  content += newFunction;
  fs.writeFileSync(file, content);
  console.log("Added resetEmployeePassword to adminActions.ts");
} else {
  console.log("resetEmployeePassword already exists");
}
