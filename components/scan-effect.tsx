"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/components/theme-provider"

export default function ScanEffect() {
  const [position, setPosition] = useState(0)
  const [scanIntensity, setScanIntensity] = useState(0.5)
  const [scanColor, setScanColor] = useState("blue")
  const { theme } = useTheme()

  useEffect(() => {
    // Scan line animation
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 100) return 0
        return prev + 0.7
      })
    }, 10)

    // Randomly change scan intensity
    const intensityInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setScanIntensity(0.3 + Math.random() * 0.7)
      }
    }, 2000)

    // Randomly change scan color
    const colorInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        if (theme === "dark") {
          const colors = ["blue", "green", "cyan", "purple"]
          setScanColor(colors[Math.floor(Math.random() * colors.length)])
        } else {
          const colors = ["blue", "purple", "teal", "indigo"]
          setScanColor(colors[Math.floor(Math.random() * colors.length)])
        }
      }
    }, 3000)

    return () => {
      clearInterval(interval)
      clearInterval(intensityInterval)
      clearInterval(colorInterval)
    }
  }, [theme])

  // Get the current color gradient based on scanColor and theme
  const getGradient = () => {
    if (theme === "dark") {
      switch (scanColor) {
        case "green":
          return "from-transparent via-green-500 to-transparent"
        case "cyan":
          return "from-transparent via-cyan-500 to-transparent"
        case "purple":
          return "from-transparent via-purple-500 to-transparent"
        default:
          return "from-transparent via-blue-500 to-transparent"
      }
    } else {
      switch (scanColor) {
        case "purple":
          return "from-transparent via-purple-600 to-transparent"
        case "teal":
          return "from-transparent via-teal-600 to-transparent"
        case "indigo":
          return "from-transparent via-indigo-600 to-transparent"
        default:
          return "from-transparent via-blue-600 to-transparent"
      }
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Primary scan line */}
      <div
        className={`absolute left-0 right-0 h-[2px] bg-gradient-to-r ${getGradient()} blur-[1px]`}
        style={{
          top: `${position}%`,
          opacity: scanIntensity,
        }}
      />

      {/* Secondary scan lines (echo effect) */}
      <div
        className={`absolute left-0 right-0 h-[1px] bg-gradient-to-r ${getGradient()} blur-[2px]`}
        style={{
          top: `${position + 1}%`,
          opacity: scanIntensity * 0.4,
        }}
      />

      <div
        className={`absolute left-0 right-0 h-[1px] bg-gradient-to-r ${getGradient()} blur-[2px]`}
        style={{
          top: `${position - 1}%`,
          opacity: scanIntensity * 0.4,
        }}
      />

      {/* Scan distortion effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black dark:opacity-5 opacity-2" />

      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

      {/* Occasional glitch effect */}
      {Math.random() > 0.97 && (
        <div
          className="absolute inset-0 bg-white dark:opacity-[0.03] opacity-[0.02] mix-blend-overlay"
          style={{
            animation: "glitch 50ms",
            height: `${Math.random() * 10}px`,
            top: `${Math.random() * 100}%`,
          }}
        />
      )}

      <style jsx>{`
        @keyframes glitch {
          0% { transform: translateX(-10%); }
          25% { transform: translateX(10%); }
          50% { transform: translateX(-5%); }
          75% { transform: translateX(5%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
