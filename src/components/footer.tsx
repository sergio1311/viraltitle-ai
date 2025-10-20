"use client"

import Link from "next/link"
import { Sparkles, Twitter, Linkedin, Youtube } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="container py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-blue-500" />
            <span className="text-lg font-bold gradient-text">ViralTitle AI</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-md mx-auto mb-8">
            Crea títulos virales con inteligencia artificial que convierten.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 hover-glow pulse-badge">
            Comenzar Gratis Ahora
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold mb-4 text-white">Producto</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Guías
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center pt-8 border-t border-white/10 gap-6">
          <p className="text-sm text-slate-400">© 2025 ViralTitle AI. Todos los derechos reservados.</p>

          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
