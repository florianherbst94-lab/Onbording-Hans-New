"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/Button"
import { resetEmployeePassword } from "@/app/admin/adminActions"

export function PasswordResetButton({ userId, employeeName }: { userId: string, employeeName: string }) {
  const [isResetting, setIsResetting] = useState(false)

  const handleReset = async () => {
    if (!confirm(`Möchtest du das Passwort für ${employeeName} wirklich zurücksetzen? Das neue Passwort wird per E-Mail verschickt.`)) return;
    
    setIsResetting(true)
    try {
      const result = await resetEmployeePassword(userId)
      if (result.success) {
        alert(`Passwort für ${employeeName} erfolgreich zurückgesetzt! \n\nDas neue Passwort lautet: ${result.newPassword}\n\nEs wurde auch per E-Mail an den Mitarbeiter geschickt.`)
      } else {
        alert(`Fehler: ${result.error}`)
      }
    } catch (e: any) {
      alert(`Fehler: ${e.message}`)
    } finally {
      setIsResetting(false)
    }
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleReset} 
      disabled={isResetting}
      style={{ marginRight: '8px' }}
    >
      {isResetting ? "..." : "PW Reset"}
    </Button>
  )
}
