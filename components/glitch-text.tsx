"use client"

import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
  glitchFactor?: number // 0-10, higher means more glitching
  speed?: number // milliseconds between glitches
}

export default function GlitchText({ text, className = "", glitchFactor = 3, speed = 2000 }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Random glitch timing
    const glitchInterval = setInterval(() => {
      if (Math.random() * 10 < glitchFactor) {
        glitch()
      }
    }, speed)

    return () => clearInterval(glitchInterval)
  }, [glitchFactor, speed, text])

  const glitch = () => {
    setIsGlitching(true)

    // Create glitched version of text
    let iterations = 0
    const maxIterations = 3 + Math.floor(Math.random() * 5)

    const glitchEffect = setInterval(() => {
      setDisplayText((prev) => {
        // Characters that might replace the original ones during glitching
        const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`"

        // Randomly decide how many characters to glitch
        const glitchCount = Math.floor(Math.random() * (text.length / 3))

        let result = text

        // Apply glitches
        for (let i = 0; i < glitchCount; i++) {
          const pos = Math.floor(Math.random() * text.length)
          const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)]
          result = result.substring(0, pos) + glitchChar + result.substring(pos + 1)
        }

        return result
      })

      iterations++
      if (iterations >= maxIterations) {
        clearInterval(glitchEffect)
        setDisplayText(text)
        setIsGlitching(false)
      }
    }, 50)
  }

  return (
    <span
      className={`${className} ${isGlitching ? "text-red-500 relative" : ""}`}
      style={{
        textShadow: isGlitching
          ? "0.05em 0 0 rgba(255,0,0,0.75), -0.025em -0.05em 0 rgba(0,255,0,0.75), 0.025em 0.05em 0 rgba(0,0,255,0.75)"
          : "",
        animation: isGlitching ? "glitch 500ms infinite" : "none",
      }}
      onMouseEnter={() => Math.random() > 0.5 && glitch()}
    >
      {displayText}
      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0)
          }
          20% {
            transform: translate(-2px, 2px)
          }
          40% {
            transform: translate(-2px, -2px)
          }
          60% {
            transform: translate(2px, 2px)
          }
          80% {
            transform: translate(2px, -2px)
          }
          100% {
            transform: translate(0)
          }
        }
      `}</style>
    </span>
  )
}
