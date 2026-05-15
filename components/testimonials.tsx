"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rafael Oliveira",
    role: "Cliente Premium",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Atendimento impecável e resultado excepcional. O ambiente transmite sofisticação e os profissionais são extremamente qualificados.",
  },
  {
    name: "Lucas Mendes",
    role: "Cliente há 2 anos",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Melhor barbearia que já frequentei. O corte dura semanas perfeito e o ambiente é muito agradável. Recomendo demais!",
  },
  {
    name: "Pedro Santos",
    role: "Cliente VIP",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Experiência premium do início ao fim. Desde o agendamento até o resultado final, tudo é pensado nos mínimos detalhes.",
  },
  {
    name: "Gabriel Costa",
    role: "Cliente Premium",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Profissionalismo de alto nível. A barba fica perfeita e o ambiente é muito confortável. Virei cliente fiel!",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="relative py-24 bg-[#0f0f12]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A96B] text-sm tracking-[0.3em] uppercase">Depoimentos</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
            O que dizem nossos clientes
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="relative p-8 md:p-12 rounded-2xl bg-[#1a1a1f]/80 border border-[#C8A96B]/20">
                    {/* Quote icon */}
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-[#C8A96B]/20" />
                    
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      {/* Avatar */}
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#C8A96B]/50">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C8A96B]/30 to-transparent blur-sm -z-10" />
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        {/* Stars */}
                        <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#C8A96B] text-[#C8A96B]" />
                          ))}
                        </div>

                        {/* Text */}
                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                          {`"${testimonial.text}"`}
                        </p>

                        {/* Author */}
                        <div>
                          <h4 className="text-white font-medium">{testimonial.name}</h4>
                          <p className="text-[#C8A96B] text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="p-3 rounded-full border border-[#C8A96B]/30 text-[#C8A96B] hover:bg-[#C8A96B]/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[#C8A96B]"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full border border-[#C8A96B]/30 text-[#C8A96B] hover:bg-[#C8A96B]/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
