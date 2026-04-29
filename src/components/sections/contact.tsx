import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { myInfo } from "@/utils/constans";
import { useState } from "react";
import ScrollInView from "../scroll.inview";

const CONTACT_METHODS = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: myInfo.email,
    display: myInfo.email,
    href: `mailto:${myInfo.email}`,
    copyable: true,
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: myInfo.phone,
    display: myInfo.phone,
    href: `tel:${myInfo.phone}`,
    copyable: true,
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: myInfo.github,
    display: "github.com/dinhgiaan",
    href: myInfo.github,
    copyable: false,
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: myInfo.linkedin,
    display: "linkedin.com/in/dinhgiaan",
    href: myInfo.linkedin,
    copyable: false,
  },
];

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact-section" style={{ padding: "6rem 0 8rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <ScrollInView direction="up" delay={0}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "3rem",
            }}>
            <span className="section-label">04 — Contact</span>
            <span className="gold-line" style={{ flex: 1 }} />
          </div>
        </ScrollInView>

        {/* Big CTA heading */}
        <div style={{ marginBottom: "5rem" }}>
          <ScrollInView direction="up" delay={0.08}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                lineHeight: 1.05,
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
              }}>
              Let's build
              <br />
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                something great.
              </span>
            </h2>
          </ScrollInView>
          <ScrollInView direction="up" delay={0.16}>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "480px",
                marginBottom: "2rem",
              }}>
              I'm currently open to new opportunities. Whether you have a
              project in mind, a role to discuss, or just want to say hello — my
              inbox is always open.
            </p>
          </ScrollInView>
          <ScrollInView direction="up" delay={0.22}>
            <a
              href={`mailto:${myInfo.email}`}
              className="btn-luxury"
              style={{ textDecoration: "none" }}>
              <span>Send a message</span>
              <ArrowUpRight size={12} />
            </a>
          </ScrollInView>
        </div>

        {/* Divider */}
        <div className="gold-line" style={{ marginBottom: "3rem" }} />

        {/* Contact grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            marginBottom: "5rem",
          }}>
          {CONTACT_METHODS.map((m, i) => {
            const Icon = m.icon;
            const isCopied = copied === m.id;
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  background: "var(--bg-primary)",
                  padding: "1.75rem",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--bg-card)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--bg-primary)")
                }>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      border: "1px solid var(--border-strong)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-muted)",
                    }}>
                    <Icon size={15} />
                  </div>
                  <div style={{ display: "flex", gap: "0.4rem" }}>
                    {m.copyable && (
                      <button
                        onClick={() => copy(m.value, m.id)}
                        style={{
                          background: "none",
                          border: "1px solid var(--border)",
                          cursor: "pointer",
                          width: "28px",
                          height: "28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--text-muted)",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.color = "var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.color = "var(--text-muted)";
                        }}>
                        {isCopied ? (
                          <Check size={11} color="var(--accent)" />
                        ) : (
                          <Copy size={11} />
                        )}
                      </button>
                    )}
                    <a
                      href={m.href}
                      target={
                        m.id === "github" || m.id === "linkedin"
                          ? "_blank"
                          : "_self"
                      }
                      rel="noopener noreferrer"
                      style={{
                        background: "none",
                        border: "1px solid var(--border)",
                        width: "28px",
                        height: "28px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text-muted)";
                      }}>
                      <ArrowUpRight size={11} />
                    </a>
                  </div>
                </div>

                <p
                  className="font-mono-light"
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.18em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    marginBottom: "0.35rem",
                  }}>
                  {m.label}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-primary)",
                    fontWeight: 400,
                  }}>
                  {m.display}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}>
          <span
            className="font-mono-light"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "var(--text-muted)",
            }}>
            © {new Date().getFullYear()} Dinh Gia An — Crafted with care in Ho
            Chi Minh City
          </span>
          <span
            className="font-display"
            style={{
              fontSize: "1rem",
              fontStyle: "italic",
              color: "var(--text-muted)",
            }}>
            dinhgiaan<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
