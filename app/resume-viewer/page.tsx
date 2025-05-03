"use client"

import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import EnhancedMatrixBackground from "@/components/enhanced-matrix-background"
import BinaryOverlay from "@/components/binary-overlay"
import TextResume from "@/components/text-resume"

export default function ResumeViewer() {
  // Function to handle PDF download
  const handleDownloadPDF = () => {
    // Create a link element
    const link = document.createElement("a")

    // Set the href to the PDF file path
    link.href = "/Habibur_Rahoman_Resume.pdf"

    // Set download attribute with filename
    link.download = "Habibur_Rahoman_Resume.pdf"

    // Append to body
    document.body.appendChild(link)

    // Trigger click
    link.click()

    // Clean up
    document.body.removeChild(link)
  }

  return (
    <main className="min-h-screen flex flex-col">
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

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-blue-300 dark:border-green-500">
          <div className="p-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-blue-600 dark:text-green-500">Habibur Rahoman - Resume</h2>
            <button
              onClick={handleDownloadPDF}
              className="bg-blue-600 dark:bg-green-700 text-white px-3 py-1 rounded-md flex items-center text-sm hover:bg-blue-700 dark:hover:bg-green-600 transition-colors"
            >
              <Download className="w-3 h-3 mr-1" /> Download PDF
            </button>
          </div>

          <div className="p-6">
            <TextResume />
          </div>
        </div>
      </div>
    </main>
  )
}
