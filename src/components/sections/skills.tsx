import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollInView from "../scroll.inview"
import TechIcon from "../ui/tech.img"

const SkillsSection = () => {
      const skillCategories = [
            {
                  title: "Frontend",
                  color: "bg-blue-500",
                  skills: [
                        { name: "ReactJS", tech: "reactjs" },
                        { name: "NextJS", tech: "nextjs" },
                        { name: "TypeScript", tech: "typescript" }
                  ]
            },
            {
                  title: "Backend",
                  color: "bg-green-500",
                  skills: [
                        { name: "NodeJS", tech: "nodejs" },
                        { name: "ExpressJS", tech: "expressjs" },
                        { name: "MongoDB", tech: "mongodb" }
                  ]
            },
            {
                  title: "Design",
                  color: "bg-purple-500",
                  skills: [
                        { name: "TailwindCSS", tech: "tailwindcss" }
                  ]
            },
            {
                  title: "Tools",
                  color: "bg-orange-500",
                  skills: [
                        { name: "Git", tech: "git" },
                        { name: "Postman", tech: "postman" },
                        { name: "Figma", tech: "figma" }
                  ]
            }
      ]

      return (
            <ScrollInView>
                  <section>
                        <div className="container mx-auto px-4">
                              <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                                          Skills & Technologies
                                    </h2>
                                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                          Technologies and tools I use to build amazing digital experiences
                                    </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {skillCategories.map((category, index) => (
                                          <Card
                                                key={index}
                                                className="group border-2 hover:border-primary/20 hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lg"
                                          >
                                                <CardContent className="p-6 cursor-default">
                                                      <div className="flex items-center gap-3 mb-6">
                                                            <div className={`w-3 h-3 rounded-full ${category.color}`} />
                                                            <h3 className="font-semibold text-lg">{category.title}</h3>
                                                      </div>

                                                      <div className="space-y-3">
                                                            {category.skills.map((skill, skillIndex) => (
                                                                  <div
                                                                        key={skillIndex}
                                                                        className="relative flex items-center gap-3 p-3 rounded-lg bg-muted/100 hover:bg-muted transition-all duration-200 overflow-hidden hover:shadow-lg"
                                                                  >
                                                                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

                                                                        <div className="relative z-10 w-8 h-8 flex items-center justify-center bg-gray-50 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                                                                              <TechIcon
                                                                                    tech={skill.tech}
                                                                                    alt={skill.name}
                                                                              />
                                                                        </div>
                                                                        <span className="relative z-10 font-medium text-sm transition-colors duration-200 hover:text-foreground">
                                                                              {skill.name}
                                                                        </span>
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
                                                <Badge
                                                      key={index}
                                                      variant="secondary"
                                                      className="relative px-3 py-1 transition-all duration-300 ease-in-out hover:scale-110 hover:mx-2 hover:shadow-md overflow-hidden"
                                                >
                                                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-500 ease-out pointer-events-none hover:translate-x-full" />
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
