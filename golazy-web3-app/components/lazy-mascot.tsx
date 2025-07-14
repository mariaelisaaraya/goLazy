import Image from "next/image"

interface LazyMascotProps {
  size?: "sm" | "md" | "lg" | "xl"
  message?: string
  animate?: boolean
  className?: string
}

export function LazyMascot({ size = "md", message, animate = false, className = "" }: LazyMascotProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`${sizeClasses[size]} ${animate ? "lazy-float" : ""} mb-2`}>
        <Image
          src="/lazy-mascot.png"
          alt="Lazy the sloth mascot"
          width={128}
          height={128}
          className="w-full h-full object-contain"
        />
      </div>
      {message && (
        <div className="bg-white rounded-xl p-3 shadow-lg border-2 border-primary-200 max-w-xs text-center">
          <p className="text-sm text-volcanic font-medium">{message}</p>
        </div>
      )}
    </div>
  )
}
