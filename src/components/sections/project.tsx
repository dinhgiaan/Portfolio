import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, ArrowUpRight, Code2 } from "lucide-react"
import { CardBody, CardContainer, CardItem } from "../ui/3d-card"
import ScrollInView from "../scroll.inview"
import ProjectImage from "../ui/project.img"

const ProjectSection = () => {
      const projects = [
            {
                  title: "NovelNest - Reading Book Online Platform",
                  description:
                        "A comprehensive online book reading platform with complete user management and payment integration. Features include user authentication, book catalog, reading interface, and admin dashboard.",
                  image: "/assets/novelnest-homepage.webp",
                  tech: ["Next.js", "TypeScript", "Tailwind CSS", "PayOS", "Axios", "NextAuth", "SWR", "Zustand", "Node.js", "Express.js", "MongoDB", "JWT"],
                  sourceCode: [
                        {
                              label: "Frontend",
                              url: "https://github.com/dinhgiaan/NovelNest-Frontend",
                        },
                        {
                              label: "Backend",
                              url: "https://github.com/dinhgiaan/NovelNest-Backend",
                        },
                        {
                              label: "Admin",
                              url: "https://github.com/dinhgiaan/NovelNest-Admin",
                        },
                  ],
                  liveDemo: "https://www.novelnest.tech",
            },
            {
                  title: "CodeGuru - Coding Video Course Platform",
                  description:
                        "Mobile-first design coding course platform with advanced animations and interactive learning features. Includes video streaming, progress tracking, and certificate generation.",
                  image: "/assets/codeguru-homepage.webp",
                  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "Redux Toolkit", "NextAuth", "Stripe", "Node.js", "Express.js", "MongoDB", "Redis", "JWT"],
                  sourceCode: [
                        {
                              label: "Frontend",
                              url: "https://github.com/dinhgiaan/CodeGuru-FE",
                        },
                        {
                              label: "Backend",
                              url: "https://github.com/dinhgiaan/CodeGuru-BE",
                        },
                  ],
                  liveDemo: null,
            },
      ]

      return (
            <ScrollInView>
                  <div className="container mx-auto px-4">
                        <div className="text-center mb-12 space-y-4">
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/70 border border-blue-200/50 dark:border-blue-700/50">
                                    <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                                    <span className="text-xs font-medium text-blue-700 dark:text-blue-100">Featured Work</span>
                              </div>

                              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                    <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                                          My Projects
                                    </span>
                              </h2>

                              <p className="text-base dark:text-[#ccc] text-[#675f5f] max-w-xl mx-auto leading-relaxed">
                                    Crafting digital experiences with modern technologies and clean architecture
                              </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                              {projects.map((project, index) => (
                                    <div
                                          key={index}
                                          className={`transition-all duration-1000 ease-out ${index % 2 === 0
                                                ? 'animate-slide-in-left'
                                                : 'animate-slide-in-right'
                                                }`}
                                    >
                                          <CardContainer
                                                className="h-full group border-2 hover:border-primary/30 rounded-xl overflow-hidden transition-all duration-500"
                                                containerClassName="w-full h-full"
                                          >
                                                <CardBody className="bg-background rounded-xl p-6 w-full shadow-sm h-full">
                                                      <div className="grid grid-rows-[auto_auto_1fr_auto_auto_auto] gap-4 h-full min-h-[600px]">
                                                            <CardItem as="div" translateZ={10} className="relative h-48 w-full overflow-hidden rounded-md">
                                                                  <ProjectImage
                                                                        src={project.image}
                                                                        alt={project.title}
                                                                  />
                                                                  {project.liveDemo && (
                                                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                                                              <Button size="sm" variant="secondary" asChild>
                                                                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                                                                          <Eye className="w-4 h-4 mr-2" />
                                                                                          Live Demo
                                                                                    </a>
                                                                              </Button>
                                                                        </div>
                                                                  )}
                                                            </CardItem>

                                                            <CardItem
                                                                  as="h3"
                                                                  translateZ={8}
                                                                  className="text-xl font-bold group-hover:text-primary transition-colors duration-300 min-h-[3rem] flex items-start"
                                                            >
                                                                  {project.title}
                                                            </CardItem>

                                                            <CardItem as="p" translateZ={5} className="text-sm text-muted-foreground leading-relaxed">
                                                                  {project.description}
                                                            </CardItem>

                                                            <CardItem translateZ={5}>
                                                                  <p className="text-xs font-medium text-muted-foreground mb-2">Tech Stack:</p>
                                                                  <div className="flex flex-wrap gap-2">
                                                                        {project.tech.map((tech, i) => (
                                                                              <Badge key={i} variant="secondary" className="text-xs">
                                                                                    {tech}
                                                                              </Badge>
                                                                        ))}
                                                                  </div>
                                                            </CardItem>

                                                            <CardItem translateZ={5}>
                                                                  <p className="text-xs font-medium text-muted-foreground mb-2">Source Code:</p>
                                                                  <div className="space-y-2">
                                                                        {project.sourceCode.map((source, i) => (
                                                                              <div key={i} className="flex items-center gap-3">
                                                                                    <span className="text-xs min-w-[60px] font-medium">{source.label}:</span>
                                                                                    <Button
                                                                                          variant="outline"
                                                                                          size="sm"
                                                                                          className="text-xs flex-1 justify-start font-mono bg-transparent"
                                                                                          asChild
                                                                                    >
                                                                                          <a href={source.url} target="_blank" rel="noopener noreferrer">
                                                                                                <Github className="w-3 h-3 mr-2" />
                                                                                                {source.url.split("/").pop()}
                                                                                                <ExternalLink className="w-3 h-3 ml-auto" />
                                                                                          </a>
                                                                                    </Button>
                                                                              </div>
                                                                        ))}
                                                                        {project.sourceCode.length < 3 && <div className="h-8"></div>}
                                                                  </div>
                                                            </CardItem>

                                                            <CardItem translateZ={5} className="min-h-[3rem] flex items-start">
                                                                  {project.liveDemo ? (
                                                                        <Button className="w-full" asChild>
                                                                              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                                                                    <Eye className="w-4 h-4 mr-2" />
                                                                                    View Live Demo
                                                                              </a>
                                                                        </Button>
                                                                  ) : (
                                                                        <Button className="w-full cursor-default" variant={"secondary"} asChild>
                                                                              <div>
                                                                                    <span>🤫</span>
                                                                                    Comming soon
                                                                              </div>
                                                                        </Button>
                                                                  )}
                                                            </CardItem>
                                                      </div>
                                                </CardBody>
                                          </CardContainer>
                                    </div>
                              ))}
                        </div>

                        <div className="text-center mt-10">
                              <div className="relative inline-block">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-20 animate-pulse"></div>
                                    <Button
                                          size="default"
                                          variant="outline"
                                          className="relative px-6 py-2.5 border-2 hover:bg-muted/50 rounded-xl transition-all duration-300 hover:scale-105 text-sm font-medium group"
                                          onClick={() => window.open("https://github.com/dinhgiaan?tab=repositories", "_blank")}
                                    >
                                          <Github className="w-4 h-4 mr-2" />
                                          View All Projects
                                          <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                                    </Button>
                              </div>
                        </div>
                  </div>
            </ScrollInView>
      )
}

export default ProjectSection;