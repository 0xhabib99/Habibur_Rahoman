"use client"

import { useState, useEffect } from "react"

interface DecryptionEffectProps {
  text: string
  className?: string
  speed?: number // milliseconds per character
  onComplete?: () => void
}

export default function DecryptionEffect({ text, className = "", speed = 50, onComplete }: DecryptionEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDecrypting, setIsDecrypting] = useState(true)

  useEffect(() => {
    if (!isDecrypting) return

    let currentIndex = 0
    const finalLength = text.length
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`"

    // Create initial random string of same length as final text
    let initialRandomText = ""
    for (let i = 0; i < finalLength; i++) {
      initialRandomText += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    setDisplayText(initialRandomText)

    // Start decryption animation
    const interval = setInterval(() => {
      if (currentIndex >= finalLength) {
        clearInterval(interval)
        setIsDecrypting(false)
        if (onComplete) onComplete()
        return
      }

      setDisplayText((prev) => {
        let result = ""
        for (let i = 0; i < finalLength; i++) {
          // Characters that are already decrypted stay the same
          if (i <= currentIndex) {
            result += text.charAt(i)
          }
          // Characters still being decrypted show random values
          else {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
          }
        }
        return result
      })

      currentIndex++
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, isDecrypting, onComplete])

  return <span className={`font-mono ${className} ${isDecrypting ? "text-green-400" : ""}`}>{displayText}</span>
}
