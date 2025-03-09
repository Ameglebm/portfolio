"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Frame, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold mr-4">
          <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
            <Frame className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-white">Alisson Amegle</span>
        </Link>

        <nav className="hidden md:flex flex-row items-center gap-6 text-sm lg:gap-8 ml-auto">
          <Link
            href="/"
            className={`font-medium transition-colors hover:text-blue-400 ${
              pathname === "/" ? "text-blue-400" : "text-slate-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/curriculo"
            className={`font-medium transition-colors hover:text-blue-400 ${
              pathname === "/curriculo" ? "text-blue-400" : "text-slate-300"
            }`}
          >
            Currículo
          </Link>
          <Link
            href="/contato"
            className={`font-medium transition-colors hover:text-blue-400 ${
              pathname === "/contato" ? "text-blue-400" : "text-slate-300"
            }`}
          >
            Contato
          </Link>
        </nav>

        <button className="ml-auto md:hidden text-slate-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 bg-slate-900 border-b border-slate-800 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col py-4 px-4">
              <Link
                href="/"
                className={`py-2 font-medium transition-colors hover:text-blue-400 ${
                  pathname === "/" ? "text-blue-400" : "text-slate-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/curriculo"
                className={`py-2 font-medium transition-colors hover:text-blue-400 ${
                  pathname === "/curriculo" ? "text-blue-400" : "text-slate-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Currículo
              </Link>
              <Link
                href="/contato"
                className={`py-2 font-medium transition-colors hover:text-blue-400 ${
                  pathname === "/contato" ? "text-blue-400" : "text-slate-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

