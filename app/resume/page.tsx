import ResumePreview from "@/components/resume-preview"
import EnhancedMatrixBackground from "@/components/enhanced-matrix-background"
import BinaryOverlay from "@/components/binary-overlay"
import EnhancedVisitorTracking from "@/components/enhanced-visitor-tracking"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ResumePage() {
  return (
    <main className="min-h-screen cyber-grid flex flex-col transition-colors duration-300">
      {/* Background effects */}
      <EnhancedMatrixBackground />
      <BinaryOverlay />

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

          <Link
            href="/"
            className="flex items-center text-sm text-blue-600 dark:text-green-500 hover:text-blue-800 dark:hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>
        </div>
      </nav>

      {/* Visitor Information */}
      <div className="container mx-auto my-4 px-4 relative z-10">
        <EnhancedVisitorTracking />
      </div>

      {/* Resume Content */}
      <div className="container mx-auto px-4 flex-1 relative z-10 mb-8">
        <ResumePreview />
      </div>
    </main>
  )
}
