"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import ScanEffect from "./scan-effect"
import { useTheme } from "@/components/theme-provider"

export default function TerminalSection() {
  const { theme } = useTheme()
  const [terminalText, setTerminalText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const fullText = `Welcome to my cybersecurity portfolio. I specialize in network security, web application security, API security, system security, and collaborating closely with clients to identify and mitigate potential vulnerabilities. With a deep understanding of the tactics and techniques used by adversaries, I conduct real-world attack simulations to uncover security gaps and provide actionable recommendations. Beyond hands-on security assessments, my goal is to empower individuals and organizations to adopt effective security practices.`

  useEffect(() => {
    // Only keep the blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(cursorInterval)
    }
  }, [])

  useEffect(() => {
    // Focus the hidden input when terminal is clicked
    const handleTerminalClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    const terminal = terminalRef.current
    if (terminal) {
      terminal.addEventListener("click", handleTerminalClick)
    }

    return () => {
      if (terminal) {
        terminal.removeEventListener("click", handleTerminalClick)
      }
    }
  }, [])

  // Scroll to bottom when content changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory, terminalText])

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentCommand.trim()) {
      const command = currentCommand.trim()

      // Process command
      let response = ""

      if (command.toLowerCase() === "help") {
        response = `
Available commands:
- help: Show this help message
- whoami: Display user information
- skills: List my technical skills
- clear: Clear the terminal
- contact: Show contact information
- projects: List recent security projects
- tools: List security tools I use
`
      } else if (command.toLowerCase() === "whoami") {
        response = "Habibur Rahoman - Cyber Security Researcher | Penetration Tester"
      } else if (command.toLowerCase() === "skills") {
        response = `
Technical Skills:
- Penetration Testing
- Web Application Security
- VAPT (Vulnerability Assessment & Penetration Testing)
- OSINT (Open Source Intelligence)
- Network Security
- API Security
- Cloud Security (AWS, Azure)
`
      } else if (command.toLowerCase() === "clear") {
        setCommandHistory([])
        setCurrentCommand("")
        return
      } else if (command.toLowerCase() === "contact") {
        response = `
Contact Information:
- Email: secure@habibur.com
- Signal: @habibur_security
- Matrix: @habibur:matrix.org
`
      } else if (command.toLowerCase() === "projects") {
        response = `
Recent Security Projects:
- Web Application Penetration Test for E-commerce Platform
- AI Model Security Assessment for Financial Institution
- Cloud Infrastructure Security Audit (AWS)
- API Security Assessment for Healthcare Provider
`
      } else if (command.toLowerCase() === "tools") {
        response = `
Security Tools:
- Metasploit
- Burp Suite
- Wireshark
- Nmap
- OWASP ZAP
- Kali Linux
- Hashcat
- John the Ripper
`
      } else {
        response = `Command not found: ${command}. Type 'help' for available commands.`
      }

      setCommandHistory([...commandHistory, `$ ${command}`, response])
      setCurrentCommand("")
    }
  }

  return (
    <div className="terminal-bg rounded-lg overflow-hidden relative border border-blue-300 dark:border-green-500 shadow-lg dark:shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all duration-300">
      <ScanEffect />

      {/* Terminal header */}
      <div className="terminal-header px-3 sm:px-4 py-2 flex items-center relative z-20 transition-colors duration-300">
        <div className="flex space-x-1 sm:space-x-2 mr-3 sm:mr-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="terminal-text text-xs sm:text-sm flex-1 text-center font-mono transition-colors duration-300">
          terminal@habibur:~/secure_shell
        </div>
      </div>

      {/* Terminal content */}
      <div
        ref={terminalRef}
        className="p-3 sm:p-6 font-mono text-xs sm:text-sm relative z-20 h-[300px] sm:h-[400px] overflow-y-auto bg-[url('/noise.png')] bg-repeat transition-colors duration-300"
      >
        <p className="terminal-text transition-colors duration-300">
          $ <span className="terminal-command transition-colors duration-300">whoami</span>
        </p>

        <div className="mt-3 sm:mt-4 flex flex-col md:flex-row">
          <div className="mr-0 md:mr-4 bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-3 md:mb-0 hover:border-blue-500 dark:hover:border-green-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold">
              <span className="text-gray-900 dark:text-white transition-colors duration-300">H</span>
              <span className="text-blue-600 dark:text-green-500 transition-colors duration-300">R</span>
            </div>
          </div>

          <div>
            <p className="terminal-command hover:text-blue-500 dark:hover:text-green-300 hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_8px_rgba(0,255,0,0.5)] transition-all duration-300">
              {fullText}
              {cursorVisible && (
                <span className="inline-block w-1.5 sm:w-2 h-3 sm:h-4 bg-blue-500 dark:bg-green-500 ml-1 animate-pulse"></span>
              )}
            </p>
          </div>
        </div>

        {/* Command history */}
        <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
          {commandHistory.map((line, index) => (
            <p
              key={index}
              className={
                line.startsWith("$")
                  ? "terminal-text transition-colors duration-300"
                  : "terminal-output pl-2 whitespace-pre-line transition-colors duration-300"
              }
            >
              {line}
            </p>
          ))}
        </div>

        {/* Current command line */}
        <div className="mt-2 flex items-center">
          <span className="terminal-text transition-colors duration-300">$</span>
          <span className="terminal-command ml-2 transition-colors duration-300">{currentCommand}</span>
          {cursorVisible && (
            <span className="inline-block w-1.5 sm:w-2 h-3 sm:h-4 bg-blue-500 dark:bg-green-500 ml-1 animate-pulse"></span>
          )}
        </div>

        {/* Hidden input for capturing keystrokes */}
        <input
          ref={inputRef}
          type="text"
          className="opacity-0 absolute top-0 left-0 w-1 h-1"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
        />

        <div className="mt-3 sm:mt-4 text-gray-500 dark:text-gray-500 text-xs transition-colors duration-300">
          [Click anywhere in the terminal and type 'help' for available commands]
        </div>
      </div>
    </div>
  )
}
