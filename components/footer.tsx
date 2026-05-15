"use client"

import { motion } from "framer-motion"
import { Diamond, Instagram, Phone, MapPin, Clock, CreditCard } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#agendamento", label: "Agendamento" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0d] border-t border-[#C8A96B]/20">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#C8A96B]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Diamond className="w-8 h-8 text-[#C8A96B]" strokeWidth={1.5} />
                <div className="absolute inset-0 bg-[#C8A96B]/20 blur-xl rounded-full" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-white font-serif text-lg tracking-wide">
                  Barber Shop
                </span>
                <span className="text-[#C8A96B] text-xs tracking-[0.3em] uppercase">
                  André Luis
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Há mais de 10 anos transformando visuais masculinos com excelência e sofisticação. Uma experiência premium que vai além do corte.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1f] border border-[#C8A96B]/20 flex items-center justify-center text-[#C8A96B] hover:bg-[#C8A96B]/10 hover:border-[#C8A96B]/50 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1f] border border-[#C8A96B]/20 flex items-center justify-center text-[#C8A96B] hover:bg-[#C8A96B]/10 hover:border-[#C8A96B]/50 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#C8A96B] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">
                  Rua da Elegância, 123<br />
                  Centro - São Paulo, SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C8A96B]" />
                <span className="text-white/50 text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                <div className="text-white/50 text-sm">
                  <p>Seg - Sex: 09h às 20h</p>
                  <p>Sáb: 09h às 18h</p>
                  <p>Dom: Fechado</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-white font-medium mb-6">Formas de Pagamento</h3>
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-[#C8A96B]" />
              <span className="text-white/50 text-sm">Aceitamos</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Pix", "Cartão", "Dinheiro"].map((method) => (
                <span
                  key={method}
                  className="px-3 py-1.5 rounded-lg bg-[#1a1a1f] border border-[#C8A96B]/20 text-white/60 text-xs"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#C8A96B]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Barber Shop - André Luis. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-sm">
            Desenvolvido com ♦ para sua experiência premium
          </p>
        </div>
      </div>
    </footer>
  )
}
