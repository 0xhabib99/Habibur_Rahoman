"use client"

import { useEffect, useState } from "react"

export default function HackerUI() {
  const [alerts, setAlerts] = useState<string[]>([])
  const [ipAddresses, setIpAddresses] = useState<string[]>([])
  const [securityLevel, setSecurityLevel] = useState("SECURE")
  const [scanProgress, setScanProgress] = useState(0)
  const [isScanning, setIsScanning] = useState(false)

  // Generate random IP addresses
  useEffect(() => {
    const ips = []
    for (let i = 0; i < 5; i++) {
      const ip = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
      ips.push(ip)
    }
    setIpAddresses(ips)
  }, [])

  // Simulate security alerts
  useEffect(() => {
    const alertMessages = [
      "Port scan detected from 45.33.12.18",
      "Firewall blocked suspicious connection",
      "SSH login attempt blocked",
      "Unusual traffic pattern detected",
      "Potential XSS attempt blocked",
      "Brute force attack prevented",
      "Suspicious API request intercepted",
      "Unauthorized access attempt blocked",
    ]

    const addAlert = () => {
      const newAlert = alertMessages[Math.floor(Math.random() * alertMessages.length)]
      setAlerts((prev) => [newAlert, ...prev.slice(0, 4)])
    }

    // Add initial alerts
    addAlert()
    addAlert()

    // Add new alerts periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        addAlert()
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  // Simulate security scan
  useEffect(() => {
    if (!isScanning) return

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          setIsScanning(false)
          return 100
        }
        return prev + 1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isScanning])

  // Randomly change security level
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setSecurityLevel((prev) => {
          if (prev === "SECURE") return "ALERT"
          return "SECURE"
        })

        // Reset back to secure after a delay
        if (securityLevel === "ALERT") {
          setTimeout(() => setSecurityLevel("SECURE"), 3000)
        }
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [securityLevel])

  const startScan = () => {
    setIsScanning(true)
    setScanProgress(0)
  }

  return (
    <div className="fixed top-0 right-0 z-10 p-4 pointer-events-none">
      <div className="flex flex-col gap-2 max-w-xs">
        {/* Security Status */}
        <div
          className={`border ${securityLevel === "SECURE" ? "border-green-500" : "border-red-500"} bg-black bg-opacity-70 p-2 text-xs rounded-md`}
        >
          <div className="flex justify-between items-center">
            <span className="text-gray-400">SECURITY STATUS:</span>
            <span className={securityLevel === "SECURE" ? "text-green-500" : "text-red-500 animate-pulse"}>
              {securityLevel}
            </span>
          </div>

          {isScanning && (
            <div className="mt-1">
              <div className="text-xs text-gray-400 mb-1">System Scan: {scanProgress}%</div>
              <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500 h-1 rounded-full transition-all duration-100"
                  style={{ width: `${scanProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {!isScanning && (
            <button onClick={startScan} className="text-xs text-blue-400 hover:text-blue-300 mt-1 pointer-events-auto">
              Initiate Security Scan
            </button>
          )}
        </div>

        {/* Security Alerts */}
        <div className="border border-yellow-500 bg-black bg-opacity-70 p-2 text-xs rounded-md">
          <div className="text-yellow-500 mb-1">SECURITY ALERTS</div>
          <div className="space-y-1 max-h-24 overflow-y-auto">
            {alerts.map((alert, index) => (
              <div key={index} className="text-gray-300 flex items-start">
                <span className="text-yellow-500 mr-1">!</span>
                <span>{alert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Network Activity */}
        <div className="border border-blue-500 bg-black bg-opacity-70 p-2 text-xs rounded-md">
          <div className="text-blue-500 mb-1">NETWORK ACTIVITY</div>
          <div className="space-y-1">
            {ipAddresses.map((ip, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-400">{ip}</span>
                <span className="text-green-500">{Math.floor(Math.random() * 100)}ms</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
