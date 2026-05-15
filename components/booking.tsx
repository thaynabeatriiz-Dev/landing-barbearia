"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, Clock, Scissors, ChevronLeft, ChevronRight, Phone, AlertCircle } from "lucide-react"

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"
]

const serviceOptions = [
  { id: "degrade", name: "Corte degradê masculino", price: "R$35,00" },
  { id: "barba", name: "Barba", price: "R$25,00" },
  { id: "combo", name: "Cabelo e barba", price: "R$60,00" },
  { id: "social", name: "Corte social masculino", price: "R$30,00" },
  { id: "sobrancelha", name: "Sobrancelha", price: "R$10,00" },
]

export function Booking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [phone, setPhone] = useState("")
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()
    
    return { daysInMonth, startingDay }
  }

  const { daysInMonth, startingDay } = getDaysInMonth(currentMonth)
  const today = new Date()

  const isValidDay = (day: number) => {
    const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return checkDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate())
  }

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime || !selectedService || !phone) {
      alert("Por favor, preencha todos os campos")
      return
    }
    
    const service = serviceOptions.find(s => s.id === selectedService)
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDate)
    const formattedDate = date.toLocaleDateString("pt-BR")
    
    const message = `Olá! Gostaria de agendar:\n\n📅 Data: ${formattedDate}\n⏰ Horário: ${selectedTime}\n✂️ Serviço: ${service?.name}\n💰 Valor: ${service?.price}\n📱 WhatsApp: ${phone}`
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="agendamento" className="relative py-24 bg-gradient-to-b from-[#0f0f12] via-[#141418] to-[#0f0f12]" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#C8A96B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#C8A96B]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A96B] text-sm tracking-[0.3em] uppercase">Agendamento</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
            Faça seu agendamento
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Garanta seu horário com atendimento premium.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Calendar and Time Selection */}
          <div className="space-y-6">
            {/* Calendar */}
            <div className="p-6 rounded-2xl bg-[#1a1a1f]/80 border border-[#C8A96B]/20">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                  className="p-2 rounded-lg hover:bg-[#C8A96B]/10 text-[#C8A96B] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-white font-medium">
                  {currentMonth.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
                </h3>
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                  className="p-2 rounded-lg hover:bg-[#C8A96B]/10 text-[#C8A96B] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
                  <div key={day} className="text-center text-white/40 text-xs py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: startingDay }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1
                  const valid = isValidDay(day)
                  const isSelected = selectedDate === day
                  
                  return (
                    <button
                      key={day}
                      onClick={() => valid && setSelectedDate(day)}
                      disabled={!valid}
                      className={`aspect-square rounded-lg text-sm font-medium transition-all duration-300 ${
                        isSelected
                          ? "bg-[#C8A96B] text-[#0f0f12]"
                          : valid
                          ? "text-white hover:bg-[#C8A96B]/20"
                          : "text-white/20 cursor-not-allowed"
                      }`}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Time Slots */}
            <div className="p-6 rounded-2xl bg-[#1a1a1f]/80 border border-[#C8A96B]/20">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-[#C8A96B]" />
                <h3 className="text-white font-medium">Horários disponíveis</h3>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedTime === time
                        ? "bg-[#C8A96B] text-[#0f0f12]"
                        : "bg-[#2a2a30] text-white/70 hover:bg-[#C8A96B]/20 hover:text-white"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Selection and Contact */}
          <div className="space-y-6">
            {/* Service Selection */}
            <div className="p-6 rounded-2xl bg-[#1a1a1f]/80 border border-[#C8A96B]/20">
              <div className="flex items-center gap-3 mb-4">
                <Scissors className="w-5 h-5 text-[#C8A96B]" />
                <h3 className="text-white font-medium">Escolha o serviço</h3>
              </div>
              <div className="space-y-3">
                {serviceOptions.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                      selectedService === service.id
                        ? "bg-[#C8A96B]/20 border border-[#C8A96B]/50"
                        : "bg-[#2a2a30] border border-transparent hover:border-[#C8A96B]/30"
                    }`}
                  >
                    <span className="text-white">{service.name}</span>
                    <span className="text-[#C8A96B] font-serif">{service.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 rounded-2xl bg-[#1a1a1f]/80 border border-[#C8A96B]/20">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-[#C8A96B]" />
                <h3 className="text-white font-medium">Seu WhatsApp</h3>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(11) 99999-9999"
                className="w-full p-4 rounded-lg bg-[#2a2a30] border border-[#C8A96B]/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C8A96B]/50 transition-colors"
              />
            </div>

            {/* Policy Notice */}
            <div className="p-4 rounded-xl bg-[#C8A96B]/10 border border-[#C8A96B]/20 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#C8A96B] flex-shrink-0 mt-0.5" />
              <p className="text-white/70 text-sm leading-relaxed">
                Será cobrado 50% do valor antecipadamente para confirmação do agendamento. Em caso de desistência ou falta, não haverá reembolso.
              </p>
            </div>

            {/* Submit Button */}
            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C8A96B] to-[#D4BA82] text-[#0f0f12] font-semibold text-lg tracking-wide hover:shadow-lg hover:shadow-[#C8A96B]/20 transition-all duration-300"
            >
              Agendar Agora via WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
