import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollInView from "../scroll.inview"
import TechIcon from "../ui/tech.img"
import { Code, Database, Palette, Wrench, Sparkles, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const SkillsSection = () => {
      const [activeCategory, setActiveCategory] = useState<number | null>(null)

      const skillCategories = [
            {
                  title: "Frontend",
                  icon: Code,
                  color: "blue",
                  skills: [
                        { name: "ReactJS", tech: "reactjs" },
                        { name: "NextJS", tech: "nextjs" },
                        { name: "TypeScript", tech: "typescript" }
                  ]
            },
            {
                  title: "Backend",
                  icon: Database,
                  color: "emerald",
                  skills: [
                        { name: "NodeJS", tech: "nodejs" },
                        { name: "ExpressJS", tech: "expressjs" },
                        { name: "MongoDB", tech: "mongodb" }
                  ]
            },
            {
                  title: "Design",
                  icon: Palette,
                  color: "purple",
                  skills: [
                        { name: "TailwindCSS", tech: "tailwindcss" },
                        { name: "Figma", tech: "figma" }
                  ]
            },
            {
                  title: "DevOps",
                  icon: Wrench,
                  color: "orange",
                  skills: [
                        { name: "Git", tech: "git" },
                        { name: "Postman", tech: "postman" }
                  ]
            }
      ]

      const allSkills = skillCategories.flatMap(cat => cat.skills)

      const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                  opacity: 1,
                  transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                  }
            }
      }

      const itemVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" as const }
            }
      }

      const getColorClasses = (color: string) => {
            const colors = {
                  blue: {
                        bg: "bg-blue-50 dark:bg-blue-950/20",
                        border: "border-blue-200/50 dark:border-blue-800/50",
                        text: "text-blue-600 dark:text-blue-400",
                        icon: "bg-blue-500",
                        accent: "bg-blue-500/10"
                  },
                  emerald: {
                        bg: "bg-emerald-50 dark:bg-emerald-950/20",
                        border: "border-emerald-200/50 dark:border-emerald-800/50",
                        text: "text-emerald-600 dark:text-emerald-400",
                        icon: "bg-emerald-500",
                        accent: "bg-emerald-500/10"
                  },
                  purple: {
                        bg: "bg-purple-50 dark:bg-purple-950/20",
                        border: "border-purple-200/50 dark:border-purple-800/50",
                        text: "text-purple-600 dark:text-purple-400",
                        icon: "bg-purple-500",
                        accent: "bg-purple-500/10"
                  },
                  orange: {
                        bg: "bg-orange-50 dark:bg-orange-950/20",
                        border: "border-orange-200/50 dark:border-orange-800/50",
                        text: "text-orange-600 dark:text-orange-400",
                        icon: "bg-orange-500",
                        accent: "bg-orange-500/10"
                  }
            }
            return colors[color as keyof typeof colors] || colors.blue
      }

      return (
            <ScrollInView>
                  <section className="">
                        <div className="container mx-auto px-4">
                              <motion.div
                                    className="text-center mb-8 space-y-2"
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                              >
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/70 border border-blue-200/50 dark:border-blue-700/50">
                                          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                                          <span className="text-xs font-medium text-blue-700 dark:text-blue-100">Technologies</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                                                My Tech Stack
                                          </span>
                                    </h2>

                                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                          Modern technologies I use to build exceptional digital products
                                    </p>
                              </motion.div>

                              <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                              >
                                    {skillCategories.map((category, index) => {
                                          const IconComponent = category.icon
                                          const colorClasses = getColorClasses(category.color)
                                          const isActive = activeCategory === index

                                          return (
                                                <motion.div
                                                      key={category.title}
                                                      variants={itemVariants}
                                                      onHoverStart={() => setActiveCategory(index)}
                                                      onHoverEnd={() => setActiveCategory(null)}
                                                      whileHover={{ y: -4 }}
                                                      className="cursor-pointer"
                                                >
                                                      <Card className={`
                                                            h-full border-2 transition-all duration-300 will-change-transform
                                                            ${isActive
                                                                  ? `${colorClasses.bg} ${colorClasses.border} shadow-lg`
                                                                  : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                                                            }
                                                      `}>
                                                            <CardContent className="p-6">
                                                                  <div className="flex items-start justify-between mb-4">
                                                                        <div className={`
                                                                              p-3 rounded-xl transition-colors duration-300
                                                                              ${isActive ? colorClasses.icon : 'bg-gray-100 dark:bg-gray-800'}
                                                                        `}>
                                                                              <IconComponent className={`
                                                                                    w-6 h-6 transition-colors duration-300
                                                                                    ${isActive ? 'text-white' : 'text-gray-600 dark:text-gray-400'}
                                                                              `} />
                                                                        </div>

                                                                        <motion.div
                                                                              animate={isActive ? { rotate: 45 } : { rotate: 0 }}
                                                                              transition={{ duration: 0.3 }}
                                                                        >
                                                                              <ArrowUpRight className="w-5 h-5 text-gray-400" />
                                                                        </motion.div>
                                                                  </div>

                                                                  <h3 className={`
                                                                        font-bold text-xl mb-2 transition-colors duration-300
                                                                        ${isActive ? colorClasses.text : 'text-gray-900 dark:text-white'}
                                                                  `}>
                                                                        {category.title}
                                                                  </h3>

                                                                  <div className="flex flex-wrap gap-2">
                                                                        {category.skills.slice(0, 3).map((skill) => (
                                                                              <div
                                                                                    key={skill.name}
                                                                                    className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-gray-600 rounded-md"
                                                                              >
                                                                                    <TechIcon
                                                                                          tech={skill.tech}
                                                                                          alt={skill.name}
                                                                                          className="w-3.5 h-3.5"
                                                                                    />
                                                                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                                                                          {skill.name}
                                                                                    </span>
                                                                              </div>
                                                                        ))}
                                                                        {category.skills.length > 3 && (
                                                                              <div className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                                                                                    <span className="text-xs font-medium text-gray-500">
                                                                                          +{category.skills.length - 3}
                                                                                    </span>
                                                                              </div>
                                                                        )}
                                                                  </div>
                                                            </CardContent>
                                                      </Card>
                                                </motion.div>
                                          )
                                    })}
                              </motion.div>

                              <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true, margin: "-100px" }}
                              >
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                                          All Technologies
                                    </h3>

                                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                                          {allSkills.map((skill, index) => (
                                                <motion.div
                                                      key={`${skill.tech}-${index}`}
                                                      initial={{ opacity: 0, scale: 0.9 }}
                                                      whileInView={{ opacity: 1, scale: 1 }}
                                                      transition={{
                                                            duration: 0.3,
                                                            delay: index * 0.05,
                                                            ease: "easeOut"
                                                      }}
                                                      whileHover={{
                                                            scale: 1.05,
                                                            transition: { duration: 0.2 }
                                                      }}
                                                      viewport={{ once: true, margin: "-50px" }}
                                                >
                                                      <Badge
                                                            variant="secondary"
                                                            className="group/badge px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200 cursor-default"
                                                      >
                                                            <div className="flex items-center gap-2">
                                                                  <TechIcon
                                                                        tech={skill.tech}
                                                                        alt={skill.name}
                                                                        className="w-4 h-4"
                                                                  />
                                                                  <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
                                                                        {skill.name}
                                                                  </span>
                                                            </div>
                                                      </Badge>
                                                </motion.div>
                                          ))}
                                    </div>
                              </motion.div>
                        </div>
                  </section>
            </ScrollInView>
      )
}

export default SkillsSection
