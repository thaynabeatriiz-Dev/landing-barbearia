"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Crown, Gem, Sparkles, Calendar } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Profissionais especializados",
    description: "Equipe altamente qualificada e em constante atualização",
  },
  {
    icon: Crown,
    title: "Atendimento premium",
    description: "Experiência exclusiva do início ao fim",
  },
  {
    icon: Gem,
    title: "Ambiente sofisticado",
    description: "Espaço projetado para seu conforto e bem-estar",
  },
  {
    icon: Sparkles,
    title: "Produtos de alta qualidade",
    description: "Utilizamos apenas as melhores marcas do mercado",
  },
  {
    icon: Calendar,
    title: "Agendamento rápido online",
    description: "Reserve seu horário de forma prática e instantânea",
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="relative py-24 bg-gradient-to-b from-[#0f0f12] via-[#141418] to-[#0f0f12]" ref={ref}>
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96B]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96B]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A96B] text-sm tracking-[0.3em] uppercase">Diferenciais</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
            Por que nos escolher
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-lg bg-[#1a1a1f]/50 border border-[#C8A96B]/10 hover:border-[#C8A96B]/30 transition-all duration-500"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#C8A96B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 mb-6 rounded-full bg-[#C8A96B]/10 flex items-center justify-center group-hover:bg-[#C8A96B]/20 transition-colors duration-300"
                >
                  <feature.icon className="w-7 h-7 text-[#C8A96B]" />
                </motion.div>
                
                <h3 className="text-white font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
