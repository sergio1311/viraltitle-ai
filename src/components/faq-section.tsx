"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const faqs = [
  {
    question: "¿Cómo funciona ViralTitle AI?",
    answer:
      "Utilizamos modelos de IA avanzados entrenados con millones de títulos exitosos. Analizamos patrones de engagement, psicología del consumidor y mejores prácticas de cada plataforma para generar títulos optimizados.",
  },
  {
    question: "¿Puedo usar los títulos generados comercialmente?",
    answer:
      "Sí, todos los títulos generados son 100% tuyos. Puedes usarlos libremente en cualquier proyecto personal o comercial sin restricciones.",
  },
  {
    question: "¿Qué idiomas soporta?",
    answer:
      "Actualmente soportamos español, inglés, portugués y francés. Estamos trabajando en agregar más idiomas próximamente.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Absolutamente. No hay contratos ni compromisos. Puedes cancelar tu suscripción en cualquier momento desde tu panel de control.",
  },
  {
    question: "¿Ofrecen garantía de devolución?",
    answer:
      "Sí, ofrecemos una garantía de devolución de 30 días sin preguntas. Si no estás satisfecho, te devolvemos tu dinero completo.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="container py-20 md:py-32 relative" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">
            <span className="gradient-text">Preguntas</span> Frecuentes
          </h2>
          <p className="text-xl text-slate-300 text-balance">Todo lo que necesitas saber</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-effect rounded-xl px-6 border-white/10"
              >
                <AccordionTrigger className="text-left text-white hover:text-blue-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
