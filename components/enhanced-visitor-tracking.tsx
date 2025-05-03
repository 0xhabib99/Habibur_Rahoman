"use client"

import { useEffect, useState } from "react"
import { Globe, Server } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

interface VisitorInfo {
  ip: string
  location: string
  browser: string
  os: string
  time: string
}

export default function EnhancedVisitorTracking() {
  const { theme } = useTheme()
  const [visitorInfo, setVisitorInfo] = useState<VisitorInfo>({
    ip: "Loading...",
    location: "Locating...",
    browser: "Analyzing...",
    os: "Detecting...",
    time: new Date().toLocaleTimeString(),
  })
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
  const [isLoading, setIsLoading] = useState(true)

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
      setVisitorInfo((prev) => ({ ...prev, time: new Date().toLocaleTimeString() }))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Fetch visitor information
  useEffect(() => {
    // Get browser and OS information
    const browserInfo = detectBrowser()
    const osInfo = detectOS()

    // Simulate a delay for loading effect
    setTimeout(() => {
      setVisitorInfo({
        ip: "Your IP is protected",
        location: "Location data is not tracked",
        browser: browserInfo,
        os: osInfo,
        time: new Date().toLocaleTimeString(),
      })
      setIsLoading(false)
    }, 1500)
  }, [])

  // Detect browser
  const detectBrowser = () => {
    const userAgent = navigator.userAgent
    let browserName

    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "Chrome"
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "Firefox"
    } else if (userAgent.match(/safari/i)) {
      browserName = "Safari"
    } else if (userAgent.match(/opr\//i)) {
      browserName = "Opera"
    } else if (userAgent.match(/edg/i)) {
      browserName = "Edge"
    } else {
      browserName = "Unknown"
    }

    return `${browserName} ${navigator.appVersion.split(" ").pop()}`
  }

  // Detect OS
  const detectOS = () => {
    const userAgent = navigator.userAgent
    let os

    if (userAgent.indexOf("Win") !== -1) os = "Windows"
    else if (userAgent.indexOf("Mac") !== -1) os = "MacOS"
    else if (userAgent.indexOf("Linux") !== -1) os = "Linux"
    else if (userAgent.indexOf("Android") !== -1) os = "Android"
    else if (userAgent.indexOf("iOS") !== -1) os = "iOS"
    else os = "Unknown"

    return os
  }

  return (
    <div
      className={`
      ${
        theme === "light"
          ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300 shadow-[0_5px_15px_rgba(59,130,246,0.3)]"
          : "bg-black bg-opacity-80 border-green-900 shadow-[0_0_15px_rgba(0,255,0,0.2)]"
      } 
      rounded-lg p-3 sm:p-4 border transition-all duration-300 relative overflow-hidden
    `}
    >
      {/* Animated scan line for light mode */}
      {theme === "light" && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200/20 to-transparent opacity-70 pointer-events-none"
          style={{
            animation: "scanline 4s linear infinite",
            height: "200%",
            top: "-100%",
          }}
        />
      )}

      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="flex flex-wrap justify-between items-center mb-3 sm:mb-4 relative z-10">
        <h2
          className={`
          ${
            theme === "light"
              ? "text-blue-800 font-bold flex items-center text-sm sm:text-base"
              : "text-green-500 font-bold flex items-center text-sm sm:text-base"
          }
        `}
        >
          VISITOR INFORMATION
        </h2>
      </div>

      {isLoading ? (
        <div className="space-y-3 sm:space-y-4 relative z-10">
          <div
            className={`
            text-xs sm:text-sm
            ${theme === "light" ? "text-blue-800" : "text-gray-300"}
          `}
          >
            Loading visitor information...
          </div>
          <div
            className={`
            w-full h-1.5 sm:h-2 rounded-full overflow-hidden
            ${theme === "light" ? "bg-blue-100" : "bg-gray-800"}
          `}
          >
            <div
              className={`
                h-1.5 sm:h-2 rounded-full transition-all duration-200
                ${
                  theme === "light"
                    ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                    : "bg-green-500 shadow-[0_0_8px_rgba(0,255,0,0.6)]"
                }
              `}
              style={{ width: `80%` }}
            ></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 animate-pulse">
            <div
              className={`
              h-5 sm:h-6 rounded
              ${theme === "light" ? "bg-blue-100" : "bg-gray-800"}
            `}
            ></div>
            <div
              className={`
              h-5 sm:h-6 rounded
              ${theme === "light" ? "bg-blue-100" : "bg-gray-800"}
            `}
            ></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-10">
          <div>
            <div className="flex items-center mb-1">
              <Globe
                className={`
                w-3 h-3 sm:w-4 sm:h-4 mr-1
                ${theme === "light" ? "text-blue-700" : "text-green-400"}
              `}
              />
              <span
                className={`
                text-xs sm:text-sm font-medium
                ${theme === "light" ? "text-blue-900" : "text-gray-300"}
              `}
              >
                BROWSER
              </span>
            </div>
            <div
              className={`
              p-2 rounded
              ${
                theme === "light"
                  ? "bg-white/70 shadow-inner border border-blue-200"
                  : "bg-black/50 border border-green-900/50"
              }
            `}
            >
              <p
                className={`
                font-mono text-xs sm:text-sm
                ${theme === "light" ? "text-blue-900" : "text-white"}
              `}
              >
                {visitorInfo.browser}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-1">
              <Server
                className={`
                w-3 h-3 sm:w-4 sm:h-4 mr-1
                ${theme === "light" ? "text-blue-700" : "text-green-400"}
              `}
              />
              <span
                className={`
                text-xs sm:text-sm font-medium
                ${theme === "light" ? "text-blue-900" : "text-gray-300"}
              `}
              >
                SYSTEM
              </span>
            </div>
            <div
              className={`
              p-2 rounded
              ${
                theme === "light"
                  ? "bg-white/70 shadow-inner border border-blue-200"
                  : "bg-black/50 border border-green-900/50"
              }
            `}
            >
              <p
                className={`
                font-mono text-xs sm:text-sm
                ${theme === "light" ? "text-blue-900" : "text-white"}
              `}
              >
                {visitorInfo.os}
              </p>
            </div>
          </div>
        </div>
      )}

      <div
        className={`
        mt-3 sm:mt-4 pt-2 border-t relative z-10
        ${theme === "light" ? "border-blue-200" : "border-gray-700"}
      `}
      >
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div
            className={`
            text-xs
            ${theme === "light" ? "text-blue-700" : "text-gray-400"}
          `}
          >
            Current time: <span className="font-mono">{currentTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
