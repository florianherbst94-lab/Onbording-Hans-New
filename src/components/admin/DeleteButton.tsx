"use client"

import { Button } from "@/components/ui/Button"

interface DeleteButtonProps {
  action: (formData: FormData) => Promise<void>
  confirmMessage?: string
  label?: string
}

export default function DeleteButton({ action, confirmMessage = "Wirklich löschen?", label = "Löschen" }: DeleteButtonProps) {
  return (
    <form action={action} onSubmit={(e) => { if(!confirm(confirmMessage)) e.preventDefault(); }}>
      <Button variant="ghost" size="sm" type="submit" style={{ color: '#d93025' }}>
        {label}
      </Button>
    </form>
  )
}
