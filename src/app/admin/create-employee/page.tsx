import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { inviteEmployee } from "../adminActions"
import styles from "../page.module.css"

export default function CreateEmployeePage() {
  return (
    <div className={styles.dashboard} style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div className={styles.headerArea}>
        <h1 className={styles.pageTitle}>Mitarbeiter anlegen</h1>
      </div>
      
      <Card className={styles.formCard}>
        <CardHeader>
          <CardTitle>Neuen Mitarbeiter einladen</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={inviteEmployee} className={styles.form}>
            <Input label="Name" name="name" placeholder="Max Mustermann" required />
            <Input label="E-Mail" name="email" type="email" placeholder="max@beispiel.de" required />
            <div className={styles.formGroup}>
              <label className={styles.label}>Bereich / Tätigkeit</label>
              <select name="jobRole" className={styles.select} defaultValue="SERVICE">
                <option value="SERVICE">Service / Bar</option>
                <option value="ORDNER">Ordner</option>
                <option value="REINIGUNGSKRAFT">Reinigungskraft</option>
              </select>
            </div>
            <Input label="Arbeitsbeginn" name="startDate" type="date" required />
            <Input label="Stundenlohn (€)" name="hourlyWage" type="number" step="0.01" defaultValue="13.90" required />
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <Button type="submit" style={{ flex: 1 }}>Einladung senden</Button>
              <a href="/admin" style={{ textDecoration: "none", flex: 1 }}>
                <Button variant="secondary" type="button" style={{ width: "100%" }}>Abbrechen</Button>
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
