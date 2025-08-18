import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import "@/styles/animation.css"
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
                        <div className="text-center mb-8">
                              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                                    My Projects
                              </h2>
                              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                    Here are some of the projects I've built with modern technologies
                              </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                              {projects.map((project, index) => (
                                    <CardContainer
                                          key={index}
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
                              ))}
                        </div>

                        <div className="text-center mt-12">
                              <a href="https://github.com/dinhgiaan?tab=repositories" target="_blank">
                                    <button className="relative overflow-hidden rounded-lg px-2 py-1 gradient-glow hover:scale-110 transition-all duration-300 ease-in-out">
                                          <span className="relative z-10 flex items-center justify-center rounded-lg bg-black text-neutral-300 text-base font-medium cursor-pointer px-6 py-2">
                                                <Github className="w-4 h-4 mr-2" />
                                                View All Projects on GitHub
                                          </span>
                                    </button>
                              </a>
                        </div>
                  </div>
            </ScrollInView>
      )
}

export default ProjectSection;
