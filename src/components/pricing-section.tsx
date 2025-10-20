"use client"

import { Button } from "./ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const plans = [
  {
    name: "Gratis",
    price: "$0",
    period: "para siempre",
    description: "Perfecto para empezar",
    features: ["10 títulos por día", "Acceso a templates básicos", "Soporte por email", "Análisis básico"],
    cta: "Comenzar Gratis",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/mes",
    description: "Para creadores serios",
    features: [
      "500 títulos por mes",
      "Todos los templates premium",
      "Análisis avanzado de performance",
      "Soporte prioritario",
      "Exportación en lote",
      "API access",
    ],
    cta: "Comenzar Prueba Gratis",
    popular: true,
  },
  {
    name: "Agency",
    price: "$29.99",
    period: "/mes",
    description: "Para equipos y agencias",
    features: [
      "Títulos ilimitados",
      "Múltiples usuarios (hasta 10)",
      "White label disponible",
      "Soporte dedicado 24/7",
      "Integraciones personalizadas",
      "Consultoría mensual",
    ],
    cta: "Contactar Ventas",
    popular: false,
  },
]

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="precios" className="container py-20 md:py-32 relative" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">
            Planes para <span className="gradient-text">Cada Necesidad</span>
          </h2>
          <p className="text-xl text-slate-300 text-balance">Comienza gratis, escala cuando lo necesites</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: plan.popular ? 1.05 : 1.02, rotateY: 2 }}
              className={`glass-effect p-8 rounded-2xl relative ${
                plan.popular ? "gradient-border shadow-2xl" : ""
              } hover-glow`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full pulse-badge">
                    Más Popular
                  </span>
                </motion.div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed text-slate-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
