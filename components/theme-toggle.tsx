"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md border border-transparent hover:border-green-500 dark:hover:border-green-500 hover:border-blue-500 transition-all duration-300 bg-gray-100 dark:bg-gray-800 shadow-md"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500 hover:text-yellow-400 transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-blue-700 hover:text-blue-600 transition-colors" />
      )}
    </button>
  )
}
