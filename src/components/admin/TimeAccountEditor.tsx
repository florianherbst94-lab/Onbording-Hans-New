"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"

interface Props {
  userId: string
  initialTimeTrackingType: string
  initialWeeklyHours: number | null
  initialStartDate: string | null
  workSchedules: { weekday: number, targetMinutes: number, enabled: boolean }[]
}

const WEEKDAYS = [
  { id: 1, label: "Montag" },
  { id: 2, label: "Dienstag" },
  { id: 3, label: "Mittwoch" },
  { id: 4, label: "Donnerstag" },
  { id: 5, label: "Freitag" },
  { id: 6, label: "Samstag" },
  { id: 7, label: "Sonntag" },
]

export function TimeAccountEditor({ userId, initialTimeTrackingType, initialWeeklyHours, initialStartDate, workSchedules }: Props) {
  const [trackingType, setTrackingType] = useState(initialTimeTrackingType || "SIMPLE")
  const [weeklyHours, setWeeklyHours] = useState(initialWeeklyHours || 0)
  const [startDate, setStartDate] = useState(initialStartDate || "")
  const [schedules, setSchedules] = useState(
    WEEKDAYS.map(day => {
      const existing = workSchedules.find(s => s.weekday === day.id)
      return existing || { weekday: day.id, targetMinutes: 0, enabled: false }
    })
  )
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const res = await fetch("/api/admin/time-accounts/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          timeTrackingType: trackingType,
          weeklyHours,
          timeAccountStartDate: startDate,
          schedules
        })
      })
      if (res.ok) {
        alert("Zeitkonto-Einstellungen erfolgreich gespeichert!")
      } else {
        alert("Fehler beim Speichern")
      }
    } catch (e) {
      alert("Fehler beim Speichern")
    } finally {
      setIsSaving(false)
    }
  }

  const updateSchedule = (weekday: number, field: string, value: any) => {
    setSchedules(prev => prev.map(s => {
      if (s.weekday === weekday) {
        return { ...s, [field]: value }
      }
      return s
    }))
  }

  return (
    <div style={{ marginTop: '20px', padding: '15px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', background: 'rgba(0,0,0,0.2)' }}>
      <h3 style={{ marginBottom: '15px', fontSize: '1.1rem' }}>Zeiterfassung & Zeitkonto</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Erfassungs-Modus</label>
        <select 
          value={trackingType} 
          onChange={e => setTrackingType(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', background: 'white', color: 'black' }}
        >
          <option value="SIMPLE">Einfach (nur Ist-Stunden erfassen)</option>
          <option value="TIME_ACCOUNT">Zeitkonto (Soll/Ist-Vergleich)</option>
        </select>
      </div>

      {trackingType === "TIME_ACCOUNT" && (
        <>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Wochenstunden</label>
              <input 
                type="number" 
                value={weeklyHours} 
                onChange={e => setWeeklyHours(parseFloat(e.target.value))}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', background: 'white', color: 'black' }}
                step="0.5"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Startmonat (z.B. 2026-09-01)</label>
              <input 
                type="date" 
                value={startDate} 
                onChange={e => setStartDate(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', background: 'white', color: 'black' }}
              />
            </div>
          </div>

          <h4 style={{ marginBottom: '10px' }}>Arbeitsplan (Soll-Zeiten)</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {schedules.map(s => {
              const dayName = WEEKDAYS.find(w => w.id === s.weekday)?.label
              return (
                <div key={s.weekday} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <label style={{ width: '100px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input 
                      type="checkbox" 
                      checked={s.enabled} 
                      onChange={e => updateSchedule(s.weekday, 'enabled', e.target.checked)} 
                    />
                    {dayName}
                  </label>
                  {s.enabled && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <input 
                        type="number" 
                        value={Math.floor(s.targetMinutes / 60)} 
                        onChange={e => {
                          const h = parseInt(e.target.value) || 0
                          const m = s.targetMinutes % 60
                          updateSchedule(s.weekday, 'targetMinutes', h * 60 + m)
                        }}
                        style={{ width: '60px', padding: '4px', borderRadius: '4px', background: 'white', color: 'black' }}
                        min="0"
                      /> h
                      <input 
                        type="number" 
                        value={s.targetMinutes % 60} 
                        onChange={e => {
                          const m = parseInt(e.target.value) || 0
                          const h = Math.floor(s.targetMinutes / 60)
                          updateSchedule(s.weekday, 'targetMinutes', h * 60 + m)
                        }}
                        style={{ width: '60px', padding: '4px', borderRadius: '4px', background: 'white', color: 'black' }}
                        min="0" max="59"
                      /> min
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}

      <Button onClick={handleSave} disabled={isSaving} size="sm">
        {isSaving ? "Speichere..." : "Einstellungen speichern"}
      </Button>
    </div>
  )
}
