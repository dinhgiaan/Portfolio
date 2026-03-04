import { ExternalLink, Github, Eye, ArrowUpRight, Youtube } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import ScrollInView from "../scroll.inview";
import ProjectImage from "../ui/project.img";
import { motion } from "framer-motion";

// Fix lỗi 1: CardBody không nhận style/onMouse* → wrap bằng div bên trong
// Fix lỗi 2: type explicit cho event handler

const projects = [
  {
    title: "NovelNest",
    subtitle: "Reading Book Online Platform",
    description:
      "A comprehensive online book reading platform with complete user management and payment integration. Features include user authentication, book catalog, reading interface, and admin dashboard.",
    image: "/assets/novelnest-homepage.webp",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PayOS",
      "Axios",
      "NextAuth",
      "SWR",
      "Zustand",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    sourceCode: [
      {
        label: "Frontend",
        url: "https://github.com/dinhgiaan/NovelNest-Frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/dinhgiaan/NovelNest-Backend",
      },
    ],
    liveDemo: "https://www.novelnest.tech",
    videoDemo: undefined as string | undefined,
    accentColor: "#00fff7",
    id: "01",
  },
  {
    title: "CodeGuru",
    subtitle: "Coding Video Course Platform",
    description:
      "Mobile-first design coding course platform with advanced animations and interactive learning features. Includes video streaming, progress tracking, and certificate generation.",
    image: "/assets/codeguru-homepage.webp",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "Redux Toolkit",
      "NextAuth",
      "Stripe",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "JWT",
    ],
    sourceCode: [
      { label: "Frontend", url: "https://github.com/dinhgiaan/CodeGuru-FE" },
      { label: "Backend", url: "https://github.com/dinhgiaan/CodeGuru-BE" },
    ],
    liveDemo: undefined as string | undefined,
    videoDemo: "https://youtu.be/F69pqAsAizY",
    accentColor: "#7b61ff",
    id: "02",
  },
];

