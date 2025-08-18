import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import "@/styles/animation.css";
import ScrollInView from "../scroll.inview";

const HeroSection = () => {
      const openPDF = (pdfPath: string) => {
            window.open(pdfPath, "_blank")
      }

      return (
            <ScrollInView>
                  <section className="min-w-full">
                        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                              About Me
                        </h2>

                        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4">
                              <div className="w-full lg:w-auto flex justify-center">
                                    <CardContainer className="inter-var">
                                          <CardItem translateZ="100" className="w-full max-w-sm">
                                                <img
                                                      className="h-92 w-full object-cover rounded-xl group-hover/card:shadow-2xl transition-all duration-300"
                                                      alt="Dinh Gia An - Developer profile photo"
                                                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 245px"
                                                      width="245"
                                                      height="368"
                                                      loading="lazy"
                                                      src="/assets/profile-picture.jpg"
                                                />
                                          </CardItem>
                                    </CardContainer>
                              </div>

                              <div className="w-full lg:w-3/5 flex flex-col space-y-6">
                                    <div className="bg-gray-800 dark:bg-gray-900 px-6 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                                          <div className="bg-teal-500 w-16 h-0.5 mb-4 rounded"></div>

                                          <div className="flex space-x-2 mb-4">
                                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                          </div>

                                          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-700 transition-colors duration-200">
                                                <div className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-2">➜ whoami 🤔</div>
                                                <div className="flex">
                                                      <div className="w-1 bg-purple-500 h-auto rounded mr-4"></div>
                                                      <div className="flex-1">
                                                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                                                  DINH GIA AN
                                                            </h3>
                                                            <div className="flex items-center space-x-3 mb-3">
                                                                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                                                        Thu Duc City, Ho Chi Minh City.
                                                                  </p>
                                                                  <div className="w-6 h-4 bg-red-600 relative flex items-center justify-center shadow-lg mb-1">

                                                                        <div className="w-4 h-4 text-yellow-400">
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
                                                                        Seeking internship opportunities to contribute and grow! 🚀
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="text-gray-600 dark:text-gray-400 font-mono text-sm mt-3">
                                                      ➜ <span className="animate-pulse">_</span>
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

export default HeroSection;
