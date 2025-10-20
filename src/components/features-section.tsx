"use client"

import { Youtube, Linkedin, Twitter, FileText, TrendingUp, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: Youtube,
    title: "Optimizado para YouTube",
    description: "Títulos diseñados para maximizar CTR y retención en videos",
  },
  {
    icon: Linkedin,
    title: "Posts de LinkedIn",
    description: "Genera títulos profesionales que aumentan el engagement B2B",
  },
  {
    icon: Twitter,
    title: "Tweets Virales",
    description: "Crea títulos que capturan atención en segundos",
  },
  {
    icon: FileText,
    title: "Artículos de Blog",
    description: "Títulos SEO-optimizados que mejoran tu ranking",
  },
  {
    icon: TrendingUp,
    title: "Análisis de Performance",
    description: "Predicción de engagement basada en datos reales",
  },
  {
    icon: Zap,
    title: "Templates Predefinidos",
    description: "Más de 50 fórmulas probadas para diferentes nichos",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="caracteristicas" className="container py-20 md:py-32 relative" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">
            Todo lo que Necesitas para Crear <span className="gradient-text">Títulos Perfectos</span>
          </h2>
          <p className="text-xl text-slate-300 text-balance">Herramientas profesionales para cada plataforma</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:scale-105 hover-glow transition-all cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 w-12 h-12 flex items-center justify-center mb-4"
                >
                  <Icon className="h-6 w-6 text-blue-400" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
