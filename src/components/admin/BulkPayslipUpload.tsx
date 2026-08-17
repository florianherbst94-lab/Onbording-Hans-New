"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/Button"
import styles from "./BulkPayslipUpload.module.css"

interface Employee {
  id: string
  name: string | null
  email: string | null
  firstName?: string
  lastName?: string
  zipCode?: string
}

type PageType = 'PAYSLIP' | 'SKIP'

interface AssignedResult {
  payslipId?: string
  employeeName: string
  employeeId: string
  page: number
  url?: string
}

interface UnassignedResult {
  page: number
  candidateName: string
  candidateId?: string
}

interface SkippedResult {
  page: number
  reason: string
}

interface AlreadyPresentResult {
  page: number
  employeeName: string
  employeeId: string
  reason: string
}

interface BulkResult {
  assigned: AssignedResult[]
  unassigned: UnassignedResult[]
  skipped: SkippedResult[]
  alreadyPresent: AlreadyPresentResult[]
  totalPages: number
  monthLabel: string
  yearLabel: string
  monthNum: number
  yearNum: number
}

interface ExistingPayslip {
  id: string
  userId: string
  month: number
  year: number
}

interface Props {
  employees: Employee[]
  existingPayslips?: ExistingPayslip[]
  onPayslipAdded?: (newPayslip: {
    id: string
    userId: string
    month: number
    year: number
    url: string
    uploadedAt: string
  }) => void
  onPayslipDeleted?: (id: string) => void
}

