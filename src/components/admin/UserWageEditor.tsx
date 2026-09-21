"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { updateEmployeeWage } from "@/app/admin/adminActions"
import { useRouter } from "next/navigation"

export function UserWageEditor({ userId, currentWage, currentContractType, currentJobRole }: { userId: string, currentWage: number, currentContractType: string, currentJobRole: string }) {
  const [wage, setWage] = useState(currentWage.toString())
  const [contractType, setContractType] = useState(currentContractType)
  const [jobRole, setJobRole] = useState(currentJobRole)
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()

  const handleUpdate = async () => {
    const val = parseFloat(wage)
    if (isNaN(val)) return alert("Bitte einen gültigen Zahlenwert eingeben.")
    
    setIsPending(true)
    const res = await updateEmployeeWage(userId, val, contractType, jobRole)
    setIsPending(false)

    if (res.success) {
      alert("Vertragsdaten erfolgreich aktualisiert!")
      router.refresh()
    } else {
      alert("Fehler: " + res.error)
    }
  }

  return (
    <div style={{ 
      display: 'flex', 
      gap: '1rem', 
      alignItems: 'flex-end', 
      padding: '1rem', 
      backgroundColor: 'rgba(0, 113, 227, 0.05)', 
      borderRadius: '12px',
      marginBottom: '2rem'
    }}>
      <div style={{ flex: 1 }}>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', fontWeight: 600, color: '#86868b' }}>VERTRAGSART</p>
        <select 
          value={contractType} 
          onChange={e => setContractType(e.target.value)}
          style={{ 
            width: '100%',
            padding: '10px 14px',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
            color: 'var(--foreground)',
            fontSize: '15px'
          }}
        >
          <option value="MINIJOB">Minijob (geringfügig)</option>
          <option value="PART_TIME">Teilzeit</option>
          <option value="FULL_TIME">Vollzeit</option>
        </select>
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', fontWeight: 600, color: '#86868b' }}>TÄTIGKEIT</p>
        <select 
          value={jobRole} 
          onChange={e => setJobRole(e.target.value)}
          style={{ 
            width: '100%',
            padding: '10px 14px',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
            color: 'var(--foreground)',
            fontSize: '15px'
          }}
        >
          <option value="SERVICE">Servicekraft / Barkraft</option>
          <option value="ORDNER">Ordner</option>
          <option value="REINIGUNGSKRAFT">Reinigungskraft</option>
          <option value="HAUSMEISTER">Hausmeister</option>
        </select>
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', fontWeight: 600, color: '#86868b' }}>STUNDENLOHN (€)</p>
        <Input 
          type="number" 
          step="0.01" 
          value={wage} 
          onChange={e => setWage(e.target.value)} 
          style={{ marginBottom: 0 }}
        />
      </div>
      <Button onClick={handleUpdate} disabled={isPending}>
        {isPending ? "Speichern..." : "Speichern"}
      </Button>
    </div>
  )
}
