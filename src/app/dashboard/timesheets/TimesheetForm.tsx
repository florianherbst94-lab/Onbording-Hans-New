"use client"

import { useState, FormEvent, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import styles from "./timesheet.module.css"
import { TimesheetEntry } from "@/types/timesheet"
import { calculateTotalHours, validateTimesheet } from "@/lib/timesheet-utils"

interface Props {
  onSuccess: () => void
}

export default function TimesheetForm({ onSuccess }: Props) {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [breakMinutes, setBreakMinutes] = useState(0)
  const [absenceType, setAbsenceType] = useState("NONE")
  const [note, setNote] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resetKey, setResetKey] = useState(0)

  const totalHours = calculateTotalHours(startTime, endTime, breakMinutes)
  const validation = validateTimesheet(totalHours, breakMinutes)
  const warnings = validation.warnings
  const formErrors = validation.errors

  const handleSubmit = async (e: FormEvent, status: "DRAFT" | "SUBMITTED") => {
    e.preventDefault()
    if (absenceType === "NONE" && (!startTime || !endTime)) {
      setError("Start- und Endzeit sind erforderlich.")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/timesheets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          startTime,
          endTime,
          breakMinutes,
          totalHours,
          absenceType,
          note,
          status,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Fehler beim Speichern")
      }

      // Reset form
      setStartTime("")
      setEndTime("")
      setBreakMinutes(0)
      setAbsenceType("NONE")
      setNote("")
      setResetKey(k => k + 1)
      onSuccess()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>Neuer Zeiteintrag</h3>
      <form key={resetKey} className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label>Datum</label>
          <input type="date" defaultValue={date} onChange={e => setDate(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label>Art des Eintrags</label>
          <select value={absenceType} onChange={e => setAbsenceType(e.target.value)} style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', width: '100%' }}>
            <option value="NONE">Reguläre Arbeitszeit</option>
            <option value="VACATION">Urlaub</option>
            <option value="SICK">Krankheit</option>
          </select>
        </div>
        
        {absenceType === "NONE" && (
          <>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Beginn</label>
                <input type="time" defaultValue={startTime} onChange={e => setStartTime(e.target.value)} required />
              </div>
              <div className={styles.formGroup}>
                <label>Ende</label>
                <input type="time" defaultValue={endTime} onChange={e => setEndTime(e.target.value)} required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Pause (Minuten)</label>
              <input 
                type="number" 
                min="0" 
                defaultValue={breakMinutes || ""} 
                onChange={e => setBreakMinutes(parseInt(e.target.value) || 0)} 
              />
            </div>
          </>
        )}

        <div className={styles.formGroup}>
          <label>Notiz (Optional)</label>
          <input 
            type="text" 
            placeholder="Besondere Vorkommnisse..." 
            defaultValue={note} 
            onChange={e => setNote(e.target.value)} 
          />
        </div>

        {absenceType === "NONE" && (
          <div className={styles.summaryBox}>
            <strong>Gesamtzeit: {totalHours} Stunden</strong>
          </div>
        )}
        {absenceType !== "NONE" && (
          <div className={styles.summaryBox}>
            <strong>Stunden werden automatisch berechnet (gemäß Arbeitsplan).</strong>
          </div>
        )}

        {absenceType === "NONE" && warnings.map((warn, i) => (
          <div key={`warn-${i}`} className={styles.warningBox}>⚠️ {warn}</div>
        ))}
        {absenceType === "NONE" && formErrors.map((formErr, i) => (
          <div key={`err-${i}`} className={styles.errorBox}>❌ {formErr}</div>
        ))}
        {error && <div className={styles.errorBox}>❌ {error}</div>}

        <div className={styles.actionButtons}>
          <Button 
            variant="outline" 
            onClick={(e) => handleSubmit(e, "DRAFT")}
            disabled={loading || (absenceType === "NONE" && (totalHours <= 0 || formErrors.length > 0))}
          >
            Als Entwurf speichern
          </Button>
          <Button 
            onClick={(e) => handleSubmit(e, "SUBMITTED")}
            disabled={loading || (absenceType === "NONE" && (totalHours <= 0 || formErrors.length > 0))}
          >
            Direkt einreichen
          </Button>
        </div>
      </form>
    </div>
  )
}
