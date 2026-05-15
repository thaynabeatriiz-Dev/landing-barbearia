"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Scissors, Sparkles } from "lucide-react"

const categories = [
  {
    name: "Barba",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Cabelo",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2088&auto=format&fit=crop",
  },
  {
    name: "Sobrancelha",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
  },
]

const services = [
  { name: "Corte degradê masculino", price: "R$35,00", icon: Scissors },
  { name: "Barba", price: "R$25,00", icon: Sparkles },
  { name: "Cabelo e barba", price: "R$60,00", icon: Scissors },
  { name: "Corte degradê lateral", price: "R$30,00", icon: Scissors },
  { name: "Corte social masculino", price: "R$30,00", icon: Scissors },
  { name: "Barba modelada", price: "R$25,00", icon: Sparkles },
  { name: "Sobrancelha", price: "R$10,00", icon: Sparkles },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicos" className="relative py-24 bg-[#0f0f12]" ref={ref}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A96B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A96B] text-sm tracking-[0.3em] uppercase">Nossos Serviços</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
            Serviços em Destaque
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-[#0f0f12]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 border border-[#C8A96B]/0 group-hover:border-[#C8A96B]/50 transition-all duration-500 rounded-lg" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl text-white mb-2">{category.name}</h3>
                <div className="w-12 h-px bg-[#C8A96B] opacity-0 group-hover:opacity-100 group-hover:w-24 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Price Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-lg glass-card hover:border-[#C8A96B]/40 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#C8A96B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1">
                  <service.icon className="w-5 h-5 text-[#C8A96B] mb-3" />
                  <h4 className="text-white font-medium text-sm leading-tight">{service.name}</h4>
                </div>
                <span className="text-[#C8A96B] font-serif text-lg whitespace-nowrap">{service.price}</span>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-[#C8A96B]/0 via-[#C8A96B]/20 to-[#C8A96B]/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
