"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface TechBadgeProps {
  name: string
  icon: string
}

export function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-colors group"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="w-12 h-12 relative mb-3">
        <Image src={icon || "/placeholder.svg"} alt={name} width={48} height={48} className="object-contain" />
      </div>
      <span className="text-sm font-medium text-slate-300 group-hover:text-blue-400 transition-colors">{name}</span>
    </motion.div>
  )
}

