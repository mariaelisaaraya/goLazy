"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimateOnScroll({ children, className, delay = 0 }: AnimateOnScrollProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasAnimated])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        delay > 0 && hasAnimated && `delay-[${delay}ms]`, // Apply delay only if animated
        className,
      )}
      style={{ transitionDelay: hasAnimated ? `${delay}ms` : "0ms" }} // Apply delay via style for dynamic values
    >
      {children}
    </div>
  )
}
