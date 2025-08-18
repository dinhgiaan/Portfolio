import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollInView from "../scroll.inview"
import TechIcon from "../ui/tech.img"
import { Code, Database, Palette, Wrench } from "lucide-react"

const SkillsSection = () => {
      const skillCategories = [
            {
                  title: "Frontend",
                  icon: Code,
                  gradient: "from-blue-500 to-cyan-400",
                  skills: [
                        { name: "ReactJS", tech: "reactjs" },
                        { name: "NextJS", tech: "nextjs" },
                        { name: "TypeScript", tech: "typescript" }
                  ]
            },
            {
                  title: "Backend",
                  icon: Database,
                  gradient: "from-emerald-500 to-teal-400",
                  skills: [
                        { name: "NodeJS", tech: "nodejs" },
                        { name: "ExpressJS", tech: "expressjs" },
                        { name: "MongoDB", tech: "mongodb" }
                  ]
            },
            {
                  title: "Design",
                  icon: Palette,
                  gradient: "from-purple-500 to-pink-400",
                  skills: [
                        { name: "TailwindCSS", tech: "tailwindcss" }
                  ]
            },
            {
                  title: "Tools",
                  icon: Wrench,
                  gradient: "from-orange-500 to-red-400",
                  skills: [
                        { name: "Git", tech: "git" },
                        { name: "Postman", tech: "postman" },
                        { name: "Figma", tech: "figma" }
                  ]
            }
      ]

      return (
            <ScrollInView>
                  <section className="">
                        <div className="container mx-auto px-4">
                              <div className="text-center mb-12 space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200/50 dark:border-indigo-700/50">
                                          <Code className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                                          <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300">Tech Stack</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                          <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                                                Skills & Technologies
                                          </span>
                                    </h2>

                                    <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                                          Technologies and tools I use to build amazing digital experiences
                                    </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                                    {skillCategories.map((category, index) => {
                                          const IconComponent = category.icon

                                          return (
                                                <Card
                                                      key={index}
                                                      className="group relative overflow-hidden border-0 bg-white/50 dark:bg-gray-900/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-300 hover:shadow-lg"
                                                >
                                                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                                      <CardContent className="p-5 relative">
                                                            <div className="flex items-center gap-3 mb-5">
                                                                  <div className={`p-2 rounded-sm bg-gradient-to-r ${category.gradient} shadow-sm`}>
                                                                        <IconComponent className="w-4 h-4 text-white" />
                                                                  </div>
                                                                  <h3 className="font-semibold text-sm text-foreground">{category.title}</h3>
                                                            </div>

                                                            <div className="space-y-2.5">
                                                                  {category.skills.map((skill, skillIndex) => (
                                                                        <div
                                                                              key={skillIndex}
                                                                              className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors duration-200"
                                                                        >
                                                                              <div className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm">
                                                                                    <TechIcon
                                                                                          tech={skill.tech}
                                                                                          alt={skill.name}
                                                                                          className="w-4 h-4"
                                                                                    />
                                                                              </div>
                                                                              <span className="font-medium text-xs text-foreground">
                                                                                    {skill.name}
                                                                              </span>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      </CardContent>
                                                </Card>
                                          )
                                    })}
                              </div>

                              <div className="mt-12 text-center">
                                    <p className="text-muted-foreground mb-4">All Technologies</p>

                                    <div className="flex flex-wrap justify-center gap-2 cursor-default">
                                          {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
                                                <Badge
                                                      key={index}
                                                      variant="secondary"
                                                      className="group/badge relative px-3 py-1 transition-all duration-300 ease-in-out hover:scale-110 hover:mx-2 hover:shadow-md overflow-hidden"
                                                >
                                                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover/badge:translate-x-full transition-transform duration-500 ease-out pointer-events-none" />
                                                      <span className="relative z-10">{skill.name}</span>
                                                </Badge>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </section>
            </ScrollInView>
      )
}

export default SkillsSection;
