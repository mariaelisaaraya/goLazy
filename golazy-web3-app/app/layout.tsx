import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GoLazy - Alcanza tus metas con motivación",
  description: "Plataforma de seguimiento de objetivos con recompensas en USDC",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-primary-50`}>{children}</body>
    </html>
  )
}
