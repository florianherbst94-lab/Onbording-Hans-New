"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import BulkPayslipUpload from "@/components/admin/BulkPayslipUpload"
import styles from "./PayslipAdminDashboard.module.css"

interface Employee {
  id: string
  name: string | null
  email: string | null
  firstName?: string
  lastName?: string
  zipCode?: string
}

interface PayslipItem {
  id: string
  userId: string
  month: number
  year: number
  url: string
  uploadedAt: string | Date
  userName?: string
  userEmail?: string
}

interface Props {
  employees: Employee[]
  initialPayslips: PayslipItem[]
}

const MONTHS = [
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

export default function PayslipAdminDashboard({ employees, initialPayslips }: Props) {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1

  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth)
  const [selectedYear, setSelectedYear] = useState<number>(currentYear)
  const [payslips, setPayslips] = useState<PayslipItem[]>(initialPayslips)
  const [activeTab, setActiveTab] = useState<"all" | "missing" | "assigned">("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Single Upload Form States
  const [singleUserId, setSingleUserId] = useState("")
  const [singleMonth, setSingleMonth] = useState(currentMonth)
  const [singleYear, setSingleYear] = useState(currentYear)
  const [singleFile, setSingleFile] = useState<File | null>(null)
  const [singlePreviewUrl, setSinglePreviewUrl] = useState<string | null>(null)
  const [isUploadingSingle, setIsUploadingSingle] = useState(false)
  const [singleError, setSingleError] = useState<string | null>(null)
  const [singleSuccess, setSingleSuccess] = useState<string | null>(null)

  const singleFormRef = useRef<HTMLDivElement>(null)

  const years = useMemo(() => {
    return [currentYear - 2, currentYear - 1, currentYear, currentYear + 1]
  }, [currentYear])

  // Handle preview for single upload
  useEffect(() => {
    if (!singleFile) {
      setSinglePreviewUrl(null)
      return
    }
    const url = URL.createObjectURL(singleFile)
    setSinglePreviewUrl(url)
    return () => {
      URL.revokeObjectURL(url)
    }
  }, [singleFile])

  // Compute status matrix for selected month & year
  const matrixData = useMemo(() => {
    const monthSlips = payslips.filter(
      (p) => p.month === selectedMonth && p.year === selectedYear
    )
    const map = new Map<string, PayslipItem>()
    monthSlips.forEach((p) => map.set(p.userId, p))

    return employees.map((emp) => {
      const payslip = map.get(emp.id)
      return {
        employee: emp,
        hasPayslip: !!payslip,
        payslip: payslip || null,
      }
    })
  }, [employees, payslips, selectedMonth, selectedYear])

  // Filtered rows for the matrix table
  const filteredRows = useMemo(() => {
    return matrixData.filter((row) => {
      // Tab filter
      if (activeTab === "missing" && row.hasPayslip) return false
      if (activeTab === "assigned" && !row.hasPayslip) return false

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const name = (row.employee.name || "").toLowerCase()
        const email = (row.employee.email || "").toLowerCase()
        const lastName = (row.employee.lastName || "").toLowerCase()
        const firstName = (row.employee.firstName || "").toLowerCase()
        if (!name.includes(q) && !email.includes(q) && !lastName.includes(q) && !firstName.includes(q)) {
          return false
        }
      }
      return true
    })
  }, [matrixData, activeTab, searchQuery])

  const totalEmployees = employees.length
  const totalAssigned = matrixData.filter((r) => r.hasPayslip).length
  const totalMissing = totalEmployees - totalAssigned
  const quotaPercent = totalEmployees > 0 ? Math.round((totalAssigned / totalEmployees) * 100) : 0

  const monthLabel = MONTHS.find((m) => m.value === selectedMonth)?.label || ""

  async function handleDelete(payslipId: string, empName: string) {
    if (!confirm(`Lohnzettel für "${empName}" wirklich löschen?`)) return

    try {
      const res = await fetch("/api/payslips/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: payslipId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Fehler beim Löschen")

      setPayslips((prev) => prev.filter((p) => p.id !== payslipId))
    } catch (err: any) {
      alert(err.message || "Fehler beim Löschen des Lohnzettels")
    }
  }

  function handleQuickUpload(empId: string) {
    setSingleUserId(empId)
    setSingleMonth(selectedMonth)
    setSingleYear(selectedYear)
    singleFormRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  async function handleSingleUploadSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!singleUserId || !singleFile) {
      setSingleError("Bitte Mitarbeiter und PDF-Datei auswählen.")
      return
    }

    setIsUploadingSingle(true)
    setSingleError(null)
    setSingleSuccess(null)

    try {
      const formData = new FormData()
      formData.append("file", singleFile)
      formData.append("userId", singleUserId)
      formData.append("month", String(singleMonth))
      formData.append("year", String(singleYear))

      const res = await fetch("/api/payslips/save", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Upload fehlgeschlagen")

      // Add or update payslip in state
      setPayslips((prev) => {
        const withoutOld = prev.filter(
          (p) => !(p.userId === singleUserId && p.month === singleMonth && p.year === singleYear)
        )
        return [
          ...withoutOld,
          {
            id: data.payslipId || `temp-${Date.now()}`,
            userId: singleUserId,
            month: singleMonth,
            year: singleYear,
            url: data.url,
            uploadedAt: new Date().toISOString(),
          },
        ]
      })

      setSingleSuccess(`✓ Lohnzettel für ${data.employeeName} (${MONTHS.find(m => m.value === singleMonth)?.label} ${singleYear}) erfolgreich hochgeladen!`)
      setSingleFile(null)
    } catch (err: any) {
      setSingleError(err.message || "Fehler beim Hochladen")
    } finally {
      setIsUploadingSingle(false)
    }
  }

  return (
    <div>
      {/* 1. Bulk Upload Tool */}
      <BulkPayslipUpload employees={employees} />

      {/* 2. Monthly Status Matrix & Verification Overview */}
      <div className={styles.matrixContainer}>
        <div className={styles.matrixHeader}>
          <div>
            <h2 className={styles.title}>
              Monats-Statusübersicht & Vollständigkeitsprüfung
            </h2>
            <p className={styles.subtitle}>
              Prüfe auf einen Blick, welche Mitarbeiter für {monthLabel} {selectedYear} ihren Lohnzettel erhalten haben und wer noch fehlt.
            </p>
          </div>

          <div className={styles.filtersRow}>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(Number(e.target.value))}
              className={styles.filterSelect}
            >
              {MONTHS.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className={styles.filterSelect}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Gesamt Mitarbeiter</span>
            <span className={styles.statValue}>{totalEmployees}</span>
          </div>
          <div className={`${styles.statCard} ${styles.statSuccess}`}>
            <span className={styles.statLabel}>Lohnzettel zugewiesen</span>
            <span className={styles.statValue}>{totalAssigned}</span>
          </div>
          <div className={`${styles.statCard} ${styles.statWarning}`}>
            <span className={styles.statLabel}>Ausstehend / Fehlt</span>
            <span className={styles.statValue}>{totalMissing}</span>
          </div>
          <div className={`${styles.statCard} ${styles.statRate}`}>
            <span className={styles.statLabel}>Abdeckungsquote</span>
            <span className={styles.statValue}>{quotaPercent}%</span>
          </div>
        </div>

        {/* Tab Filters and Search */}
        <div className={styles.tabRow}>
          <div className={styles.tabs}>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === "all" ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab("all")}
            >
              Alle ({totalEmployees})
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === "missing" ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab("missing")}
            >
              Fehlend ({totalMissing})
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === "assigned" ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab("assigned")}
            >
              Zugewiesen ({totalAssigned})
            </button>
          </div>

          <input
            type="text"
            placeholder="Mitarbeiter suchen…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchBox}
          />
        </div>

        {/* Matrix Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Mitarbeiter</th>
                <th>Status für {monthLabel} {selectedYear}</th>
                <th>Bereitgestellt am</th>
                <th>Aktionen</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map(({ employee, hasPayslip, payslip }) => {
                const displayName = employee.lastName
                  ? `${employee.lastName}, ${employee.firstName || ""}`
                  : employee.name || employee.email || "Unbekannt"

                return (
                  <tr key={employee.id}>
                    <td>
                      <div className={styles.empCell}>
                        <Link 
                          href={`/admin/contracts/${employee.id}`} 
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <span className={styles.empName} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                            {displayName}
                          </span>
                        </Link>
                        <span className={styles.empEmail}>{employee.email}</span>
                      </div>
                    </td>
                    <td>
                      {hasPayslip ? (
                        <span className={styles.badgeSuccess}>✓ Zugewiesen</span>
                      ) : (
                        <span className={styles.badgeMissing}>✕ Fehlt noch</span>
                      )}
                    </td>
                    <td>
                      {payslip
                        ? new Date(payslip.uploadedAt).toLocaleDateString("de-DE", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })
                        : "—"}
                    </td>
                    <td>
                      <div className={styles.actionsCell}>
                        {hasPayslip && payslip ? (
                          <>
                            <a href={payslip.url} target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" size="sm">
                                PDF ansehen
                              </Button>
                            </a>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={styles.deleteBtn}
                              onClick={() => handleDelete(payslip.id, displayName)}
                            >
                              Löschen
                            </Button>
                          </>
                        ) : (
                          <Button
                            variant="secondary"
                            size="sm"
                            className={styles.quickUploadBtn}
                            onClick={() => handleQuickUpload(employee.id)}
                          >
                            + Lohnzettel hochladen
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
              {filteredRows.length === 0 && (
                <tr>
                  <td colSpan={4} style={{ textAlign: "center", padding: "2.5rem", color: "#64748b" }}>
                    Keine Mitarbeiter in dieser Ansicht gefunden.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Single Payslip Upload with Live PDF Preview */}
      <div ref={singleFormRef} className={styles.uploadSection}>
        <div>
          <h3 className={styles.title}>Einzelnen Lohnzettel hochladen</h3>
          <p className={styles.subtitle} style={{ marginBottom: "1.25rem" }}>
            Lade eine einzelne Abrechnung hoch und überprüfe das Dokument vor dem Speichern in der Live-Vorschau.
          </p>

          <form onSubmit={handleSingleUploadSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Mitarbeiter auswählen</label>
              <select
                value={singleUserId}
                onChange={(e) => setSingleUserId(e.target.value)}
                className={styles.select}
                required
              >
                <option value="">-- Mitarbeiter auswählen --</option>
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.lastName ? `${emp.lastName}, ${emp.firstName || ""}` : emp.name || emp.email}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Monat</label>
                <select
                  value={singleMonth}
                  onChange={(e) => setSingleMonth(Number(e.target.value))}
                  className={styles.select}
                  required
                >
                  {MONTHS.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Jahr</label>
                <select
                  value={singleYear}
                  onChange={(e) => setSingleYear(Number(e.target.value))}
                  className={styles.select}
                  required
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Lohnzettel Datei (PDF)</label>
              <input
                type="file"
                accept=".pdf"
                className={styles.fileInput}
                onChange={(e) => setSingleFile(e.target.files?.[0] || null)}
                required
              />
            </div>

            {singleError && (
              <div style={{ color: "#c0392b", background: "#fff5f5", padding: "0.75rem", borderRadius: "8px", fontSize: "0.85rem", border: "1px solid #fdd" }}>
                ⚠️ {singleError}
              </div>
            )}

            {singleSuccess && (
              <div style={{ color: "#166534", background: "#f0fdf4", padding: "0.75rem", borderRadius: "8px", fontSize: "0.85rem", border: "1px solid #bbf7d0", fontWeight: 600 }}>
                {singleSuccess}
              </div>
            )}

            <Button type="submit" fullWidth disabled={isUploadingSingle || !singleFile || !singleUserId}>
              {isUploadingSingle ? "Wird hochgeladen…" : "Lohnzettel hochladen"}
            </Button>
          </form>
        </div>

        {/* Live Preview Panel */}
        <div className={styles.previewBox}>
          {singlePreviewUrl ? (
            <>
              <div className={styles.previewInfoBadge}>PDF Vorschau aktiv</div>
              <iframe
                src={singlePreviewUrl}
                title="PDF Vorschau"
                className={styles.previewFrame}
              />
            </>
          ) : (
            <div className={styles.previewPlaceholder}>
              <span className={styles.previewIcon}>📄</span>
              <p>Wähle eine PDF-Datei aus, um hier die Vorschau zur Kontrolle zu sehen.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
