import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react"
import { myInfo } from "@/utils/constans"
import { useState } from "react"
import ScrollInView from "../scroll.inview"

const ContactSection = () => {
      const [copiedItems, setCopiedItems] = useState<{ [key: string]: boolean }>({})

      const contactItems = [
            {
                  id: "email",
                  icon: Mail,
                  label: "Email",
                  value: myInfo.email,
                  href: `mailto:${myInfo.email}`,
                  displayValue: myInfo.email,
                  gradient: "from-blue-500 to-cyan-400"
            },
            {
                  id: "phone",
                  icon: Phone,
                  label: "Phone",
                  value: myInfo.phone,
                  href: `tel:${myInfo.phone}`,
                  displayValue: myInfo.phone,
                  gradient: "from-emerald-500 to-teal-400"
            },
            {
                  id: "github",
                  icon: Github,
                  label: "GitHub",
                  value: myInfo.github,
                  href: myInfo.github,
                  displayValue: myInfo.github.replace("https://", ""),
                  gradient: "from-gray-700 to-gray-900"
            },
            {
                  id: "linkedin",
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: myInfo.linkedin,
                  href: myInfo.linkedin,
                  displayValue: myInfo.linkedin.replace("https://", ""),
                  gradient: "from-blue-600 to-blue-800"
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

      return (
            <ScrollInView>
                  <div className="py-16 px-4">
                        <div className="w-full max-w-3xl mx-auto">
                              <div className="text-center mb-12 space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200/50 dark:border-purple-700/50">
                                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                                          <span className="text-xs font-medium text-purple-700 dark:text-purple-300">Let's connect</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                                                Get In Touch
                                          </span>
                                    </h2>
                              </div>

                              <div className="flex justify-center gap-2 mb-8">
                                    <Badge className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-xs">
                                          <div className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse"></div>
                                          Available for work
                                    </Badge>
                                    <Badge variant="outline" className="px-3 py-1.5 border hover:bg-muted/50 transition-all duration-300 hover:scale-105 text-xs">
                                          Open to collaborations
                                    </Badge>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {contactItems.map((item, index) => {
                                          const IconComponent = item.icon
                                          const isCopied = copiedItems[item.id]

                                          return (
                                                <Card
                                                      key={item.id}
                                                      className="group relative overflow-hidden border-0 bg-white/50 dark:bg-gray-900/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-900/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
                                                      style={{ animationDelay: `${index * 100}ms` }}
                                                >
                                                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                                      <CardContent className="pl-10 relative">
                                                            <div className="flex items-start justify-between mb-4">
                                                                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${item.gradient} shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                                                                        <IconComponent className="w-4 h-4 text-white" />
                                                                  </div>

                                                                  <div className="flex gap-1.5">
                                                                        <Button
                                                                              size="sm"
                                                                              variant="ghost"
                                                                              className="h-7 w-7 p-0 rounded-lg hover:bg-muted/80 transition-all duration-200 hover:scale-110"
                                                                              onClick={() => copyToClipboard(item.value, item.id)}
                                                                        >
                                                                              {isCopied ? (
                                                                                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                                                                              ) : (
                                                                                    <Copy className="w-3.5 h-3.5" />
                                                                              )}
                                                                        </Button>

                                                                        <Button
                                                                              size="sm"
                                                                              variant="ghost"
                                                                              className="h-7 w-7 p-0 rounded-lg hover:bg-muted/80 transition-all duration-200 hover:scale-110"
                                                                              onClick={() => window.open(item.href, "_blank")}
                                                                        >
                                                                              <ArrowUpRight className="w-3.5 h-3.5" />
                                                                        </Button>
                                                                  </div>
                                                            </div>

                                                            <div className="">
                                                                  <h4 className="font-semibold text-sm text-foreground">
                                                                        {item.label}
                                                                  </h4>
                                                                  <p className="text-muted-foreground font-mono text-xs break-all leading-relaxed">
                                                                        {item.displayValue}
                                                                  </p>
                                                            </div>
                                                      </CardContent>
                                                </Card>
                                          )
                                    })}
                              </div>

                              <div className="text-center">
                                    <div className="relative inline-block">
                                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-20 animate-pulse"></div>
                                          <Button
                                                size="default"
                                                className="relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm font-medium"
                                                onClick={() => window.open(`mailto:${myInfo.email}`, "_blank")}
                                          >
                                                <Mail className="w-4 h-4 mr-2" />
                                                Let's work together
                                                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </ScrollInView>
      )
}

export default ContactSection;
