import { useLocation, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const Navbar = () => {

  const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About Me", path: "/about" },
  
  // { name: "Services", path: "/services" },
]


  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


const lampBar = scrolled ? "bg-yellow-400" : "bg-white"
const glowStrong = scrolled ? "bg-yellow-400" : "bg-white/40"
const glowMedium = scrolled ? "bg-yellow-300" : "bg-white/30"
const glowSoft = scrolled ? "bg-yellow-200" : "bg-white/20"


  return (
    <section
      className={`
        w-screen sm:max-w-4xl fixed top-2 left-1/2 -translate-x-1/2 z-50
        font-montserrat text-white
        sm:w-[95vw] px-2 transition-all duration-1200
        ${
          scrolled
            ? "mt-4 scale-[0.96] shadow-lg backdrop-blur-md bg-white/10 rounded-2xl"
            : "mt-0 scale-100 shadow-none rounded-none"
        }
      `}
    >
      <nav className="h-12 flex items-center justify-center">
        <ul className="px-2 w-full flex justify-between text-[12px] font-extrabold xs:text-[14px] md:text-[16px] lg:text-[18px] relative">
          
          {navItems.map((item) => {
            const isActive = location.pathname === item.path

            return (
              <li key={item.path} className="relative px-1">
                <Link to={item.path}>{item.name}</Link>

                {isActive && (
                  <motion.div
                    layoutId="tubelight"
                    className="absolute left-0 right-0 -top-1 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    
                     {/* Lamp bar */}
    <div
      className={`absolute -top-1 left-1/2 -translate-x-1/2 w-7 h-1 rounded-full ${lampBar}`}
    />

    {/* Strong glow */}
    <div
      className={`absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-2 blur-md rounded-full ${glowStrong}`}
    />

    {/* Medium glow */}
    <div
      className={`absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 blur-md rounded-full ${glowMedium}`}
    />

    {/* Soft ambient glow */}
    <div
      className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-8 blur-2xl rounded-full ${glowSoft}`}
    />
                  </motion.div>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </section>
  )
}