const ProjectSection = () => (
  <ScrollInView>
    <div className="container mx-auto px-4">
      {/* Section header */}
      <motion.div
        className="flex items-center gap-3 mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        <span
          className="font-mono text-sm tracking-widest"
          style={{ color: "var(--accent-cyan)" }}>
          03.
        </span>
        <span
          className="font-mono text-sm tracking-widest uppercase"
          style={{ color: "var(--text-secondary)" }}>
          Featured Projects
        </span>
        <div
          className="flex-1 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, var(--border-subtle), transparent)",
          }}
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}>
            <CardContainer
              className="h-full group rounded-sm overflow-hidden"
              containerClassName="w-full h-full">
              {/* Fix lỗi 1: style và onMouse* để trên div wrapper, không phải CardBody */}
              <CardBody className="rounded-sm w-full h-full">
                <div
                  className="rounded-sm w-full h-full transition-all duration-500"
                  style={{
                    background: "var(--bg-card)",
                    border: `1px solid var(--border-subtle)`,
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.borderColor = `${project.accentColor}50`;
                    e.currentTarget.style.boxShadow = `0 0 30px ${project.accentColor}15`;
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                  {/* Accent top bar */}
                  <div
                    className="h-[1px] w-full"
                    style={{
                      background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
                      boxShadow: `0 0 8px ${project.accentColor}60`,
                    }}
                  />

                  <div className="p-6 grid grid-rows-[auto_auto_1fr_auto_auto_auto] gap-4 min-h-[600px]">
                    {/* Image */}
                    <CardItem
                      as="div"
                      translateZ={10}
                      className="relative h-48 w-full overflow-hidden rounded-sm">
                      <ProjectImage src={project.image} alt={project.title} />

                      <div
                        className="absolute top-2 left-2 font-mono text-xs px-2 py-0.5 rounded-sm"
                        style={{
                          background: "var(--bg-card)",
                          border: `1px solid ${project.accentColor}40`,
                          color: project.accentColor,
                        }}>
                        #{project.id}
                      </div>

                      {(project.liveDemo || project.videoDemo) && (
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <a
                            href={project.liveDemo ?? project.videoDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-widest rounded-sm"
                            style={{
                              background: project.accentColor,
                              color: "var(--bg-primary)",
                              boxShadow: `0 0 20px ${project.accentColor}60`,
                            }}>
                            <Eye className="w-3.5 h-3.5" />
                            {project.liveDemo ? "LIVE DEMO" : "VIDEO DEMO"}
                          </a>
                        </div>
                      )}
                    </CardItem>

                    {/* Title */}
                    <CardItem
                      as="div"
                      translateZ={8}
                      className="min-h-[3rem] flex items-start flex-col gap-0.5">
                      <h3
                        className="font-mono font-bold text-xl tracking-widest"
                        style={{ color: project.accentColor }}>
                        {project.title}
                      </h3>
                      <p
                        className="font-mono text-xs tracking-wider"
                        style={{ color: "var(--text-secondary)" }}>
                        {project.subtitle}
                      </p>
                    </CardItem>

                    {/* Description */}
                    <CardItem
                      as="p"
                      translateZ={5}
                      className="text-sm leading-relaxed font-mono"
                      style={{ color: "var(--text-secondary)" }}>
                      {project.description}
                    </CardItem>

                    {/* Tech stack */}
                    <CardItem translateZ={5}>
                      <p
                        className="font-mono text-xs mb-2 tracking-widest"
                        style={{ color: "var(--text-muted)" }}>
                        // TECH STACK
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="font-mono text-[10px] px-2 py-0.5 rounded-sm tracking-wider"
                            style={{
                              background: `${project.accentColor}10`,
                              border: `1px solid ${project.accentColor}25`,
                              color: project.accentColor,
                            }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardItem>

                    {/* Source code */}
                    <CardItem translateZ={5}>
                      <p
                        className="font-mono text-xs mb-2 tracking-widest"
                        style={{ color: "var(--text-muted)" }}>
                        // SOURCE CODE
                      </p>
                      <div className="space-y-1.5">
                        {project.sourceCode.map((source, i) => (
                          <a
                            key={i}
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-sm transition-all duration-200"
                            style={{
                              background:
                                "color-mix(in srgb, var(--text-primary) 3%, transparent)",
                              border: "1px solid var(--border-subtle)",
                            }}
                            onMouseEnter={(
                              e: React.MouseEvent<HTMLAnchorElement>
                            ) => {
                              e.currentTarget.style.borderColor = `${project.accentColor}40`;
                              e.currentTarget.style.background = `${project.accentColor}08`;
                            }}
                            onMouseLeave={(
                              e: React.MouseEvent<HTMLAnchorElement>
                            ) => {
                              e.currentTarget.style.borderColor =
                                "var(--border-subtle)";
                              e.currentTarget.style.background =
                                "color-mix(in srgb, var(--text-primary) 3%, transparent)";
                            }}>
                            <Github
                              className="w-3 h-3"
                              style={{ color: "var(--text-secondary)" }}
                            />
                            <span
                              className="font-mono text-[10px] tracking-widest flex-1"
                              style={{ color: "var(--text-secondary)" }}>
                              {source.label}
                            </span>
                            <span
                              className="font-mono text-[10px]"
                              style={{ color: "var(--text-muted)" }}>
                              {source.url.split("/").pop()}
                            </span>
                            <ExternalLink
                              className="w-2.5 h-2.5"
                              style={{ color: "var(--text-muted)" }}
                            />
                          </a>
                        ))}
                        {project.sourceCode.length < 3 && (
                          <div className="h-8" />
                        )}
                      </div>
                    </CardItem>

                    {/* CTA */}
                    <CardItem
                      translateZ={5}
                      className="min-h-[3rem] flex items-start">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-2.5 font-mono text-xs tracking-widest rounded-sm transition-all duration-200"
                          style={{
                            background: `${project.accentColor}15`,
                            border: `1px solid ${project.accentColor}40`,
                            color: project.accentColor,
                          }}
                          onMouseEnter={(
                            e: React.MouseEvent<HTMLAnchorElement>
                          ) => {
                            e.currentTarget.style.background = `${project.accentColor}25`;
                            e.currentTarget.style.boxShadow = `0 0 15px ${project.accentColor}20`;
                          }}
                          onMouseLeave={(
                            e: React.MouseEvent<HTMLAnchorElement>
                          ) => {
                            e.currentTarget.style.background = `${project.accentColor}15`;
                            e.currentTarget.style.boxShadow = "none";
                          }}>
                          <Eye className="w-3.5 h-3.5" />
                          VIEW LIVE DEMO
                        </a>
                      )}
                      {project.videoDemo && (
                        <a
                          href={project.videoDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-2.5 font-mono text-xs tracking-widest rounded-sm transition-all duration-200"
                          style={{
                            background: `${project.accentColor}15`,
                            border: `1px solid ${project.accentColor}40`,
                            color: project.accentColor,
                          }}
                          onMouseEnter={(
                            e: React.MouseEvent<HTMLAnchorElement>
                          ) => {
                            e.currentTarget.style.background = `${project.accentColor}25`;
                          }}
                          onMouseLeave={(
                            e: React.MouseEvent<HTMLAnchorElement>
                          ) => {
                            e.currentTarget.style.background = `${project.accentColor}15`;
                          }}>
                          <Youtube className="w-3.5 h-3.5" color="red" />
                          VIEW VIDEO DEMO
                        </a>
                      )}
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>

      {/* View all */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <button
          className="inline-flex items-center gap-2 px-6 py-2.5 font-mono text-xs tracking-widest rounded-sm transition-all duration-200 group"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            color: "var(--accent-cyan)",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.borderColor = "var(--accent-cyan)";
            e.currentTarget.style.boxShadow = "0 0 20px var(--glow-cyan)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.borderColor = "var(--border-subtle)";
            e.currentTarget.style.boxShadow = "none";
          }}
          onClick={() =>
            window.open(
              "https://github.com/dinhgiaan?tab=repositories",
              "_blank"
            )
          }>
          <Github className="w-3.5 h-3.5" />
          VIEW ALL REPOSITORIES
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      </motion.div>
    </div>
  </ScrollInView>
);

export default ProjectSection;
