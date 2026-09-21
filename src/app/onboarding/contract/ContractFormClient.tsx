"use client"

import dynamic from "next/dynamic"

const ContractForm = dynamic(() => import("./ContractForm").then(mod => mod.ContractForm), {
  ssr: false,
  loading: () => <p>Vertrag wird geladen...</p>
})

export default function ContractFormClient({ personalData, startDate, hourlyWage, jobRole, contractType }: { personalData: { firstName: string, lastName: string, address: string, zipCode: string, city: string, iban?: string } | null, startDate?: Date | null, hourlyWage: number, jobRole?: string | null, contractType: string }) {
  return <ContractForm personalData={personalData} startDate={startDate} hourlyWage={hourlyWage} jobRole={jobRole} contractType={contractType} />
}
