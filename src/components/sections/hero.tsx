import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import "@/styles/animation.css";
import ScrollInView from "../scroll.inview";
import { motion } from "framer-motion";

const HeroSection = () => {
      const openPDF = (pdfPath: string) => {
            window.open(pdfPath, "_blank")
      }

      const itemVariants = {
            hidden: { opacity: 0, y: 30 },
            visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" as const }
            }
      }

      return (
            <ScrollInView>
                  <section className="min-w-full">
                        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                              About Me
                        </h2>

                        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4">
                              <motion.div variants={itemVariants} className="w-full lg:w-auto flex justify-center">
                                    <CardContainer className="inter-var">
                                          <CardItem translateZ="120" className="w-full max-w-sm">
                                                <div className="relative group">
                                                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                                                      <div className="relative overflow-hidden rounded-xl bg-white dark:bg-[#413d6b] p-1">
                                                            <img
                                                                  className="h-92 w-full object-cover rounded-lg transition-all duration-500 group-hover:scale-105"
                                                                  alt="Dinh Gia An - Developer profile photo"
                                                                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 245px"
                                                                  width="245"
                                                                  height="368"
                                                                  loading="lazy"
                                                                  src="/assets/profile-picture.jpg"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                      </div>
                                                </div>
                                          </CardItem>
                                    </CardContainer>
                              </motion.div>

                              <div className="w-full lg:w-3/5 group flex flex-col space-y-6">
                                    <div className="bg-gray-800 dark:bg-gray-900 px-6 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                                          <div className="bg-teal-500 w-16 h-0.5 mb-4 rounded"></div>

                                          <div className="flex space-x-2 mb-4">
                                                <div className="w-3 h-3 rounded-full transition-colors duration-500 bg-red-400 group-hover:bg-[#2031c8]"></div>
                                                <div className="w-3 h-3 rounded-full transition-colors duration-500 bg-yellow-400 group-hover:bg-[#d35021]"></div>
                                                <div className="w-3 h-3 rounded-full transition-colors duration-500 bg-green-400 group-hover:bg-[#e82fcc]"></div>
                                          </div>

                                          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-700 transition-colors duration-200">
                                                <div className="flex items-center space-x-3">
                                                      <div className="text-gray-600 dark:text-gray-400 font-mono text-sm transition-transform duration-300 group-hover:-rotate-45">➜</div>
                                                      <span>whoami 🤔</span>
                                                </div>
                                                <div className="flex">
                                                      <div className="w-1 bg-purple-500 h-auto transition-colors duration-300 rounded mr-4 group-hover:bg-[#167e7c]"></div>
                                                      <div className="flex-1">
                                                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                                                  DINH GIA AN
                                                            </h3>
                                                            <div className="flex items-center space-x-3 mb-3">
                                                                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                                                        Thu Duc City, Ho Chi Minh City.
                                                                  </p>
                                                                  <div className="w-5 h-3 bg-red-600 relative flex items-center justify-center shadow-lg mb-1">

                                                                        <div className="w-3 h-3 text-yellow-400">
                                                                              <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M256 32l52.2 160.3H480l-136.1 99 52.2 160.3L256 352.6 115.9 451.6l52.2-160.3L32 192.3h171.8z" />
                                                                              </svg>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="text-gray-700 dark:text-gray-300 font-sans text-sm leading-relaxed space-y-2">
                                                                  <p>
                                                                        Passionate <span className="text-purple-600 dark:text-purple-400 font-semibold">Developer</span> with experience
                                                                        in both <span className="text-orange-500 font-semibold">Frontend</span> and <span className="text-blue-500 font-semibold">Backend</span> development.
                                                                  </p>
                                                                  <p>
                                                                        Skilled in React, Next.js, TypeScript, Express.js, and database management.
                                                                        Experienced in building modern web applications and working with development teams.
                                                                  </p>
                                                                  <p className="text-teal-600 dark:text-teal-400 font-medium">
                                                                        Looking for opportunities to contribute, learn, and grow! 🚀
                                                                  </p>
                                                            </div>

                                                      </div>
                                                </div>
                                                <div className="text-gray-600 dark:text-gray-400 font-mono text-sm mt-3">
                                                      <span className="inline-block group-hover:rotate-45 transition-transform duration-300">➜</span>
                                                      <span className="animate-pulse">_</span>
                                                </div>

                                          </div>
                                    </div>

                                    <div className="w-fit ml-auto">
                                          <div className="relative rounded-sm transition-all duration-300 hover:scale-105">
                                                <Menubar className="rounded-sm border-0" onClick={() => openPDF("/cv/DinhGiaAn_Resume.pdf")}>
                                                      <MenubarMenu>
                                                            <div className="glow-wrapper">
                                                                  <div className="glow-layer"></div>
                                                                  <div className="trigger-layer">
                                                                        <MenubarTrigger className="trigger-button">
                                                                              View My Resume
                                                                        </MenubarTrigger>
                                                                  </div>
                                                            </div>
                                                      </MenubarMenu>
                                                </Menubar>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            </ScrollInView>
      )
}

export default HeroSection
