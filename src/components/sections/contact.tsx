import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { myInfo } from "@/utils/constans";
import { useState } from "react";
import ScrollInView from "../scroll.inview";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [copiedItems, setCopiedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      label: "EMAIL",
      value: myInfo.email,
      href: `mailto:${myInfo.email}`,
      displayValue: myInfo.email,
      description: "Drop me a line",
      color: "#00fff7",
      code: "01",
    },
    {
      id: "phone",
      icon: Phone,
      label: "PHONE",
      value: myInfo.phone,
      href: `tel:${myInfo.phone}`,
      displayValue: myInfo.phone,
      description: "Let's talk",
      color: "#00ff9d",
      code: "02",
    },
    {
      id: "github",
      icon: Github,
      label: "GITHUB",
      value: myInfo.github,
      href: myInfo.github,
      displayValue: myInfo.github.replace("https://github.com/", "@"),
      description: "Check my code",
      color: "#cdd6f4",
      code: "03",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LINKEDIN",
      value: myInfo.linkedin,
      href: myInfo.linkedin,
      displayValue: "Connect with me",
      description: "Professional network",
      color: "#7b61ff",
      code: "04",
    },
  ];

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItems((prev) => ({ ...prev, [id]: true }));
      setTimeout(
        () => setCopiedItems((prev) => ({ ...prev, [id]: false })),
        2000
      );
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <ScrollInView>
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative">
          {/* Section header */}
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <span className="text-[#00fff7] font-mono text-sm tracking-widest">
              04.
            </span>
            <span className="text-[#8892a4] font-mono text-sm tracking-widest uppercase">
              Contact Me
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00fff7]/30 to-transparent" />
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <p className="font-mono text-sm text-[#8892a4]">
              <span className="text-[#00fff7]">// </span>
              Ready for new challenges — let's connect!
            </p>
          </motion.div>

          {/* Contact cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              const isCopied = copiedItems[method.id];
              const isHovered = hoveredCard === method.id;

              return (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  onHoverStart={() => setHoveredCard(method.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="will-change-transform">
                  <div
                    className="relative h-full rounded-sm overflow-hidden transition-all duration-300 cursor-pointer"
                    style={{
                      background: "rgba(5,10,14,0.85)",
                      border: `1px solid ${
                        isHovered ? method.color + "50" : "rgba(0,255,247,0.1)"
                      }`,
                      boxShadow: isHovered
                        ? `0 0 25px ${method.color}15`
                        : "none",
                    }}>
                    {/* Accent line */}
                    <div
                      className="h-[1px] transition-all duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${method.color}, transparent)`,
                        opacity: isHovered ? 1 : 0.4,
                        boxShadow: isHovered
                          ? `0 0 8px ${method.color}`
                          : "none",
                      }}
                    />

                    <div className="p-5">
                      <div className="flex items-start justify-between mb-4">
                        {/* Icon + label */}
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2 rounded-sm transition-all duration-300"
                            style={{
                              background: isHovered
                                ? `${method.color}20`
                                : "rgba(255,255,255,0.04)",
                              border: `1px solid ${
                                isHovered
                                  ? method.color + "40"
                                  : "rgba(255,255,255,0.06)"
                              }`,
                            }}>
                            <IconComponent
                              className="w-4 h-4 transition-colors duration-300"
                              style={{
                                color: isHovered ? method.color : "#8892a4",
                              }}
                            />
                          </div>
                          <div>
                            <div
                              className="font-mono text-[10px] tracking-widest mb-0.5"
                              style={{ color: `${method.color}60` }}>
                              [{method.code}]
                            </div>
                            <h3
                              className="font-mono font-bold text-sm tracking-widest"
                              style={{
                                color: isHovered ? method.color : "#cdd6f4",
                              }}>
                              {method.label}
                            </h3>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-1.5">
                          <button
                            className="p-1.5 rounded-sm transition-all duration-200"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.06)",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(method.value, method.id);
                            }}>
                            {isCopied ? (
                              <Check className="w-3 h-3 text-[#00ff9d]" />
                            ) : (
                              <Copy className="w-3 h-3 text-[#8892a4]" />
                            )}
                          </button>
                          <button
                            className="p-1.5 rounded-sm transition-all duration-200"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.06)",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (
                                method.id === "email" ||
                                method.id === "phone"
                              ) {
                                window.location.href = method.href;
                              } else {
                                window.open(
                                  method.href,
                                  "_blank",
                                  "noopener,noreferrer"
                                );
                              }
                            }}>
                            <ExternalLink className="w-3 h-3 text-[#8892a4]" />
                          </button>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="pl-1 space-y-0.5">
                        <p className="font-mono text-xs text-[#8892a4]/60">
                          {method.description}
                        </p>
                        <p
                          className="font-mono text-sm font-semibold transition-colors duration-300"
                          style={{
                            color: isHovered ? method.color : "#cdd6f4",
                          }}>
                          {method.displayValue}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer terminal line */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}>
            <p className="font-mono text-xs text-[#8892a4]/40 tracking-widest">
              ©{new Date().getFullYear()}{" "}
              <span className="text-[#00fff7]/60">dinhgiaan</span> — crafted
              with ♥ in HCMC
            </p>
          </motion.div>
        </div>
      </section>
    </ScrollInView>
  );
};

export default ContactSection;
