"use client"
import React, { useState, useEffect, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/Card"
import styles from "./planning.module.css"

export default function StatisticsClient({ requests }: { requests: any[] }) {
  const [selectedRequestId, setSelectedRequestId] = useState<string>("")
  const [responses, setResponses] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (requests.length > 0 && !selectedRequestId) {
      setSelectedRequestId(requests[0].id)
    }
  }, [requests, selectedRequestId])

  useEffect(() => {
    if (!selectedRequestId) return
    const fetchResponses = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`/api/planning/admin/responses?requestId=${selectedRequestId}`)
        const data = await res.json()
        setResponses(data)
      } catch(e) {
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchResponses()
  }, [selectedRequestId])

  const currentRequest = requests.find(r => r.id === selectedRequestId)

  const stats = useMemo(() => {
    if (!currentRequest) return []

    const totalDays = currentRequest.days.length
    const saturdays = currentRequest.days.filter((d: any) => new Date(d.date).getDay() === 6)
    const totalSaturdays = saturdays.length

    const empMap = new Map<string, any>()

    // Initialize all users who have at least one response
    responses.forEach(r => {
      if (!empMap.has(r.employeeId)) {
        empMap.set(r.employeeId, {
          id: r.employeeId,
          name: r.user.name || "Unbekannt",
          yes: 0,
          no: 0,
          maybe: 0,
          satYes: 0,
          satNo: 0,
          satMaybe: 0,
        })
      }
      const emp = empMap.get(r.employeeId)
      
      const isSat = new Date(r.day.date).getDay() === 6
      if (r.status === "YES") {
        emp.yes++
        if (isSat) emp.satYes++
      } else if (r.status === "NO") {
        emp.no++
        if (isSat) emp.satNo++
      } else if (r.status === "MAYBE") {
        emp.maybe++
        if (isSat) emp.satMaybe++
      }
    })

    return Array.from(empMap.values()).map(emp => {
      return {
        ...emp,
        yesPct: totalDays > 0 ? (emp.yes / totalDays) * 100 : 0,
        noPct: totalDays > 0 ? (emp.no / totalDays) * 100 : 0,
        maybePct: totalDays > 0 ? (emp.maybe / totalDays) * 100 : 0,
        satYesPct: totalSaturdays > 0 ? (emp.satYes / totalSaturdays) * 100 : 0,
        satNoPct: totalSaturdays > 0 ? (emp.satNo / totalSaturdays) * 100 : 0,
      }
    }).sort((a, b) => b.yesPct - a.yesPct) // Sort descending by YES percentage
  }, [responses, currentRequest])

  if (requests.length === 0) return <p>Bitte erstelle zuerst eine Abfrage.</p>

  const totalDays = currentRequest?.days?.length || 0
  const totalSaturdays = currentRequest?.days?.filter((d: any) => new Date(d.date).getDay() === 6).length || 0

  return (
    <Card>
      <CardContent>
        <div style={{ paddingTop: "1.5rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ fontWeight: 600, marginRight: "1rem" }}>Auswertungsmonat wählen:</label>
          <select 
            value={selectedRequestId} 
            onChange={e => setSelectedRequestId(e.target.value)}
            className={styles.select}
            style={{ width: "auto", display: "inline-block" }}
          >
            {requests.map(req => (
              <option key={req.id} value={req.id}>{req.title}</option>
            ))}
          </select>
        </div>

        {isLoading ? (
          <p>Lade Statistiken...</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table className={styles.table} style={{ width: "100%", minWidth: "800px", borderCollapse: "collapse", fontSize: "0.9rem", color: "#0f172a" }}>
              <thead>
                <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                  <th style={{ padding: "0.75rem", textAlign: "left" }}>Mitarbeiter</th>
                  <th style={{ padding: "0.75rem", textAlign: "center", borderLeft: "1px solid #e2e8f0" }} colSpan={3}>
                    Alle Tage ({totalDays})
                  </th>
                  <th style={{ padding: "0.75rem", textAlign: "center", borderLeft: "1px solid #e2e8f0" }} colSpan={2}>
                    Nur Samstage ({totalSaturdays})
                  </th>
                </tr>
                <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                  <th style={{ padding: "0.5rem" }}></th>
                  {/* Alle Tage */}
                  <th style={{ padding: "0.5rem", textAlign: "center", borderLeft: "1px solid #e2e8f0", color: "#16a34a" }}>Ja</th>
                  <th style={{ padding: "0.5rem", textAlign: "center", color: "#eab308" }}>Vielleicht</th>
                  <th style={{ padding: "0.5rem", textAlign: "center", color: "#dc2626" }}>Nein</th>
                  {/* Samstage */}
                  <th style={{ padding: "0.5rem", textAlign: "center", borderLeft: "1px solid #e2e8f0", color: "#16a34a" }}>Ja</th>
                  <th style={{ padding: "0.5rem", textAlign: "center", color: "#dc2626" }}>Nein</th>
                </tr>
              </thead>
              <tbody>
                {stats.length === 0 ? (
                  <tr><td colSpan={6} style={{ padding: "1rem", textAlign: "center" }}>Noch keine Antworten vorhanden.</td></tr>
                ) : (
                  stats.map((emp, i) => (
                    <tr key={emp.id} style={{ borderBottom: "1px solid #e2e8f0", background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                      <td style={{ padding: "0.75rem", fontWeight: 500 }}>{emp.name}</td>
                      
                      <td style={{ padding: "0.75rem", textAlign: "center", borderLeft: "1px solid #e2e8f0" }}>
                        <div style={{ fontWeight: "bold", color: "#16a34a" }}>{emp.yes}</div>
                        <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{Math.round(emp.yesPct)}%</div>
                      </td>
                      <td style={{ padding: "0.75rem", textAlign: "center" }}>
                        <div style={{ fontWeight: "bold", color: "#eab308" }}>{emp.maybe}</div>
                        <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{Math.round(emp.maybePct)}%</div>
                      </td>
                      <td style={{ padding: "0.75rem", textAlign: "center" }}>
                        <div style={{ fontWeight: "bold", color: "#dc2626" }}>{emp.no}</div>
                        <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{Math.round(emp.noPct)}%</div>
                      </td>

                      <td style={{ padding: "0.75rem", textAlign: "center", borderLeft: "1px solid #e2e8f0" }}>
                        <div style={{ fontWeight: "bold", color: "#16a34a" }}>{emp.satYes}</div>
                        <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{Math.round(emp.satYesPct)}%</div>
                      </td>
                      <td style={{ padding: "0.75rem", textAlign: "center" }}>
                        <div style={{ fontWeight: "bold", color: "#dc2626" }}>{emp.satNo}</div>
                        <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{Math.round(emp.satNoPct)}%</div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      </CardContent>
    </Card>
  )
}
