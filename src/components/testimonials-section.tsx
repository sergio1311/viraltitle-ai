"use client"

import { Avatar } from "./ui/avatar"
import { AvatarFallback } from "./ui/avatar/avatar-fallback"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    name: "María González",
    role: "YouTuber de Marketing",
    content:
      "Desde que uso ViralTitle AI, mis videos tienen un 200% más de clicks. Es increíble cómo la IA entiende lo que funciona.",
    metric: "+200% CTR",
    avatar: "MG",
  },
  {
    name: "Carlos Ruiz",
    role: "Content Manager",
    content:
      "Ahorro horas cada semana. Los títulos generados son mejores que los que yo creaba manualmente. Totalmente recomendado.",
    metric: "15h ahorradas/semana",
    avatar: "CR",
  },
  {
    name: "Ana Martínez",
    role: "Blogger Profesional",
    content:
      "Mi tráfico orgánico se triplicó en 2 meses. Los títulos están perfectamente optimizados para SEO y engagement.",
    metric: "+300% tráfico",
    avatar: "AM",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="container py-20 md:py-32 relative" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">
            Creadores que <span className="gradient-text">Confían en Nosotros</span>
          </h2>
          <p className="text-xl text-slate-300 text-balance">Resultados reales de usuarios reales</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-6 rounded-xl hover-glow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blue-400 text-blue-400" />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-6 text-slate-300">{testimonial.content}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                    <Avatar className="relative">
                      <AvatarFallback className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-blue-400 font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-white">{testimonial.name}</p>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold gradient-text">{testimonial.metric}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
