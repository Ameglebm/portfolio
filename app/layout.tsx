import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alisson Amegle - Desenvolvedor Backend",
  description:
    "Portfolio profissional de Alisson Amegle, Desenvolvedor Backend com foco em Node.js, Nest.js e TypeScript",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <MainNav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'