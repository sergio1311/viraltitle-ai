"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const exampleTitles = [
  "7 Secretos que los Expertos NO Quieren que Sepas sobre [Tu Tema]",
  "Cómo [Tu Tema] Cambió Mi Vida en Solo 30 Días (Resultados Reales)",
  "La Guía Definitiva de [Tu Tema]: Todo lo que Necesitas Saber en 2025",
]

export function HeroSection() {
  const [topic, setTopic] = useState("")
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    if (!topic.trim()) return

    setIsGenerating(true)

    setTimeout(() => {
      const titles = exampleTitles.map((title) => title.replace("[Tu Tema]", topic))
      setGeneratedTitles(titles)
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <section id="inicio" className="container py-20 md:py-32 relative">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full glass-effect px-4 py-1.5 text-sm font-medium text-blue-400 mb-6 pulse-badge"
        >
          <Sparkles className="h-4 w-4" />
          Potenciado por IA Avanzada
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance"
        >
          <span className="gradient-text">Crea Títulos Virales</span>
          <br />
          <span className="text-white">con IA que Convierten</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-slate-300 mb-12 text-balance leading-relaxed"
        >
          Potencia tu engagement hasta 300% con títulos optimizados por inteligencia artificial
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-effect p-6 md:p-8 mb-8 rounded-2xl shadow-2xl hover-glow"
        >
          <h3 className="text-lg font-semibold mb-4 text-left text-white">Prueba el Generador Ahora</h3>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Input
              placeholder="Escribe tu tema (ej: marketing digital, fitness, productividad)"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            />
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !topic.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 hover-glow"
            >
              {isGenerating ? (
                <>Generando...</>
              ) : (
                <>
                  Generar Títulos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {generatedTitles.length > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              <p className="text-sm font-medium text-left text-slate-400">Títulos generados:</p>
              {generatedTitles.map((title, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg glass-effect text-left border border-white/10 hover:border-blue-500/50 hover:scale-105 transition-all cursor-pointer"
                >
                  <p className="text-sm font-medium text-white">{title}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 hover-glow"
          >
            Comenzar Gratis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
            Ver Demo Completa
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-slate-400 mt-6"
        >
          No requiere tarjeta de crédito • 10 títulos gratis al día
        </motion.p>
      </div>
    </section>
  )
}
