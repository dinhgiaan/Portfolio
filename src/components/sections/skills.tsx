import ScrollInView from "../scroll.inview";
import TechIcon from "../ui/tech.img";
import { motion } from "framer-motion";
import { useState } from "react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      code: "FE",
      color: "#00fff7",
      skills: [
        { name: "ReactJS", tech: "reactjs" },
        { name: "NextJS", tech: "nextjs" },
        { name: "TypeScript", tech: "typescript" },
      ],
    },
    {
      title: "Backend",
      code: "BE",
      color: "#7b61ff",
      skills: [
        { name: "NodeJS", tech: "nodejs" },
        { name: "ExpressJS", tech: "expressjs" },
        { name: "MongoDB", tech: "mongodb" },
      ],
    },
    {
      title: "Design",
      code: "UI",
      color: "#ff2d78",
      skills: [
        { name: "TailwindCSS", tech: "tailwindcss" },
        { name: "Figma", tech: "figma" },
      ],
    },
    {
      title: "DevOps",
      code: "OPS",
      color: "#00ff9d",
      skills: [
        { name: "Git", tech: "git" },
        { name: "Postman", tech: "postman" },
      ],
    },
  ];

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, color: cat.color }))
  );

  return (
    <ScrollInView>
      <section>
        <div className="container mx-auto px-4">
          {/* Section header */}
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <span className="text-[#00fff7] font-mono text-sm tracking-widest">
              02.
            </span>
            <span className="text-[#8892a4] font-mono text-sm tracking-widest uppercase">
              Tech Stack
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00fff7]/30 to-transparent" />
          </motion.div>

          {/* Category cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {skillCategories.map((category, index) => {
              const isActive = activeCategory === index;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setActiveCategory(index)}
                  onHoverEnd={() => setActiveCategory(null)}
                  whileHover={{ y: -4 }}
                  className="cursor-pointer">
                  <div
                    className="relative h-full rounded-sm border transition-all duration-300 overflow-hidden"
                    style={{
                      background: "rgba(5, 20, 14, 0.8)",
                      borderColor: isActive
                        ? category.color
                        : "rgba(0,255,247,0.1)",
                      boxShadow: isActive
                        ? `0 0 20px ${category.color}20`
                        : "none",
                    }}>
                    {/* Top accent bar */}
                    <div
                      className="h-[1px] w-full transition-all duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${category.color}, transparent)`,
                        opacity: isActive ? 1 : 0.3,
                        boxShadow: isActive
                          ? `0 0 8px ${category.color}`
                          : "none",
                      }}
                    />

                    <div className="p-5">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div
                            className="font-mono text-xs tracking-widest mb-1"
                            style={{ color: `${category.color}60` }}>
                            [{category.code}]
                          </div>
                          <h3
                            className="font-mono font-bold text-base tracking-wider"
                            style={{
                              color: isActive ? category.color : "#cdd6f4",
                            }}>
                            {category.title}
                          </h3>
                        </div>

                        {/* Corner decoration */}
                        <div className="w-8 h-8 relative opacity-30">
                          <div
                            className="absolute top-0 right-0 w-full h-[1px]"
                            style={{ background: category.color }}
                          />
                          <div
                            className="absolute top-0 right-0 w-[1px] h-full"
                            style={{ background: category.color }}
                          />
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-2">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="flex items-center gap-2.5 px-3 py-1.5 rounded-sm"
                            style={{
                              background: isActive
                                ? `${category.color}08`
                                : "#012411",
                              border: `1px solid ${
                                isActive ? `${category.color}20` : "#012411"
                              }`,
                            }}>
                            <TechIcon
                              tech={skill.tech}
                              alt={skill.name}
                              className="w-3.5 h-3.5"
                            />
                            <span className="font-mono text-xs text-[#8892a4] tracking-wide">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* All technologies strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="font-mono text-xs text-[#8892a4] tracking-widest mb-4 text-center">
              // ALL TECHNOLOGIES
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.tech}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  whileHover={{ scale: 1.05, y: -2 }}>
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-sm border transition-all duration-200 cursor-default"
                    style={{
                      background: "rgba(5,10,14,0.8)",
                      borderColor: "rgba(0,255,247,0.15)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = skill.color;
                      e.currentTarget.style.boxShadow = `0 0 10px ${skill.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(0,255,247,0.15)";
                      e.currentTarget.style.boxShadow = "none";
                    }}>
                    <TechIcon
                      tech={skill.tech}
                      alt={skill.name}
                      className="w-4 h-4"
                    />
                    <span className="font-mono text-xs text-[#cdd6f4] tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </ScrollInView>
  );
};

export default SkillsSection;
