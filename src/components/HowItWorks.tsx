import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Smartphone, Heart, Handshake } from "lucide-react"

const steps = [
  { icon: <Smartphone className="w-7 h-7 text-white" />, key: "step1", color: "from-pink-500 to-rose-500" },
  { icon: <Heart className="w-7 h-7 text-white" />, key: "step2", color: "from-orange-400 to-amber-500" },
  { icon: <Handshake className="w-7 h-7 text-white" />, key: "step3", color: "from-violet-500 to-purple-600" },
]

export function HowItWorks() {
  const { t } = useTranslation()
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-semibold mb-4">
            {t("howItWorks.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{t("howItWorks.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.key}
              className="relative group"
            >
              <div className="relative bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <div className="absolute top-6 end-6 text-6xl font-black text-muted">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-3">{t(`howItWorks.${step.key}Title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`howItWorks.${step.key}Desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
