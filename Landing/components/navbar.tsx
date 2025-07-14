"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"

interface NavbarProps {
  lang: "en" | "es"
  dict: any
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "hero", label: "GoLazy" },
    { id: "how-it-works", label: dict.howItWorks.title },
    { id: "why-it-matters", label: dict.whyItMatters.title },
    { id: "stellar", label: dict.howWeUseStellar.title },
    { id: "who-is-for", label: dict.whoItIsFor.title },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll effect
      setIsScrolled(window.scrollY > 50)

      // Active section highlighting
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100 // Offset for fixed navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Call once on mount to set initial state
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Adjust scroll position to account for fixed navbar height
      const yOffset = -64 // Height of the navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        "border-b border-white/10",
        isScrolled ? "bg-sage/50 backdrop-blur-md" : "bg-sage/95", // Removed rounded-b-full
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-white hover:text-peach transition-colors"
          >
            GoLazy
          </button>

          {/* Desktop Navigation (more centered) */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex space-x-8">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-peach" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Language Switcher and Mobile menu button (aligned right) */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLocale={lang} />
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:bg-white/20"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors ${
                  activeSection === item.id ? "text-peach" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
