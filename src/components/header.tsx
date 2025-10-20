"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full glass-effect border-b border-white/10"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold gradient-text">ViralTitle IA</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#inicio" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Inicio
          </Link>
          <Link
            href="#caracteristicas"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Características
          </Link>
          <Link href="#precios" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Precios
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
            Login
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 hover-glow"
          >
            Comenzar Gratis
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
