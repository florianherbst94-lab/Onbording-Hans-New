"use client"
import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import styles from "./planning.module.css"

export default function RequestsClient({ requests, onRefresh }: { requests: any[], onRefresh: () => void }) {
  const [isCreating, setIsCreating] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  // Form State
  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  
  // Days State
  const [days, setDays] = useState<{ date: string; eventName: string; note: string }[]>([])
  
  // New Day Input State
  const [newDayDate, setNewDayDate] = useState("")
  const [newDayEvent, setNewDayEvent] = useState("")
  const [newDayNote, setNewDayNote] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const resetForm = () => {
    setTitle("")
    setStartDate("")
    setEndDate("")
    setDays([])
    setNewDayDate("")
    setNewDayEvent("")
    setNewDayNote("")
  }

  const handleAddDay = () => {
    if (!newDayDate) return
    
    // Check for identical date AND event name (truly identical entry)
    if (days.some(d => d.date === newDayDate && d.eventName === newDayEvent)) {
      alert("Dieser genau gleiche Eintrag wurde bereits hinzugefügt.")
      return
    }

    setDays([...days, { date: newDayDate, eventName: newDayEvent, note: newDayNote }].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()))
    setNewDayDate("")
    setNewDayEvent("")
    setNewDayNote("")
  }

  const handleRemoveDay = (dateStr: string) => {
    setDays(days.filter(d => d.date !== dateStr))
  }

  const handleCreate = async () => {
    if (!title || !startDate || !endDate || days.length === 0) {
      alert("Bitte fülle alle Pflichtfelder aus und füge mindestens einen Tag hinzu.")
      return
    }

    setIsLoading(true)
    console.log("[RequestsClient] Sending CREATE request with", days.length, "days")
    try {
      const res = await fetch("/api/planning/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, startDate, endDate, days })
      })

      if (res.ok) {
        setIsCreating(false)
        resetForm()
        onRefresh()
      } else {
        const errorData = await res.json().catch(() => ({}))
        console.error("[RequestsClient] SAVE ERROR:", res.status, errorData)
        alert(`Fehler beim Speichern (Status ${res.status}): ${errorData.details || errorData.error || "Unbekannter Fehler"}\n\nZeitstempel: ${new Date().toLocaleTimeString()}`)
      }
    } catch (e) {
      console.error("[RequestsClient] FETCH EXCEPTION:", e)
      alert("Ein Fehler ist aufgetreten: " + (e as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleStartEdit = (req: any) => {
    setEditingId(req.id)
    setTitle(req.title)
    setStartDate(req.startDate.slice(0, 10))
    setEndDate(req.endDate.slice(0, 10))
    setDays(req.days.map((d: any) => ({
      date: typeof d.date === 'string' ? d.date.slice(0, 10) : new Date(d.date).toISOString().slice(0, 10),
      eventName: d.eventName || "",
      note: d.note || ""
    })))
    setIsCreating(false)
  }

  const handleSaveEdit = async () => {
    if (!title || !startDate || !endDate || days.length === 0) {
      alert("Bitte fülle alle Pflichtfelder aus und füge mindestens einen Tag hinzu.")
      return
    }

    setIsLoading(true)
    console.log("[RequestsClient] Sending UPDATE request for", editingId, "with", days.length, "days")
    try {
      const res = await fetch(`/api/planning/requests/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, startDate, endDate, days })
      })

      if (res.ok) {
        setEditingId(null)
        resetForm()
        onRefresh()
      } else {
        const errorData = await res.json().catch(() => ({}))
        console.error("[RequestsClient] UPDATE ERROR:", res.status, errorData)
        alert(`Fehler beim Speichern der Änderungen (Status ${res.status}): ${errorData.details || errorData.error || "Unbekannter Fehler"}\n\nZeitstempel: ${new Date().toLocaleTimeString()}`)
      }
    } catch (e) {
      console.error("[RequestsClient] FETCH EXCEPTION:", e)
      alert("Ein Fehler ist aufgetreten: " + (e as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    resetForm()
  }

  const handleStatusChange = async (id: string, newStatus: string) => {
    if (newStatus === "CLOSED" && !confirm("Abfrage wirklich schließen? Mitarbeiter können dann keine Antworten mehr geben.")) return

    try {
      const res = await fetch(`/api/planning/requests/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      })
      
      if (res.ok) {
        onRefresh()
      } else {
        const errorData = await res.json().catch(() => ({}))
        alert(`Fehler beim Ändern des Status: ${errorData.details || "Unbekannter Fehler"}`)
      }
    } catch (e) {
      alert("Ein Fehler ist aufgetreten beim Status-Update: " + (e as Error).message)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Abfrage wirklich löschen? Alle Antworten der Mitarbeiter werden unwiderruflich gelöscht!")) return
    
    try {
      const res = await fetch(`/api/planning/requests/${id}`, { method: "DELETE" })
      if (res.ok) {
        onRefresh()
      } else {
        const errorData = await res.json().catch(() => ({}))
        alert(`Fehler beim Löschen: ${errorData.details || "Unbekannter Fehler"}`)
      }
    } catch(e) {
      alert("Ein Fehler ist aufgetreten beim Löschen: " + (e as Error).message)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' })
  }

  const renderForm = (mode: "create" | "edit") => (
    <div className={styles.formCard}>
      <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
        <h3>{mode === "create" ? "Neue Abfrage erstellen" : "Abfrage bearbeiten"}</h3>
      </div>
      <div style={{ padding: '1.5rem' }}>
        <div className={styles.formGrid}>
          <Input label="Titel (z.B. April 2026)" value={title} onChange={e => setTitle(e.target.value)} required />
          <div />
          <Input label="Zeitraum Start" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required />
          <Input label="Ende" type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required />
          
          <div className={styles.dayBuilder}>
            <h4 style={{ marginBottom: '1rem' }}>Tage hinzufügen</h4>
            <div className={styles.dayControls}>
              <div style={{flex: 1}}><Input label="Datum" type="date" value={newDayDate} onChange={e => setNewDayDate(e.target.value)} /></div>
              <div style={{flex: 1}}><Input label="Event (optional)" placeholder="z.B. 90/00er Party" value={newDayEvent} onChange={e => setNewDayEvent(e.target.value)} /></div>
              <div style={{flex: 1}}><Input label="Notiz (optional)" placeholder="Extra Personal benötigt" value={newDayNote} onChange={e => setNewDayNote(e.target.value)} /></div>
              <Button type="button" variant="outline" onClick={handleAddDay}>Hinzufügen</Button>
            </div>
            
            <div className={styles.dayList}>
              {days.length === 0 && <p style={{ fontSize: '0.9rem', color: '#86868b' }}>Noch keine Tage hinzugefügt.</p>}
              {days.map((d, index) => {
                const isExactDuplicate = days.filter(day => day.date === d.date && day.eventName === d.eventName).length > 1
                return (
                  <div key={`${d.date}-${index}`} className={`${styles.dayItemLine} ${isExactDuplicate ? styles.duplicateWarning : ''}`}>
                    <span>
                      <strong>{formatDate(d.date)}</strong> {d.eventName && `– ${d.eventName}`} {d.note && `(${d.note})`}
                      {isExactDuplicate && <span style={{ color: '#d93025', marginLeft: '0.5rem', fontSize: '0.8rem', fontWeight: 'bold' }}>[Duplikat]</span>}
                    </span>
                    <Button variant="ghost" size="sm" onClick={() => handleRemoveDay(d.date)}>X</Button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className={styles.formActions}>
          <Button variant="outline" onClick={mode === "create" ? () => { setIsCreating(false); resetForm() } : handleCancelEdit}>Abbrechen</Button>
          <Button onClick={mode === "create" ? handleCreate : handleSaveEdit} disabled={isLoading}>
            {isLoading ? 'Speichert...' : mode === "create" ? 'Entwurf erstellen' : 'Änderungen speichern'}
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className={styles.planningWrapper}>
      {/* HIGH VISIBILITY VERSION BANNER */}
      <div style={{ backgroundColor: '#ffeb3b', color: '#000', padding: '1rem', textAlign: 'center', fontWeight: 'bold', borderBottom: '2px solid #fbc02d', marginBottom: '1rem', borderRadius: '8px' }}>
        ⚠️ NEUE VERSION AKTIV (v2.2) - Build: {new Date().toLocaleString('de-DE')}
      </div>
      
      <div className={styles.actionHeader}>
        <div>
          <h2>Verfügbarkeitsabfragen</h2>
        </div>
        {!isCreating && !editingId && <Button onClick={() => { resetForm(); setIsCreating(true) }}>+ Neue Abfrage</Button>}
      </div>

      {isCreating && renderForm("create")}
      {editingId && renderForm("edit")}

      <div className={styles.requestsList}>
        {requests.length === 0 && !isCreating && (
          <p style={{ color: '#86868b' }}>Noch keine Abfragen erstellt.</p>
        )}

        {requests.map(req => (
          <Card key={req.id} className={styles.requestCard}>
            <CardContent className={styles.cardContentPadded}>
              <div className={styles.requestHeader}>
                <div>
                  <h3 style={{ margin: 0 }}>{req.title}</h3>
                  <div className={styles.requestMeta}>
                    Zeitraum: {new Date(req.startDate).toLocaleDateString('de-DE')} - {new Date(req.endDate).toLocaleDateString('de-DE')}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className={`${styles.statusBadge} ${styles[`status${req.status}`]}`}>
                    {req.status === 'DRAFT' ? 'Entwurf' : req.status === 'PUBLISHED' ? 'Veröffentlicht' : 'Geschlossen'}
                  </span>
                  
                  {req.status === 'DRAFT' && (
                    <Button size="sm" onClick={() => handleStatusChange(req.id, 'PUBLISHED')}>Veröffentlichen</Button>
                  )}
                  {req.status === 'PUBLISHED' && (
                    <Button size="sm" variant="outline" onClick={() => handleStatusChange(req.id, 'CLOSED')}>Schließen</Button>
                  )}
                  
                  <Button size="sm" variant="outline" onClick={() => handleStartEdit(req)} disabled={editingId === req.id}>Bearbeiten</Button>
                  <Button size="sm" variant="ghost" onClick={() => handleDelete(req.id)}>Löschen</Button>
                </div>
              </div>
              
              <div className={styles.daysGrid}>
                {req.days.map((d: any) => (
                  <div key={d.id} className={styles.dayCard}>
                    <div className={styles.dayDate}>{formatDate(d.date)}</div>
                    {d.eventName && <div className={styles.dayEvent}>{d.eventName}</div>}
                    {d.note && <div className={styles.dayNote}>{d.note}</div>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
