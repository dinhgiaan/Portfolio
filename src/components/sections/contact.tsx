import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, Copy, Check, ExternalLink, MessageCircle } from "lucide-react"
import { myInfo } from "@/utils/constans"
import { useState } from "react"
import ScrollInView from "../scroll.inview"
import { motion } from "framer-motion"

const ContactSection = () => {
      const [copiedItems, setCopiedItems] = useState<{ [key: string]: boolean }>({})
      const [hoveredCard, setHoveredCard] = useState<string | null>(null)

      const contactMethods = [
            {
                  id: "email",
                  icon: Mail,
                  label: "Email",
                  value: myInfo.email,
                  href: `mailto:${myInfo.email}`,
                  displayValue: myInfo.email,
                  description: "Drop me a line",
                  gradient: "from-blue-500 via-cyan-500 to-teal-500",
                  glowColor: "shadow-blue-500/25",
                  bgPattern: "bg-gradient-to-br from-blue-50/80 via-cyan-50/60 to-teal-50/80 dark:from-blue-950/30 dark:via-cyan-950/20 dark:to-teal-950/30"
            },
            {
                  id: "phone",
                  icon: Phone,
                  label: "Phone",
                  value: myInfo.phone,
                  href: `tel:${myInfo.phone}`,
                  displayValue: myInfo.phone,
                  description: "Let's talk",
                  gradient: "from-emerald-500 via-green-500 to-lime-500",
                  glowColor: "shadow-emerald-500/25",
                  bgPattern: "bg-gradient-to-br from-emerald-50/80 via-green-50/60 to-lime-50/80 dark:from-emerald-950/30 dark:via-green-950/20 dark:to-lime-950/30"
            },
            {
                  id: "github",
                  icon: Github,
                  label: "GitHub",
                  value: myInfo.github,
                  href: myInfo.github,
                  displayValue: myInfo.github.replace("https://github.com/", "@"),
                  description: "Check my code",
                  gradient: "from-gray-600 via-slate-700 to-gray-800",
                  glowColor: "shadow-gray-500/25",
                  bgPattern: "bg-gradient-to-br from-gray-50/80 via-slate-50/60 to-gray-100/80 dark:from-gray-900/30 dark:via-slate-900/20 dark:to-gray-800/30"
            },
            {
                  id: "linkedin",
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: myInfo.linkedin,
                  href: myInfo.linkedin,
                  displayValue: "Connect with me",
                  description: "Professional network",
                  gradient: "from-blue-600 via-indigo-600 to-purple-600",
                  glowColor: "shadow-indigo-500/25",
                  bgPattern: "bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30"
            }
      ]

      const copyToClipboard = async (text: string, id: string) => {
            try {
                  await navigator.clipboard.writeText(text)
                  setCopiedItems(prev => ({ ...prev, [id]: true }))
                  setTimeout(() => {
                        setCopiedItems(prev => ({ ...prev, [id]: false }))
                  }, 2000)
            } catch (err) {
                  console.error("Failed to copy: ", err)
            }
      }

      const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                  opacity: 1,
                  transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.2
                  }
            }
      }

      const itemVariants = {
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94] as const,
                        type: "spring" as const,
                        stiffness: 100
                  }
            }
      }

      return (
            <ScrollInView>
                  <section className="relative overflow-hidden">
                        <div className="absolute inset-0 opacity-30">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5" />
                              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
                              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
                        </div>

                        <div className="container mx-auto px-4 max-w-4xl relative">
                              <motion.div
                                    className="text-center mb-8 space-y-2"
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                              >
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/70 border border-blue-200/50 dark:border-blue-700/50">
                                          <MessageCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                                          <span className="text-xs font-medium text-blue-700 dark:text-blue-100">Get in touch</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                                                Contact Me
                                          </span>
                                    </h2>

                                    <p className="text-base dark:text-[#ccc] text-[#675f5f] max-w-xl mx-auto leading-relaxed">
                                          Ready for new challenges — let’s connect!
                                    </p>
                              </motion.div>

                              <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                              >
                                    {contactMethods.map((method) => {
                                          const IconComponent = method.icon
                                          const isCopied = copiedItems[method.id]
                                          const isHovered = hoveredCard === method.id

                                          return (
                                                <motion.div
                                                      key={method.id}
                                                      variants={itemVariants}
                                                      whileHover={{
                                                            y: -8,
                                                            scale: 1.02,
                                                            transition: { duration: 0.3, ease: "easeOut" }
                                                      }}
                                                      whileTap={{ scale: 0.98 }}
                                                      onHoverStart={() => setHoveredCard(method.id)}
                                                      onHoverEnd={() => setHoveredCard(null)}
                                                      className="will-change-transform"
                                                >
                                                      <Card className={`
    group relative h-full overflow-hidden
    backdrop-blur-sm border border-white/20 dark:border-gray-700/50
    transition-all duration-500 cursor-pointer
    ${method.bgPattern}
    ${isHovered ? `shadow-xl ${method.glowColor}` : 'shadow-md shadow-black/10'}
`}>
                                                            <CardContent className="relative p-4 h-full">
                                                                  <div className="flex items-start justify-between mb-4">
                                                                        <div className="relative">
                                                                              <div className={`
                    relative p-1.5 rounded-xl transition-all duration-500
                    bg-gradient-to-r ${method.gradient}
                    ${isHovered ? 'scale-105 rotate-2' : ''}
                    shadow-md ${method.glowColor}
                `}>
                                                                                    <IconComponent className="w-4 h-4 text-white relative z-10" />
                                                                              </div>
                                                                        </div>

                                                                        <div className="flex items-center gap-1">
                                                                              <Button
                                                                                    variant="ghost"
                                                                                    className="h-8 w-8 p-0 rounded-lg backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-600/20"
                                                                                    onClick={(e) => {
                                                                                          e.stopPropagation()
                                                                                          copyToClipboard(method.value, method.id)
                                                                                    }}
                                                                              >
                                                                                    {isCopied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 text-gray-600 dark:text-gray-400" />}
                                                                              </Button>

                                                                              <Button
                                                                                    variant="ghost"
                                                                                    className="h-8 w-8 p-0 rounded-lg backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-600/20"
                                                                                    onClick={(e) => {
                                                                                          e.stopPropagation()
                                                                                          if (method.id === "email" || method.id === "phone") {
                                                                                                window.location.href = method.href
                                                                                          } else {
                                                                                                window.open(method.href, "_blank", "noopener,noreferrer")
                                                                                          }
                                                                                    }}
                                                                              >
                                                                                    <ExternalLink className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                                                                              </Button>
                                                                        </div>
                                                                  </div>

                                                                  <div className="space-y-1">
                                                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-500">
                                                                              {method.label}
                                                                        </h3>

                                                                        <p className="text-sm text-gray-600 dark:text-gray-400">{method.description}</p>

                                                                        <div className="relative">
                                                                              <p className={`
                    font-semibold text-sm transition-all duration-500
                    ${isHovered ? `bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent` : 'text-gray-700 dark:text-gray-300'}
                `}>
                                                                                    {method.displayValue}
                                                                              </p>
                                                                        </div>
                                                                  </div>
                                                            </CardContent>
                                                      </Card>

                                                </motion.div>
                                          )
                                    })}
                              </motion.div>
                        </div>
                  </section>
            </ScrollInView>
      )
}

export default ContactSection
