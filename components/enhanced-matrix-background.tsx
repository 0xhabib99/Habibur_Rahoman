"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/components/theme-provider"

export default function EnhancedMatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { theme } = useTheme()

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Characters to display (expanded character set)
    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Array to track the y position of each column
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100) // Start above the canvas
    }

    // Array to track the color of each column
    const colors: string[] = []
    for (let i = 0; i < columns; i++) {
      // Color based on theme
      const colorChoice = Math.random()
      if (theme === "dark") {
        if (colorChoice < 0.8) {
          // Different shades of green
          const greenIntensity = 150 + Math.floor(Math.random() * 105)
          colors[i] = `rgba(0, ${greenIntensity}, 0, 0.8)`
        } else if (colorChoice < 0.9) {
          colors[i] = "rgba(0, 180, 180, 0.8)" // Cyan
        } else if (colorChoice < 0.95) {
          colors[i] = "rgba(0, 100, 255, 0.8)" // Blue
        } else {
          colors[i] = "rgba(180, 0, 255, 0.8)" // Purple
        }
      } else {
        // Light theme colors
        if (colorChoice < 0.8) {
          // Different shades of blue
          const blueIntensity = 150 + Math.floor(Math.random() * 105)
          colors[i] = `rgba(0, 100, ${blueIntensity}, 0.8)`
        } else if (colorChoice < 0.9) {
          colors[i] = "rgba(0, 120, 120, 0.8)" // Teal
        } else if (colorChoice < 0.95) {
          colors[i] = "rgba(100, 0, 200, 0.8)" // Purple
        } else {
          colors[i] = "rgba(200, 0, 100, 0.8)" // Pink
        }
      }
    }

    // Array to track the speed of each column
    const speeds: number[] = []
    for (let i = 0; i < columns; i++) {
      speeds[i] = 0.5 + Math.random() * 1.5
    }

    // Drawing function
    function draw() {
      // Semi-transparent background to create fade effect
      ctx.fillStyle = theme === "dark" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters.charAt(Math.floor(Math.random() * characters.length))

        // Set text color
        ctx.fillStyle = colors[i]
        ctx.font = `${fontSize}px monospace`

        // Draw the character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        // Add a brighter head to the column for a "leading character" effect
        if (Math.random() > 0.98) {
          ctx.fillStyle = theme === "dark" ? "#fff" : "#000"
          ctx.fillText(char, i * fontSize, drops[i] * fontSize)
        }

        // Move the drop down
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += speeds[i]
      }
    }

    // Animation loop
    const interval = setInterval(draw, 33) // ~30fps

    return () => {
      clearInterval(interval)
    }
  }, [dimensions, theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-40 pointer-events-none matrix-effect transition-opacity duration-500"
    />
  )
}
