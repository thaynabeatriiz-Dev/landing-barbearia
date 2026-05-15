"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

function GoldParticle({ delay }: { delay: number }) {
  const randomX = Math.random() * 100
  const randomDuration = 8 + Math.random() * 4
  
  return (
    <motion.div
      initial={{ y: "100vh", x: `${randomX}vw`, opacity: 0 }}
      animate={{ 
        y: "-10vh", 
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-1 h-1 bg-[#C8A96B] rounded-full"
      style={{
        boxShadow: "0 0 6px #C8A96B, 0 0 12px #C8A96B",
      }}
    />
  )
}

export function Hero() {
  const [particles, setParticles] = useState<number[]>([])

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => i))
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f12]/90 via-[#0f0f12]/70 to-[#0f0f12]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f12]/80 via-transparent to-[#0f0f12]/80" />
      </div>

      {/* Gold Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((i) => (
          <GoldParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#C8A96B]/50 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-px h-48 bg-gradient-to-b from-transparent via-[#C8A96B]/50 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block text-[#C8A96B] text-sm tracking-[0.4em] uppercase mb-4">
            Experiência Premium
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
        >
          <span className="block">Renove o seu</span>
          <span className="block mt-2 text-gold-gradient animate-glow">visual</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Experiência premium em cortes masculinos, barba e estilo sofisticado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#servicos"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-[#0f0f12] font-medium tracking-wide rounded hover:bg-[#C8A96B] transition-colors duration-300 min-w-[200px]"
          >
            Explorar Coleção
          </motion.a>
          <motion.a
            href="#sobre"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-transparent text-white font-medium tracking-wide rounded border border-white/30 hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-300 min-w-[200px]"
          >
            Nossa História
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-[#C8A96B]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