function normalizeText(str: string): string {
  if (!str) return ""
  return str
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[,.;:\-_/\\()]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export default function BulkPayslipUpload({ 
  employees, 
  existingPayslips = [],
  onPayslipAdded,
  onPayslipDeleted 
}: Props) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [statusText, setStatusText] = useState("")
  const [result, setResult] = useState<BulkResult | null>(null)
  const [assigningPage, setAssigningPage] = useState<number | null>(null)
  const [deletingPage, setDeletingPage] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [successBanner, setSuccessBanner] = useState<string | null>(null)
  const [selectedEmployees, setSelectedEmployees] = useState<Record<number, string>>({})
  const [previewModalPage, setPreviewModalPage] = useState<number | null>(null)

  const fileRef = useRef<HTMLInputElement>(null)
  const monthRef = useRef<HTMLSelectElement>(null)
  const yearRef = useRef<HTMLSelectElement>(null)
  // Store split page PDFs and page thumbnail data URLs
  const splitPagesRef = useRef<Map<number, Uint8Array>>(new Map())
  const pageThumbnailsRef = useRef<Map<number, string>>(new Map())

  const currentYear = new Date().getFullYear()
  const years = [currentYear - 1, currentYear, currentYear + 1]
  const months = [
    { value: 1, label: "Januar" },
    { value: 2, label: "Februar" },
    { value: 3, label: "März" },
    { value: 4, label: "April" },
    { value: 5, label: "Mai" },
    { value: 6, label: "Juni" },
    { value: 7, label: "Juli" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "Oktober" },
    { value: 11, label: "November" },
    { value: 12, label: "Dezember" },
  ]

  /**
   * Extract text from each page using pdfjs-dist (runs in browser).
   */
  async function extractTextPerPage(data: ArrayBuffer, onProgress: (cur: number, total: number) => void): Promise<string[]> {
    const pdfjsLib = await import("pdfjs-dist")
    const version = pdfjsLib.version || "5.4.296"
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.mjs`

    const loadingTask = pdfjsLib.getDocument({ 
      data: new Uint8Array(data),
      useWorkerFetch: false,
      isEvalSupported: false,
      enableXfa: true,
    })
    
    const doc = await loadingTask.promise
    const totalPages = doc.numPages
    
    const texts: string[] = []
    for (let i = 1; i <= totalPages; i++) {
      onProgress(i, totalPages)
      const page = await doc.getPage(i)
      const content = await page.getTextContent()
      const text = content.items
        .filter((item): item is { str: string } & typeof item => "str" in item)
        .map((item) => item.str)
        .join(" ")
      texts.push(text)
    }
    await doc.destroy()
    return texts
  }

  /**
   * Robustly split PDF by rendering each page to a canvas (flattening).
   */
  async function splitPages(data: ArrayBuffer, onProgress: (cur: number, total: number) => void): Promise<Map<number, Uint8Array>> {
    const pdfjsLib = await import("pdfjs-dist")
    const { PDFDocument } = await import("pdf-lib")
    
    const version = pdfjsLib.version || "5.4.296"
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.mjs`

    const loadingTask = pdfjsLib.getDocument({ 
      data: new Uint8Array(data.slice(0)),
      enableXfa: true,
    })
    const pdf = await loadingTask.promise
    const totalPages = pdf.numPages
    const pagesMap = new Map<number, Uint8Array>()
    const thumbnailsMap = new Map<number, string>()

    for (let i = 1; i <= totalPages; i++) {
      onProgress(i, totalPages)
      const page = await pdf.getPage(i)
      
      const viewport = page.getViewport({ scale: 2.0 })
      const canvas = document.createElement("canvas")
      const context = canvas.getContext("2d")
      canvas.height = viewport.height
      canvas.width = viewport.width

      if (context) {
        await page.render({ canvasContext: context, viewport } as any).promise
        
        const imgDataUrl = canvas.toDataURL("image/jpeg", 0.9)
        thumbnailsMap.set(i, imgDataUrl)

        const base64 = imgDataUrl.split(",")[1]
        const binStr = atob(base64)
        const imgBytes = new Uint8Array(binStr.length)
        for (let j = 0; j < binStr.length; j++) {
          imgBytes[j] = binStr.charCodeAt(j)
        }

        const newDoc = await PDFDocument.create()
        const jpgImage = await newDoc.embedJpg(imgBytes)
        
        const newPage = newDoc.addPage([viewport.width, viewport.height])
        newPage.drawImage(jpgImage, {
          x: 0,
          y: 0,
          width: viewport.width,
          height: viewport.height,
        })
        
        const bytes = await newDoc.save()
        pagesMap.set(i, bytes)
      }
    }
    
    await pdf.destroy()
    pageThumbnailsRef.current = thumbnailsMap
    return pagesMap
  }

  /**
   * Upload a single-page PDF to the server.
   */
  async function uploadPage(pageBytes: Uint8Array, userId: string, month: number, year: number): Promise<{ employeeName: string; payslipId?: string; url?: string }> {
    const blob = new Blob([pageBytes as any], { type: "application/pdf" })
    const file = new File([blob], "payslip.pdf", { type: "application/pdf" })

    const formData = new FormData()
    formData.append("file", file)
    formData.append("userId", userId)
    formData.append("month", String(month))
    formData.append("year", String(year))

    const res = await fetch("/api/payslips/save", {
      method: "POST",
      body: formData,
    })

    const responseText = await res.text()
    let data
    try {
      data = JSON.parse(responseText)
    } catch {
      throw new Error(`Server-Fehler (${res.status})`)
    }
    if (!res.ok) throw new Error(data.error || "Upload fehlgeschlagen")
    return {
      employeeName: data.employeeName,
      payslipId: data.payslipId,
      url: data.url
    }
  }

  /**
   * Classify the page type based on known DATEV document headers.
   */
  function classifyPage(pageText: string): { type: PageType; reason: string } {
    const text = pageText.toLowerCase()
    
    if (text.includes("abrechnung der brutto") || text.includes("brutto/netto-bez") || text.includes("brutto/netto-abrechnung")) {
      return { type: 'PAYSLIP', reason: '' }
    }
    if (text.includes("lohnjournal")) {
      return { type: 'SKIP', reason: 'Lohnjournal (Übersicht)' }
    }
    if (text.includes("meldebescheinigung")) {
      return { type: 'SKIP', reason: 'Meldebescheinigung (SV)' }
    }
    if (text.includes("übersicht zahlungen") || text.includes("uebersicht zahlungen")) {
      return { type: 'SKIP', reason: 'Zahlungsübersicht' }
    }
    if (text.includes("dü-protokoll") || text.includes("due-protokoll") || text.includes("lohnsteuer-anmeldung")) {
      return { type: 'SKIP', reason: 'DÜ-Protokoll / Steueranmeldung' }
    }
    if (text.includes("beitragsnachweis")) {
      return { type: 'SKIP', reason: 'Beitragsnachweis' }
    }
    return { type: 'PAYSLIP', reason: '' }
  }

  /**
   * Robust employee matching supporting DATEV "Nachname, Vorname", "Vorname Nachname",
   * umlaut variants, zip codes and multi-token matching.
   */
  function findEmployeeMatch(
    pageText: string
  ): { employee: Employee | null; candidateName: string; candidateId?: string } {
    const normText = normalizeText(pageText)
    const scored: { emp: Employee; score: number }[] = []
    
    for (const emp of employees) {
      const fName = emp.firstName ? normalizeText(emp.firstName) : ""
      const lName = emp.lastName ? normalizeText(emp.lastName) : ""
      const rawName = emp.name ? normalizeText(emp.name) : ""
      const zCode = emp.zipCode ? normalizeText(emp.zipCode) : ""
      
      if (!fName && !lName && !rawName) continue
      
      let score = 0

      // Case 1: Exact full name combinations
      if (fName && lName) {
        const combo1 = `${fName} ${lName}`
        const combo2 = `${lName} ${fName}`
        
        if (normText.includes(combo1) || normText.includes(combo2)) {
          score += 12 // Very high confidence
        } else if (normText.includes(fName) && normText.includes(lName)) {
          // Both individual names present on the same page
          score += 8
        } else {
          if (lName.length >= 3 && normText.includes(lName)) score += 3
          if (fName.length >= 3 && normText.includes(fName)) score += 2
        }
      } else if (rawName) {
        if (normText.includes(rawName)) {
          score += 10
        } else {
          const parts = rawName.split(" ").filter(p => p.length >= 3)
          const matchedParts = parts.filter(p => normText.includes(p))
          if (parts.length > 1 && matchedParts.length === parts.length) {
            score += 8
          } else if (matchedParts.length > 0) {
            score += matchedParts.length * 2
          }
        }
      }

      // Bonus for zip code confirmation
      if (zCode && zCode.length >= 4 && normText.includes(zCode)) {
        score += 4
      }

      if (score >= 4) {
        scored.push({ emp, score })
      }
    }
    
    scored.sort((a, b) => b.score - a.score)
    
    // Unambiguous high confidence match (full name combo or both parts + zip)
    if (scored.length >= 1 && scored[0].score >= 8) {
      if (scored.length === 1 || scored[0].score > scored[1].score) {
        return { 
          employee: scored[0].emp, 
          candidateName: scored[0].emp.name || scored[0].emp.email || '',
          candidateId: scored[0].emp.id
        }
      }
    }
    
    // Suggest top candidate for manual confirmation if available
    if (scored.length >= 1) {
      return { 
        employee: null, 
        candidateName: scored[0].emp.name || scored[0].emp.email || '',
        candidateId: scored[0].emp.id
      }
    }
    
    return { employee: null, candidateName: '', candidateId: undefined }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccessBanner(null)
    setResult(null)

    const file = fileRef.current?.files?.[0]
    const month = monthRef.current?.value
    const year = yearRef.current?.value

    if (!file || !month || !year) {
      setError("Bitte alle Felder ausfüllen")
      return
    }

    setIsProcessing(true)

    try {
      const arrayBuffer = await file.arrayBuffer()

      setStatusText("Lade PDF & analysiere Text…")
      const pageTexts = await extractTextPerPage(arrayBuffer.slice(0), (cur, total) => {
        setStatusText(`Analysiere Seite ${cur} von ${total}…`)
      })

      const pageClassifications = pageTexts.map((text) => classifyPage(text))

      setStatusText("Optimiere und teile Seiten…")
      const pages = await splitPages(arrayBuffer.slice(0), (cur, total) => {
        setStatusText(`Rendere Seite ${cur} von ${total}…`)
      })
      splitPagesRef.current = pages

      const monthNum = parseInt(month)
      const yearNum = parseInt(year)
      const assigned: AssignedResult[] = []
      const unassigned: UnassignedResult[] = []
      const skipped: SkippedResult[] = []
      const alreadyPresent: AlreadyPresentResult[] = []
      const initialSelected: Record<number, string> = {}

      // Set of user IDs who currently ALREADY have a payslip for this month/year
      const existingUserIds = new Set(
        existingPayslips
          .filter((p) => p.month === monthNum && p.year === yearNum)
          .map((p) => p.userId)
      )

      for (let i = 0; i < pageTexts.length; i++) {
        const pageNum = i + 1
        const pageText = pageTexts[i]
        const classification = pageClassifications[i]

        if (classification.type === 'SKIP') {
          skipped.push({ page: pageNum, reason: classification.reason })
          continue
        }

        const { employee: emp, candidateName, candidateId } = findEmployeeMatch(pageText)

        if (emp) {
          // Check if employee ALREADY has a payslip for this month & year
          if (existingUserIds.has(emp.id)) {
            alreadyPresent.push({
              page: pageNum,
              employeeName: emp.name || emp.email || "Unbekannt",
              employeeId: emp.id,
              reason: `Hat für ${months.find(m => m.value === monthNum)?.label} ${yearNum} bereits einen Lohnzettel (übersprungen, kein Duplikat)`
            })
          } else {
            // New payslip assignment
            setStatusText(`Speichere Seite ${pageNum} (${emp.name})…`)
            const pageBytes = pages.get(pageNum)
            let uploadedUrl = ""
            let pId = ""
            if (pageBytes) {
              const uploadRes = await uploadPage(pageBytes, emp.id, monthNum, yearNum)
              uploadedUrl = uploadRes.url || ""
              pId = uploadRes.payslipId || ""

              if (pId) {
                existingUserIds.add(emp.id)
                onPayslipAdded?.({
                  id: pId,
                  userId: emp.id,
                  month: monthNum,
                  year: yearNum,
                  url: uploadedUrl,
                  uploadedAt: new Date().toISOString()
                })
              }
            }
            assigned.push({
              payslipId: pId,
              employeeName: emp.name || emp.email || "Unbekannt",
              employeeId: emp.id,
              page: pageNum,
              url: uploadedUrl
            })
          }
        } else {
          unassigned.push({
            page: pageNum,
            candidateName,
            candidateId
          })
          if (candidateId) {
            initialSelected[pageNum] = candidateId
          }
        }
      }

      setSelectedEmployees(initialSelected)
      setResult({ 
        assigned, 
        unassigned, 
        skipped,
        alreadyPresent,
        totalPages: pageTexts.length,
        monthLabel: months.find(m => m.value === monthNum)?.label || "",
        yearLabel: String(yearNum),
        monthNum,
        yearNum
      })

      if (assigned.length > 0 && unassigned.length === 0) {
        setSuccessBanner(`Alle ${assigned.length} neuen Lohnzettel wurden erfolgreich zugeordnet!`)
      } else if (assigned.length === 0 && alreadyPresent.length > 0 && unassigned.length === 0) {
        setSuccessBanner(`Alle ${alreadyPresent.length} erkannten Lohnzettel waren für ${months.find(m => m.value === monthNum)?.label} ${yearNum} bereits vorhanden und wurden übersprungen.`)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unbekannter Fehler")
    } finally {
      setIsProcessing(false)
      setStatusText("")
    }
  }

  async function handleManualAssign(page: number) {
    if (!result) return
    const userId = selectedEmployees[page]

    if (!userId) {
      setError("Bitte wähle zuerst einen Mitarbeiter aus.")
      return
    }

    const pageBytes = splitPagesRef.current.get(page)
    if (!pageBytes) {
      setError("Seite nicht mehr im Speicher — bitte PDF erneut hochladen.")
      return
    }

    // Check if employee already has a payslip for this month
    const empAlreadyHas = existingPayslips.some(
      (p) => p.userId === userId && p.month === result.monthNum && p.year === result.yearNum
    )
    if (empAlreadyHas) {
      const confirmOverwrite = window.confirm(
        "Dieser Mitarbeiter hat für diesen Monat bereits einen Lohnzettel im Postfach. Möchtest du den vorhandenen Lohnzettel wirklich überschreiben?"
      )
      if (!confirmOverwrite) return
    }

    setAssigningPage(page)
    setError(null)
    setSuccessBanner(null)

    try {
      const uploadRes = await uploadPage(pageBytes, userId, result.monthNum, result.yearNum)

      if (uploadRes.payslipId) {
        onPayslipAdded?.({
          id: uploadRes.payslipId,
          userId,
          month: result.monthNum,
          year: result.yearNum,
          url: uploadRes.url || "",
          uploadedAt: new Date().toISOString()
        })
      }

      setResult((prev) => {
        if (!prev) return prev
        return {
          ...prev,
          unassigned: prev.unassigned.filter((u) => u.page !== page),
          assigned: [
            ...prev.assigned,
            { 
              employeeName: uploadRes.employeeName, 
              employeeId: userId, 
              page,
              payslipId: uploadRes.payslipId,
              url: uploadRes.url 
            },
          ].sort((a, b) => a.page - b.page),
        }
      })

      setSuccessBanner(`✓ Lohnzettel für ${uploadRes.employeeName} (Seite ${page}) erfolgreich zugewiesen!`)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fehler beim Zuordnen")
    } finally {
      setAssigningPage(null)
    }
  }

  async function handleDeleteAssigned(item: AssignedResult) {
    if (!result) return
    const confirmDelete = window.confirm(`Zuordnung für "${item.employeeName}" (Seite ${item.page}) wirklich löschen / aufheben?`)
    if (!confirmDelete) return

    setDeletingPage(item.page)
    setError(null)
    setSuccessBanner(null)

    try {
      const res = await fetch("/api/payslips/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: item.payslipId,
          userId: item.employeeId,
          month: result.monthNum,
          year: result.yearNum,
        })
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Fehler beim Löschen der Zuordnung")
      }

      if (item.payslipId) {
        onPayslipDeleted?.(item.payslipId)
      }

      setResult(prev => {
        if (!prev) return prev
        return {
          ...prev,
          assigned: prev.assigned.filter(a => a.page !== item.page),
          unassigned: [
            ...prev.unassigned,
            { page: item.page, candidateName: item.employeeName, candidateId: item.employeeId }
          ].sort((a, b) => a.page - b.page)
        }
      })

      setSuccessBanner(`Zuordnung für "${item.employeeName}" wurde gelöscht. Seite ${item.page} ist wieder unter "Manuelle Zuordnung".`)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Löschen fehlgeschlagen")
    } finally {
      setDeletingPage(null)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.iconCircle}>📄</div>
        <div>
          <h3 className={styles.title}>Sammel-PDF verarbeiten (DATEV & Mehrfach-Abrechnungen)</h3>
          <p className={styles.subtitle}>
            Lade eine PDF mit allen Lohnzetteln hoch — Duplikate werden automatisch vermieden (bereits versorgte Mitarbeiter werden übersprungen).
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Monat</label>
            <select ref={monthRef} className={styles.select} defaultValue={new Date().getMonth() + 1}>
              {months.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Jahr</label>
            <select ref={yearRef} className={styles.select} defaultValue={currentYear}>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Sammel-PDF Datei</label>
          <input
            ref={fileRef}
            type="file"
            accept=".pdf"
            className={styles.fileInput}
            required
          />
        </div>

        <Button type="submit" fullWidth disabled={isProcessing}>
          {isProcessing ? (
            <span className={styles.loadingText}>
              <span className={styles.spinner} />
              {statusText || "Verarbeite PDF…"}
            </span>
          ) : (
            "PDF analysieren & automatisch zuordnen"
          )}
        </Button>
      </form>

      {error && (
        <div className={styles.errorBanner}>
          <span>⚠️</span> {error}
        </div>
      )}

      {successBanner && (
        <div className={styles.successBanner}>
          <span>✅</span> {successBanner}
        </div>
      )}

      {result && (
        <div className={styles.results}>
          <div className={styles.resultSummary}>
            <span className={styles.summaryItem}>
              📊 {result.totalPages} Seiten analysiert
            </span>
            <span className={styles.summaryItem + " " + styles.successText}>
              ✅ {result.assigned.length} neu zugeordnet
            </span>
            {result.alreadyPresent.length > 0 && (
              <span className={styles.summaryItem + " " + styles.infoText}>
                ℹ️ {result.alreadyPresent.length} bereits vorhanden (übersprungen)
              </span>
            )}
            {result.unassigned.length > 0 && (
              <span className={styles.summaryItem + " " + styles.warningText}>
                ⚠️ {result.unassigned.length} manuell zuordenbar
              </span>
            )}
            {result.skipped.length > 0 && (
              <span className={styles.summaryItem}>
                ⏭️ {result.skipped.length} Nicht-Lohnzettel übersprungen
              </span>
            )}
          </div>

          {/* Unassigned / Manual Assignment Section */}
          {result.unassigned.length > 0 && (
            <div className={styles.resultSection}>
              <div className={styles.sectionHeaderRow}>
                <h4 className={styles.sectionTitle}>
                  ⚠️ Manuelle Zuordnung erforderlich ({result.unassigned.length} Seiten)
                </h4>
                <span className={styles.badgeWarning}>Aktion erforderlich</span>
              </div>
              <p className={styles.sectionHelp}>
                Für folgende Seiten konnte der Name nicht eindeutig automatisch zugeordnet werden. Klicke auf die Vorschau, um das Dokument zu prüfen, und weise es dem passenden Mitarbeiter zu:
              </p>
              <div className={styles.unassignedGrid}>
                {result.unassigned.map((item) => {
                  const thumb = pageThumbnailsRef.current.get(item.page)
                  return (
                    <div key={item.page} className={styles.unassignedCard}>
                      <div className={styles.cardHeader}>
                        <span className={styles.pageTag}>Seite {item.page}</span>
                        <span className={styles.periodTag}>
                          Lohnzettel {result.monthLabel} {result.yearLabel}
                        </span>
                      </div>

                      <div className={styles.cardBody}>
                        {thumb ? (
                          <div 
                            className={styles.thumbnailContainer}
                            onClick={() => setPreviewModalPage(item.page)}
                            title="Klicken für Vollbild-Vorschau"
                          >
                            <img src={thumb} alt={`Vorschau Seite ${item.page}`} className={styles.thumbnailImg} />
                            <div className={styles.thumbnailOverlay}>
                              <span>🔍 Vorschau öffnen</span>
                            </div>
                          </div>
                        ) : (
                          <div className={styles.thumbnailPlaceholder}>
                            Keine Vorschau verfügbar
                          </div>
                        )}

                        <div className={styles.cardDetails}>
                          <div className={styles.candidateBadge}>
                            <span className={styles.candidateLabel}>Erkannter Text / Vorschlag:</span>
                            <span className={styles.candidateName}>
                              {item.candidateName || "Kein Name erkannt"}
                            </span>
                          </div>

                          <div className={styles.assignForm}>
                            <label className={styles.selectLabel}>Mitarbeiter zuweisen:</label>
                            <select
                              id={`assign-${item.page}`}
                              className={styles.assignSelect}
                              value={selectedEmployees[item.page] || ""}
                              onChange={(e) => {
                                const val = e.target.value
                                setSelectedEmployees(prev => ({ ...prev, [item.page]: val }))
                              }}
                              disabled={assigningPage === item.page}
                            >
                              <option value="">-- Mitarbeiter auswählen --</option>
                              {employees.map((emp) => {
                                const hasSlip = existingPayslips.some(
                                  (p) => p.userId === emp.id && p.month === result.monthNum && p.year === result.yearNum
                                )
                                return (
                                  <option key={emp.id} value={emp.id}>
                                    {emp.lastName ? `${emp.lastName}, ${emp.firstName || ''}` : (emp.name || emp.email)}
                                    {hasSlip ? " (Bereits vorhanden ✓)" : ""}
                                  </option>
                                )
                              })}
                            </select>

                            <Button
                              type="button"
                              size="sm"
                              disabled={!selectedEmployees[item.page] || assigningPage === item.page}
                              onClick={() => handleManualAssign(item.page)}
                            >
                              {assigningPage === item.page ? (
                                <span className={styles.loadingText}>
                                  <span className={styles.spinner} /> Speichert…
                                </span>
                              ) : (
                                "✓ Jetzt Zuordnen"
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Assigned Results Section */}
          {result.assigned.length > 0 && (
            <div className={styles.resultSection}>
              <h4 className={styles.sectionTitle}>
                ✅ Neu zugewiesen ({result.assigned.length})
              </h4>
              <div className={styles.resultList}>
                {result.assigned.map((item) => {
                  const thumb = pageThumbnailsRef.current.get(item.page)
                  return (
                    <div key={item.page} className={styles.resultItem + " " + styles.successItem}>
                      <div className={styles.resultInfo}>
                        <span className={styles.pageTag}>Seite {item.page}</span>
                        {thumb && (
                          <button
                            type="button"
                            className={styles.miniThumbBtn}
                            onClick={() => setPreviewModalPage(item.page)}
                            title="Vorschau ansehen"
                          >
                            <img src={thumb} alt="Mini-Vorschau" className={styles.miniThumbImg} />
                          </button>
                        )}
                        <span className={styles.employeeName}>{item.employeeName}</span>
                      </div>
                      
                      <div className={styles.assignedActions}>
                        {item.url && (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.viewLink}>
                            <Button variant="ghost" size="sm">PDF ansehen</Button>
                          </a>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className={styles.deleteAssignedBtn}
                          disabled={deletingPage === item.page}
                          onClick={() => handleDeleteAssigned(item)}
                        >
                          {deletingPage === item.page ? "Löscht…" : "Zuordnung aufheben / Löschen"}
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Already Present / Skipped Duplicates Section */}
          {result.alreadyPresent.length > 0 && (
            <div className={styles.resultSection}>
              <h4 className={styles.sectionTitle}>
                ℹ️ Bereits vorhanden – Übersprungen ({result.alreadyPresent.length})
              </h4>
              <p className={styles.sectionHelp}>
                Folgende Mitarbeiter hatten für {result.monthLabel} {result.yearLabel} bereits einen Lohnzettel hinterlegt. Sie wurden ignoriert, um doppelte Zustellungen im Mitarbeiter-Postfach zu verhindern:
              </p>
              <div className={styles.resultList}>
                {result.alreadyPresent.map((item) => (
                  <div key={item.page} className={styles.resultItem} style={{ borderLeft: "3px solid #0071e3" }}>
                    <div className={styles.resultInfo}>
                      <span className={styles.pageTag}>Seite {item.page}</span>
                      <span className={styles.employeeName}>{item.employeeName}</span>
                      <span style={{ fontSize: "0.85rem", color: "#64748b", marginLeft: "0.5rem" }}>
                        ✓ {item.reason}
                      </span>
                    </div>
                    {pageThumbnailsRef.current.get(item.page) && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setPreviewModalPage(item.page)}
                      >
                        Vorschau
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skipped Non-Payslips Section */}
          {result.skipped.length > 0 && (
            <div className={styles.resultSection}>
              <h4 className={styles.sectionTitle}>⏭️ Nicht-Lohnzettel übersprungen ({result.skipped.length})</h4>
              <p className={styles.sectionHelp}>
                Diese Seiten wurden als Kanzlei-Übersichten / Protokolle identifiziert und keinem Mitarbeiter zugewiesen.
              </p>
              <div className={styles.resultList}>
                {result.skipped.map((item) => (
                  <div key={item.page} className={styles.resultItem} style={{ opacity: 0.7 }}>
                    <div className={styles.resultInfo}>
                      <span className={styles.pageTag}>Seite {item.page}</span>
                      <span style={{ fontSize: '0.9rem' }}>{item.reason}</span>
                    </div>
                    {pageThumbnailsRef.current.get(item.page) && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setPreviewModalPage(item.page)}
                      >
                        Vorschau
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Fullscreen Preview Modal */}
      {previewModalPage !== null && (
        <div className={styles.modalOverlay} onClick={() => setPreviewModalPage(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>
                Vorschau Seite {previewModalPage}
              </h3>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setPreviewModalPage(null)}
              >
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              {pageThumbnailsRef.current.get(previewModalPage) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={pageThumbnailsRef.current.get(previewModalPage)}
                  alt={`Vollbild Seite ${previewModalPage}`}
                  className={styles.modalImg}
                />
              ) : (
                <p>Keine Vorschau verfügbar</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
