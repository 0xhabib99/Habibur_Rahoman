"use client"

import { useEffect, useRef } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Characters to display
    const characters = "01"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Array to track the y position of each column
    const drops = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100) // Start above the canvas
    }

    // Drawing function
    function draw() {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set text color and font
      ctx.fillStyle = "#0f0" // Matrix green
      ctx.font = `${fontSize}px monospace`

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters.charAt(Math.floor(Math.random() * characters.length))

        // Draw the character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        // Move the drop down
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    // Animation loop
    const interval = setInterval(draw, 50)

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Recalculate columns
      const newColumns = Math.floor(canvas.width / fontSize)

      // Reset drops array
      drops.length = 0
      for (let i = 0; i < newColumns; i++) {
        drops[i] = Math.floor(Math.random() * -100)
      }
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none" />
}
