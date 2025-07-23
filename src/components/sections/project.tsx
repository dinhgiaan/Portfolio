import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

const ProjectSection = () => {
      const projects = [
            {
                  title: "NovelNest - Reading Book Online Platform",
                  description: "A comprehensive online book reading platform with complete user management and payment integration. Features include user authentication, book catalog, reading interface, and admin dashboard.",
                  image: "/assets/novelnest-preview.jpg",
                  tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
                  sourceCode: [
                        { label: "Frontend", url: "https://github.com/dinhgiaan/NovelNest-Frontend" },
                        { label: "Backend", url: "https://github.com/dinhgiaan/NovelNest-Backend" },
                        { label: "Admin", url: "https://github.com/dinhgiaan/NovelNest-Admin" }
                  ],
                  liveDemo: "https://novelnest-demo.com",
            },
            {
                  title: "CodeGuru - Coding Video Course Platform",
                  description: "Mobile-first design coding course platform with advanced animations and interactive learning features. Includes video streaming, progress tracking, and certificate generation.",
                  image: "/assets/codeguru-preview.jpg",
                  tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
                  sourceCode: [
                        { label: "Frontend", url: "https://github.com/dinhgiaan/CodeGuru-Frontend" },
                        { label: "Backend", url: "https://github.com/dinhgiaan/CodeGuru-Backend" }
                  ]
            }
      ]

      return (
            <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                              My Projects
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                              Here are some of the projects I've built with modern technologies
                        </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 overflow-hidden">
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-purple-600/10">
                                          <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                onError={(e) => {
                                                      // Fallback nếu không có ảnh
                                                      e.currentTarget.style.display = 'none'
                                                      e.currentTarget.parentElement!.innerHTML = `
                                                                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-600/10">
                                                                        <div class="text-center">
                                                                              <Code class="w-16 h-16 text-primary/50 mx-auto mb-2" />
                                                                              <p class="text-muted-foreground text-sm">Project Preview</p>
                                                                        </div>
                                                                  </div>
                                                            `
                                                }}
                                          />

                                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                                {project.liveDemo && (
                                                      <Button size="sm" variant="secondary" asChild>
                                                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                                                  <Eye className="w-4 h-4 mr-2" />
                                                                  Live Demo
                                                            </a>
                                                      </Button>
                                                )}

                                          </div>
                                    </div>

                                    <CardHeader className="pb-3">
                                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                          </h3>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                                {project.description}
                                          </p>

                                          <div className="mb-6">
                                                <p className="text-xs font-medium text-muted-foreground mb-2">Tech Stack:</p>
                                                <div className="flex flex-wrap gap-1">
                                                      {project.tech.map((tech, techIndex) => (
                                                            <Badge key={techIndex} variant="secondary" className="text-xs">
                                                                  {tech}
                                                            </Badge>
                                                      ))}
                                                </div>
                                          </div>

                                          <div className="mb-6">
                                                <p className="text-xs font-medium text-muted-foreground mb-3">Source Code:</p>
                                                <div className="space-y-2">
                                                      {project.sourceCode.map((source, sourceIndex) => (
                                                            <div key={sourceIndex} className="flex items-center gap-3">
                                                                  <span className="text-xs font-medium min-w-[60px]">
                                                                        {source.label}:
                                                                  </span>
                                                                  <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        className="h-8 text-xs flex-1 justify-start font-mono"
                                                                        asChild
                                                                  >
                                                                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                                                                              <Github className="w-3 h-3 mr-2" />
                                                                              {source.url.split('/').pop()}
                                                                              <ExternalLink className="w-3 h-3 ml-auto" />
                                                                        </a>
                                                                  </Button>
                                                            </div>
                                                      ))}
                                                </div>
                                          </div>

                                          <div className="w-min">
                                                {project.liveDemo && (
                                                      <Button className="flex-1" asChild>
                                                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                                                  <Eye className="w-4 h-4 mr-1" />
                                                                  View Live
                                                            </a>
                                                      </Button>
                                                )}
                                          </div>
                                    </CardContent>
                              </Card>
                        ))}
                  </div>

                  <div className="text-center mt-12">
                        <Button variant="outline" size="lg" asChild>
                              <a href="https://github.com/dinhgiaan?tab=repositories" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4 mr-2" />
                                    View All Projects on GitHub
                              </a>
                        </Button>
                  </div>
            </div>
      )
}

export default ProjectSection