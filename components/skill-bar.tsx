"use client"

import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  percentage: number
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <p className="text-sm font-medium text-slate-300">{name}</p>
        <p className="text-sm text-slate-400">{percentage}%</p>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </div>
  )
}

