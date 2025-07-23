import {
      Menubar,
      MenubarContent,
      MenubarItem,
      MenubarMenu,
      MenubarSeparator,
      MenubarTrigger,
} from "@/components/ui/menubar"
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowDownToLine } from "lucide-react";
import "@/styles/animation.css";

const HeroSection = () => {
      const openPDF = (pdfPath: string) => {
            window.open(pdfPath, "_blank")
      }

      const downloadPDF = (pdfPath: string, fileName: string) => {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
      };

      return (
            <section className="min-w-full">
                  <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                        About Me
                  </h2>

                  <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4">
                        <div className="w-full lg:w-auto flex justify-center">
                              <CardContainer className="inter-var">
                                    <CardItem translateZ="100" className="w-full max-w-sm">
                                          <img
                                                src="/assets/avatar.png"
                                                height="400"
                                                width="400"
                                                className="h-91 w-full object-cover rounded-xl group-hover/card:shadow-2xl transition-all duration-300"
                                                alt="Dinh Gia An - Frontend Developer profile photo"
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
                                          <Menubar className=" rounded-sm bg-black border-0">
                                                <MenubarMenu>
                                                      <div className="glow-wrapper">
                                                            <div className="glow-layer"></div>
                                                            <div className="trigger-layer">
                                                                  <MenubarTrigger className="trigger-button">
                                                                        View My CV
                                                                  </MenubarTrigger>
                                                            </div>
                                                      </div>

                                                      <MenubarContent className="relative bg-white dark:bg-gray-900 border-0 shadow-2xl">
                                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 rounded-md opacity-20"></div>
                                                            <div className="relative z-10">
                                                                  <div className="flex items-center justify-between px-1">
                                                                        <MenubarItem className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-orange-50 dark:hover:from-purple-900/20 dark:hover:to-orange-900/20 transition-all duration-200 cursor-pointer" onClick={() => openPDF("/cv/Intern_FE.pdf")}>
                                                                              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent font-medium">
                                                                                    DinhGiaAn - Frontend Intern CV
                                                                              </span>
                                                                        </MenubarItem>
                                                                        <span className="text-gray-500 text-sm px-2 cursor-default">or</span>
                                                                        <span className="cursor-pointer hover:text-purple-600 transition-colors" onClick={() => downloadPDF("/cv/Intern_FE.pdf", "DinhGiaAn_CV_Frontend_Intern")}>
                                                                              <ArrowDownToLine size={19} />
                                                                        </span>
                                                                  </div>
                                                                  <MenubarSeparator className="bg-gradient-to-r from-purple-200 to-orange-200 dark:from-purple-700 dark:to-orange-700" />
                                                                  <div className="flex items-center justify-between px-1">
                                                                        <MenubarItem className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/20 dark:hover:to-cyan-900/20 transition-all duration-200 cursor-pointer" onClick={() => openPDF("/cv/Intern_BE.pdf")}>
                                                                              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-medium">
                                                                                    DinhGiaAn - Backend Intern CV
                                                                              </span>
                                                                        </MenubarItem>
                                                                        <span className="text-gray-500 text-sm px-2 pl-3.5 cursor-default">or</span>
                                                                        <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => downloadPDF("/cv/Intern_BE.pdf", "DinhGiaAn_CV_Backend_Intern")}>
                                                                              <ArrowDownToLine size={19} />
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                      </MenubarContent>
                                                </MenubarMenu>
                                          </Menubar>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default HeroSection;