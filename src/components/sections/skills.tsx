import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const SkillsSection = () => {
      const skillCategories = [
            {
                  title: "Frontend",
                  color: "bg-blue-500",
                  skills: [
                        { name: "ReactJS", icon: "/assets/reactjs.webp" },
                        { name: "NextJS", icon: "/assets/nextjs.webp" },
                        { name: "TypeScript", icon: "/assets/typescript.webp" }
                  ]
            },
            {
                  title: "Backend",
                  color: "bg-green-500",
                  skills: [
                        { name: "NodeJS", icon: "/assets/nodejs.webp" },
                        { name: "ExpressJS", icon: "/assets/expressjs.webp" },
                        { name: "MongoDB", icon: "/assets/mongodb.webp" }
                  ]
            },
            {
                  title: "Design",
                  color: "bg-purple-500",
                  skills: [
                        { name: "TailwindCSS", icon: "/assets/tailwindcss.webp" }
                  ]
            },
            {
                  title: "Tools",
                  color: "bg-orange-500",
                  skills: [
                        { name: "Git", icon: "/assets/git.webp" },
                        { name: "Postman", icon: "/assets/postman.webp" },
                        { name: "Figma", icon: "/assets/figma.webp" }
                  ]
            }
      ]

      return (
            <section className="">
                  <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                              <h2 className="text-3xl font-bold mb-4 ">
                                    Skills & Technologies
                              </h2>
                              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                    Technologies and tools I use to build amazing digital experiences
                              </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                              {skillCategories.map((category, index) => (
                                    <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20 hover:scale-110">
                                          <CardContent className="p-6 cursor-default">
                                                {/* Category Header */}
                                                <div className="flex items-center gap-3 mb-6">
                                                      <div className={`w-3 h-3 rounded-full ${category.color}`} />
                                                      <h3 className="font-semibold text-lg">{category.title}</h3>
                                                </div>

                                                <div className="space-y-3">
                                                      {category.skills.map((skill, skillIndex) => (
                                                            <div
                                                                  key={skillIndex}
                                                                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/100 hover:bg-muted transition-colors duration-200"
                                                            >
                                                                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-md shadow-sm">
                                                                        <img
                                                                              src={skill.icon}
                                                                              alt={skill.name}
                                                                              className="w-5 h-5 object-contain"
                                                                        />
                                                                  </div>
                                                                  <span className="font-medium text-sm">{skill.name}</span>
                                                            </div>
                                                      ))}
                                                </div>
                                          </CardContent>
                                    </Card>
                              ))}
                        </div>

                        <div className="mt-12 text-center">
                              <p className="text-muted-foreground mb-4">All Technologies</p>
                              <div className="flex flex-wrap justify-center gap-2 cursor-default">
                                    {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
                                          <Badge key={index} variant="secondary" className="px-3 py-1">
                                                {skill.name}
                                          </Badge>
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default SkillsSection;