"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Diamond, Search, Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#agendamento", label: "Agendamento" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0f0f12]/95 backdrop-blur-xl border-b border-[#C8A96B]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Diamond className="w-8 h-8 text-[#C8A96B]" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-[#C8A96B]/20 blur-xl rounded-full" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-lg tracking-wide group-hover:text-[#C8A96B] transition-colors duration-300">
                Barber Shop
              </span>
              <span className="text-[#C8A96B] text-xs tracking-[0.3em] uppercase">
                André Luis
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={link.href}
                  className="relative text-white/80 text-sm tracking-wide hover:text-[#C8A96B] transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C8A96B] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/70 hover:text-[#C8A96B] transition-colors"
            >
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.a
              href="#agendamento"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-6 py-2.5 bg-gradient-to-r from-[#C8A96B] to-[#D4BA82] text-[#0f0f12] text-sm font-medium tracking-wide rounded overflow-hidden group"
            >
              <span className="relative z-10">Agendar Agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4BA82] to-[#C8A96B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-[#C8A96B] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-[#C8A96B]/20"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-[#C8A96B] transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="#agendamento"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 px-6 py-3 bg-gradient-to-r from-[#C8A96B] to-[#D4BA82] text-[#0f0f12] text-center font-medium rounded"
                >
                  Agendar Agora
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
