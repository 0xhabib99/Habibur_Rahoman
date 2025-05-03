"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Terminal, FileText, List, Shield, CheckSquare, MessageSquare, User, Code, Menu, X } from "lucide-react"
import IntelFile from "@/components/intel-file"
import MissionLogs from "@/components/mission-logs"
import Operations from "@/components/operations"
import Clearances from "@/components/clearances"
import CommsChannel from "@/components/comms-channel"
import TerminalSection from "@/components/terminal-section"
import EnhancedMatrixBackground from "@/components/enhanced-matrix-background"
import BinaryOverlay from "@/components/binary-overlay"
import EnhancedVisitorTracking from "@/components/enhanced-visitor-tracking"
import { ThemeToggle } from "@/components/theme-toggle"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useTheme } from "@/components/theme-provider"

export default function Home() {
  const { theme } = useTheme()
  const [activeSection, setActiveSection] = useState("terminal")
  const [visitedSections, setVisitedSections] = useState({
    terminal: true, // Terminal is shown by default
    intel: false,
    missions: false,
    operations: false,
    clearances: false,
    comms: false,
  })
  const [showCongratulations, setShowCongratulations] = useState(false)
  const [progressPercentage, setProgressPercentage] = useState(16.67) // 1/6 = ~16.67%
  const [sectionsLearned, setSectionsLearned] = useState(1)
  const [hasCompletedAllSections, setHasCompletedAllSections] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Update progress when a section is visited
  useEffect(() => {
    // Count visited sections
    const visitedCount = Object.values(visitedSections).filter(Boolean).length
    setSectionsLearned(visitedCount)

    // Calculate percentage (each section is worth 16.67% of the total)
    const percentage = (visitedCount / 6) * 100
    setProgressPercentage(percentage)

    // Check if all sections have been visited
    const allVisited = Object.values(visitedSections).every(Boolean)
    if (allVisited && !hasCompletedAllSections) {
      setHasCompletedAllSections(true)
      setShowCongratulations(true)
    }
  }, [visitedSections, hasCompletedAllSections])

  // Handle section change
  const handleSectionChange = (section) => {
    setActiveSection(section)
    setMobileMenuOpen(false) // Close mobile menu when section changes

    // Mark this section as visited
    if (!visitedSections[section]) {
      setVisitedSections((prev) => ({
        ...prev,
        [section]: true,
      }))
    }
  }

  // Handle dialog close
  const handleDialogClose = () => {
    setShowCongratulations(false)
    setActiveSection("terminal") // Go back to home/terminal page
    // Keep the learning stats at 6/6 by not resetting visitedSections
  }

  // Handle action buttons
  const handleViewProfile = () => {
    handleSectionChange("intel")
  }

  const handleExploreProjects = () => {
    handleSectionChange("operations")
  }

  // Change the handleDownloadResume function to navigate to the resume viewer page
  const handleViewResume = () => {
    window.open("/resume-viewer", "_blank")
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Render the active section
  const renderActiveSection = () => {
    switch (activeSection) {
      case "terminal":
        return <TerminalSection />
      case "intel":
        return <IntelFile />
      case "missions":
        return <MissionLogs />
      case "operations":
        return (
          <>
            <EnhancedMatrixBackground />
            <Operations />
          </>
        )
      case "clearances":
        return <Clearances />
      case "comms":
        return <CommsChannel />
      default:
        return <TerminalSection />
    }
  }

  // Navigation items
  const navItems = [
    { id: "terminal", label: "Terminal", icon: Terminal },
    { id: "intel", label: "Intel File", icon: FileText },
    { id: "missions", label: "Mission Logs", icon: List },
    { id: "operations", label: "Operations", icon: Shield },
    { id: "clearances", label: "Clearances", icon: CheckSquare },
    { id: "comms", label: "Comms Channel", icon: MessageSquare },
  ]

  return (
    <main className="min-h-screen cyber-grid flex flex-col transition-colors duration-300">
      {/* Background effects */}
      <EnhancedMatrixBackground />
      <BinaryOverlay />

      {/* Progress bar */}
      <div className="w-full progress-track h-1 relative z-10">
        <div
          className="progress-bar h-1 transition-all duration-500 shadow-[0_0_8px_rgba(14,165,233,0.6)] dark:shadow-[0_0_8px_rgba(0,255,0,0.6)]"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="text-center py-2 text-sm relative z-10">
        <span>
          Explored {sectionsLearned}/6 sections ({Math.round(progressPercentage)}%)
        </span>
      </div>

      {/* Navigation */}
      <nav className="nav-bg py-3 relative z-20 transition-colors duration-300 sticky top-0">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold flex-shrink-0 group">
              <span className="logo-text group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors duration-300">
                H
              </span>
              <span className="logo-accent group-hover:text-blue-500 dark:group-hover:text-green-300 transition-colors duration-300 animate-pulse">
                R
              </span>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md border border-transparent hover:border-blue-500 dark:hover:border-green-500 transition-all duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-blue-600 dark:text-green-500" />
            ) : (
              <Menu className="h-6 w-6 text-blue-600 dark:text-green-500" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-2 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`px-3 py-2 rounded flex items-center text-sm border border-transparent hover:border-blue-500 dark:hover:border-green-500 transition-all duration-300 ${
                  activeSection === item.id
                    ? "nav-item-active dark:bg-green-900 dark:text-white dark:border-green-500 dark:shadow-[0_0_10px_rgba(0,255,0,0.3)]"
                    : "nav-item dark:text-white"
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" /> {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md z-20 border-t border-blue-200 dark:border-green-900 animate-in slide-in-from-top duration-300">
            <div className="container mx-auto py-2 px-4 flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionChange(item.id)}
                  className={`px-3 py-3 rounded flex items-center text-sm border ${
                    activeSection === item.id
                      ? "nav-item-active dark:bg-green-900 dark:text-white dark:border-green-500"
                      : "nav-item dark:text-white border-transparent"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" /> {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Visitor Information */}
      <div className="container mx-auto my-4 px-4 relative z-10">
        <EnhancedVisitorTracking />
      </div>

      {/* Active Section Content */}
      <div className="container mx-auto px-4 flex-1 relative z-10">{renderActiveSection()}</div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 mt-8 text-center py-8 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-2 shadow-[0_0_10px_rgba(14,165,233,0.5)] dark:shadow-[0_0_10px_rgba(0,255,0,0.5)]">
          Habibur Rahoman
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          Cyber Security Researcher | Penetration Tester
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <button
            onClick={handleViewProfile}
            className="btn-glow dark:bg-green-900 dark:hover:bg-green-800 dark:text-white px-3 md:px-4 py-2 rounded-md flex items-center transition-colors dark:border-green-700 dark:shadow-[0_0_10px_rgba(0,255,0,0.3)] dark:hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] text-sm md:text-base"
          >
            <User className="w-4 h-4 mr-2" /> View Profile
          </button>
          <button
            onClick={handleExploreProjects}
            className="btn-glow dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-white px-3 md:px-4 py-2 rounded-md flex items-center transition-colors dark:border-blue-700 dark:shadow-[0_0_10px_rgba(0,100,255,0.3)] dark:hover:shadow-[0_0_15px_rgba(0,100,255,0.5)] text-sm md:text-base"
          >
            <Code className="w-4 h-4 mr-2" /> Explore Projects
          </button>
          <button
            onClick={handleViewResume}
            className="btn-glow dark:bg-purple-900 dark:hover:bg-purple-800 dark:text-white px-3 md:px-4 py-2 rounded-md flex items-center transition-colors dark:border-purple-700 dark:shadow-[0_0_10px_rgba(180,0,255,0.3)] dark:hover:shadow-[0_0_15px_rgba(180,0,255,0.5)] text-sm md:text-base"
          >
            <FileText className="w-4 h-4 mr-2" /> View Resume
          </button>
        </div>
      </div>

      {/* Congratulations Dialog */}
      <Dialog open={showCongratulations} onOpenChange={handleDialogClose}>
        <DialogContent className="bg-white dark:bg-black text-gray-900 dark:text-white border-blue-300 dark:border-green-700 shadow-[0_0_30px_rgba(14,165,233,0.5)] dark:shadow-[0_0_30px_rgba(0,255,0,0.5)] w-[90%] max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-gradient dark:text-green-400 text-xl">Exploration Complete!</DialogTitle>
          </DialogHeader>
          <div className="p-4 text-center">
            <div className="text-blue-500 dark:text-green-400 text-5xl mb-4">🎉</div>
            <p className="text-lg mb-4">You have explored all sections of this portfolio!</p>
            <p className="text-gray-600 dark:text-gray-400">
              Thank you for taking the time to explore all sections of this cybersecurity portfolio.
            </p>
            <button
              onClick={handleDialogClose}
              className="btn-glow mt-6 dark:bg-green-900 dark:hover:bg-green-800 dark:text-white px-6 py-2 rounded-md dark:border-green-700 dark:shadow-[0_0_10px_rgba(0,255,0,0.3)] dark:hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]"
            >
              Continue Exploring
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
