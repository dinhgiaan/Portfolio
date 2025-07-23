import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import ModeToggle from "../theme/mode.toggle"
import { Button } from "../ui/button"
import { Menu, X } from "lucide-react"

const NAVIGATION_ITEMS = [
      { name: "About me", sectionId: "hero-section" },
      { name: "Skills", sectionId: "skills-section" },
      { name: "Projects", sectionId: "projects-section" },
      { name: "Contact", sectionId: "contact-section" }
]

const Header = () => {
      const [activeIndex, setActiveIndex] = useState<number>(0)
      const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 })
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
      const [isScrolling, setIsScrolling] = useState<boolean>(false)

      const itemRefs = useRef<(HTMLDivElement | null)[]>([])
      const containerRef = useRef<HTMLDivElement>(null)
      const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

      const updateIndicator = useCallback(() => {
            const activeItem = itemRefs.current[activeIndex]
            const container = containerRef.current
            if (activeItem && container) {
                  const containerRect = container.getBoundingClientRect()
                  const itemRect = activeItem.getBoundingClientRect()
                  setIndicatorStyle({
                        left: itemRect.left - containerRect.left,
                        width: itemRect.width,
                  })
            }
      }, [activeIndex])

      const scrollToSection = useCallback((sectionId: string, index: number) => {
            const element = document.getElementById(sectionId)
            if (element) {
                  setIsScrolling(true)
                  setActiveIndex(index)

                  const headerHeight = 80
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                  const offsetPosition = elementPosition - headerHeight

                  window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                  })

                  if (scrollTimeoutRef.current) {
                        clearTimeout(scrollTimeoutRef.current)
                  }

                  scrollTimeoutRef.current = setTimeout(() => {
                        setIsScrolling(false)
                  }, 1000)
            }
      }, [])

      const getActiveIndexFromScroll = useCallback(() => {
            if (isScrolling) return

            const headerHeight = 100
            const sections = NAVIGATION_ITEMS.map(item => item.sectionId)

            for (let i = sections.length - 1; i >= 0; i--) {
                  const section = document.getElementById(sections[i])
                  if (section) {
                        const rect = section.getBoundingClientRect()
                        if (rect.top <= headerHeight) {
                              setActiveIndex(i)
                              return
                        }
                  }
            }
      }, [isScrolling])

      const handleItemClick = useCallback((index: number) => {
            const item = NAVIGATION_ITEMS[index]
            setIsMobileMenuOpen(false)
            scrollToSection(item.sectionId, index)
      }, [scrollToSection])

      const toggleMobileMenu = useCallback(() => {
            setIsMobileMenuOpen((prev) => !prev)
      }, [])

      useEffect(() => {
            const timer = setTimeout(updateIndicator, 0)
            return () => clearTimeout(timer)
      }, [updateIndicator])

      useEffect(() => {
            let ticking = false

            const handleScroll = () => {
                  if (!ticking) {
                        requestAnimationFrame(() => {
                              getActiveIndexFromScroll()
                              ticking = false
                        })
                        ticking = true
                  }
            }

            window.addEventListener('scroll', handleScroll, { passive: true })
            return () => window.removeEventListener('scroll', handleScroll)
      }, [getActiveIndexFromScroll])

      useEffect(() => {
            let resizeTimeout: NodeJS.Timeout

            const handleResize = () => {
                  clearTimeout(resizeTimeout)
                  resizeTimeout = setTimeout(() => {
                        if (window.innerWidth >= 768) {
                              setIsMobileMenuOpen(false)
                        }
                        updateIndicator()
                  }, 150)
            }

            window.addEventListener("resize", handleResize, { passive: true })
            return () => {
                  window.removeEventListener("resize", handleResize)
                  clearTimeout(resizeTimeout)
            }
      }, [updateIndicator])

      useEffect(() => {
            return () => {
                  if (scrollTimeoutRef.current) {
                        clearTimeout(scrollTimeoutRef.current)
                  }
            }
      }, [])

      const navigationItems = useMemo(
            () =>
                  NAVIGATION_ITEMS.map((item, index) => (
                        <div
                              key={index}
                              ref={(el) => {
                                    itemRefs.current[index] = el
                              }}
                              onClick={() => handleItemClick(index)}
                              className={`py-2 px-1 cursor-pointer transition-colors duration-200 ease-out font-medium text-sm lg:text-base whitespace-nowrap select-none
            ${activeIndex === index
                                          ? "text-blue-600 dark:text-cyan-400"
                                          : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-300"
                                    }`}
                        >
                              {item.name}
                        </div>
                  )),
            [activeIndex, handleItemClick],
      )

      const mobileNavigationItems = useMemo(
            () =>
                  NAVIGATION_ITEMS.map((item, index) => (
                        <div
                              key={index}
                              onClick={() => handleItemClick(index)}
                              className={`block py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 font-medium select-none
            ${activeIndex === index
                                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-cyan-400 border-l-4 border-blue-500 dark:border-cyan-400"
                                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                        >
                              {item.name}
                        </div>
                  )),
            [activeIndex, handleItemClick],
      )

      return (
            <>
                  <header className="sticky top-0 z-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              {/* Desktop Header */}
                              <div className="hidden md:flex justify-between items-center h-16">
                                    <div className="flex-1"></div>

                                    <nav className="flex-1 flex justify-center">
                                          <div ref={containerRef} className="relative inline-flex space-x-8 lg:space-x-12 items-center">
                                                {navigationItems}
                                                <div
                                                      className="absolute bottom-0 h-0.5 bg-blue-500 dark:bg-cyan-400 transition-all duration-300 ease-out rounded-full"
                                                      style={{
                                                            left: `${indicatorStyle.left}px`,
                                                            width: `${indicatorStyle.width}px`,
                                                      }}
                                                />
                                          </div>
                                    </nav>

                                    <div className="flex-1 flex justify-end items-center space-x-3">
                                          <Button
                                                className="hidden lg:inline-flex px-6 py-2 text-sm font-medium cursor-pointer"
                                                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=dinhgiaanforwork@gmail.com', '_blank')}
                                          >
                                                Hire Me
                                          </Button>
                                          <Button className="lg:hidden px-4 py-2 text-sm">Hire</Button>
                                          <ModeToggle />
                                    </div>
                              </div>

                              {/* Mobile Header */}
                              <div className="md:hidden flex justify-between items-center h-16">
                                    <div className="flex-1"></div>
                                    <div className="flex items-center space-x-2">
                                          <Button size="sm" className="px-3 py-1.5 text-xs">
                                                Hire Me
                                          </Button>
                                          <ModeToggle />
                                          <button
                                                onClick={toggleMobileMenu}
                                                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                aria-label="Toggle mobile menu"
                                          >
                                                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                                          </button>
                                    </div>
                              </div>
                        </div>

                        {/* Mobile Menu */}
                        <div
                              className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                    ? "max-h-screen opacity-100"
                                    : "max-h-0 opacity-0 overflow-hidden"
                                    }`}
                        >
                              <nav className="px-4 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                                    <div className="space-y-3">{mobileNavigationItems}</div>
                              </nav>
                        </div>
                  </header>

                  {isMobileMenuOpen && (
                        <div
                              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                              onClick={() => setIsMobileMenuOpen(false)}
                        />
                  )}
            </>
      )
}

export default Header
