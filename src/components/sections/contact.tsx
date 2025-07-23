import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Github, Linkedin, ExternalLink, Copy } from "lucide-react"
import { myInfo } from "@/utils/constans"
import { useState } from "react"

const ContactSection = () => {
      const [copiedEmail, setCopiedEmail] = useState(false)

      const contactItems = [
            {
                  icon: Mail,
                  label: "Email",
                  value: myInfo.email,
                  href: `mailto:${myInfo.email}`,
                  color: "text-blue-600",
                  bgColor: "bg-blue-50 hover:bg-blue-100",
                  canCopy: true
            },
            {
                  icon: Phone,
                  label: "Phone",
                  value: myInfo.phone,
                  href: `tel:${myInfo.phone}`,
                  color: "text-green-600",
                  bgColor: "bg-green-50 hover:bg-green-100",
                  canCopy: true
            },
            {
                  icon: Github,
                  label: "GitHub",
                  value: myInfo.github,
                  href: myInfo.github,
                  color: "text-gray-800",
                  bgColor: "bg-gray-50 hover:bg-gray-100",
                  canCopy: false
            },
            {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: myInfo.linkedin,
                  href: myInfo.linkedin,
                  color: "text-blue-700",
                  bgColor: "bg-blue-50 hover:bg-blue-100",
                  canCopy: false
            }
      ]

      const copyToClipboard = async (text: string) => {
            try {
                  await navigator.clipboard.writeText(text)
                  setCopiedEmail(true)
                  setTimeout(() => setCopiedEmail(false), 2000)
            } catch (err) {
                  console.error('Failed to copy: ', err)
            }
      }

      return (
            <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                              Get In Touch
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                              Feel free to reach out for collaborations or just a friendly hello!
                        </p>
                  </div>

                  <div className="max-w-4xl mx-auto">
                        <Card className="mb-8 border-2 hover:border-primary/20 transition-colors duration-300">
                              <CardContent className="p-8 text-center">
                                    <div className="mb-6">
                                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Mail className="w-8 h-8 text-primary" />
                                          </div>
                                          <h3 className="text-xl font-semibold mb-2">Let's Connect!</h3>
                                          <p className="text-muted-foreground">
                                                I'm always interested in hearing about new opportunities and projects.
                                          </p>
                                    </div>

                                    <div className="flex justify-center gap-2 mb-6">
                                          <Badge variant="secondary">Available for work</Badge>
                                          <Badge variant="outline">Open to collaborations</Badge>
                                    </div>

                                    <Button
                                          size="lg"
                                          className="bg-primary hover:bg-primary/90"
                                          onClick={() => window.open(`mailto:${myInfo.email}`, '_blank')}
                                    >
                                          <Mail className="w-4 h-4 mr-2" />
                                          Send me an email
                                    </Button>
                              </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {contactItems.map((item, index) => {
                                    const IconComponent = item.icon

                                    return (
                                          <Card key={index} className="group hover:shadow-md transition-all duration-300 border hover:border-primary/20">
                                                <CardContent className="px-4">
                                                      <div className="flex items-center gap-4">
                                                            <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center transition-colors duration-200`}>
                                                                  <IconComponent className={`w-5 h-5 ${item.color}`} />
                                                            </div>

                                                            <div className="flex-1 min-w-0">
                                                                  <div className="flex items-center gap-2 mb-1">
                                                                        <h4 className="font-medium text-sm text-muted-foreground">
                                                                              {item.label}
                                                                        </h4>
                                                                  </div>
                                                                  <p className="text-[12px] font-mono break-all">
                                                                        {item.value}
                                                                  </p>
                                                            </div>

                                                            <div className="flex gap-1">
                                                                  {item.canCopy && (
                                                                        <Button
                                                                              size="sm"
                                                                              variant="ghost"
                                                                              className="h-8 w-8 p-0"
                                                                              onClick={() => copyToClipboard(item.value)}
                                                                        >
                                                                              <Copy className="w-3 h-3" />
                                                                        </Button>
                                                                  )}

                                                                  <Button
                                                                        size="sm"
                                                                        variant="ghost"
                                                                        className="h-8 w-8 p-0"
                                                                        onClick={() => window.open(item.href, '_blank')}
                                                                  >
                                                                        <ExternalLink className="w-3 h-3" />
                                                                  </Button>
                                                            </div>
                                                      </div>
                                                </CardContent>
                                          </Card>
                                    )
                              })}
                        </div>

                        {copiedEmail && (
                              <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg animate-in slide-in-from-bottom-2 duration-300">
                                    <div className="flex items-center gap-2">
                                          <Copy className="w-4 h-4" />
                                          <span className="text-sm font-medium">Copied to clipboard!</span>
                                    </div>
                              </div>
                        )}
                  </div>
            </div>
      )
}

export default ContactSection