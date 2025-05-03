"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"

export default function BinaryOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Binary streams
    class BinaryStream {
      x: number
      y: number
      speed: number
      fontSize: number
      length: number
      binary: string
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.speed = 0.5 + Math.random() * 1.5
        this.fontSize = 8 + Math.floor(Math.random() * 6)
        this.length = 10 + Math.floor(Math.random() * 20)
        this.binary = ""
        this.opacity = theme === "dark" ? 0.05 + Math.random() * 0.1 : 0.03 + Math.random() * 0.07

        // Generate binary string
        for (let i = 0; i < this.length; i++) {
          this.binary += Math.random() > 0.5 ? "1" : "0"
        }
      }

      draw() {
        if (!ctx) return

        ctx.font = `${this.fontSize}px monospace`
        ctx.fillStyle = theme === "dark" ? `rgba(0, 255, 0, ${this.opacity})` : `rgba(0, 100, 255, ${this.opacity})`

        for (let i = 0; i < this.binary.length; i++) {
          const char = this.binary[i]
          ctx.fillText(char, this.x, this.y + i * this.fontSize)
        }

        this.y += this.speed

        // Reset if off screen
        if (this.y - this.fontSize * this.length > canvas.height) {
          this.y = -this.fontSize * this.length
          this.x = Math.random() * canvas.width
        }
      }
    }

    // Create binary streams
    const streamCount = Math.floor(canvas.width / 30)
    const streams: BinaryStream[] = []

    for (let i = 0; i < streamCount; i++) {
      streams.push(new BinaryStream())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      streams.forEach((stream) => {
        stream.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-10 binary-overlay transition-opacity duration-500"
    />
  )
}
