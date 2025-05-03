import { CheckSquare, Award, Shield, Lock } from "lucide-react"
import ScanEffect from "./scan-effect"

export default function Clearances() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden relative">
      <ScanEffect />

      <div className="bg-gray-800 px-4 py-2 flex items-center relative z-20">
        <CheckSquare className="w-5 h-5 mr-2 text-blue-400" />
        <div className="text-gray-200 text-sm flex-1">Clearances</div>
      </div>

      <div className="p-6 relative z-20">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">SECURITY CLEARANCES & CERTIFICATIONS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certification 1 */}
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-yellow-500 mr-3 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                Google Cyber Security
              </h3>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
              Comprehensive certification covering security fundamentals, network security, and security operations.
            </p>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Issued: 2023
              </span>
              <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-xs group-hover:bg-green-800 group-hover:text-green-200 transition-colors duration-300">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Certification 2 */}
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-red-500 mr-3 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                AWS Cloud Practitioner
              </h3>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
              Foundational understanding of AWS Cloud services, security best practices, and cloud architecture.
            </p>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Issued: 2022
              </span>
              <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-xs group-hover:bg-green-800 group-hover:text-green-200 transition-colors duration-300">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Certification 3 */}
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-500 mr-3 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                CWL Certified Cyber Security Analyst [C3SA]
              </h3>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
              Specialized certification for security analysis, threat detection, and incident response.
            </p>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Issued: 2022
              </span>
              <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-xs group-hover:bg-green-800 group-hover:text-green-200 transition-colors duration-300">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Certification 4 */}
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-purple-500 mr-3 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                Open-Source Intelligence | Basel Institute on Governance
              </h3>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
              Specialized training in OSINT techniques for security research and investigations.
            </p>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Issued: 2021
              </span>
              <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-xs group-hover:bg-green-800 group-hover:text-green-200 transition-colors duration-300">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Additional Certifications */}
          <div className="border border-gray-700 rounded-lg p-4 col-span-1 md:col-span-2 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-green-500 mr-3 group-hover:text-green-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                Additional Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-3 rounded border border-gray-700 group-hover:border-green-700 transition-all duration-300 hover:shadow-[0_0_10px_rgba(74,222,128,0.2)] hover:scale-[1.02]">
                <h4 className="font-medium text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Linux Privilege Escalation (TCM Security)
                </h4>
                <p className="text-gray-300 text-sm mb-2 group-hover:text-white transition-colors duration-300">
                  Advanced techniques for identifying and exploiting Linux privilege escalation vulnerabilities.
                </p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Since: 2022
                  </span>
                  <span className="bg-green-900 text-green-300 px-2 py-1 rounded group-hover:bg-green-800 group-hover:text-green-200 transition-colors duration-300">
                    ACTIVE
                  </span>
                </div>
              </div>

              <div className="bg-gray-800 p-3 rounded border border-gray-700 group-hover:border-green-700 transition-all duration-300 hover:shadow-[0_0_10px_rgba(74,222,128,0.2)] hover:scale-[1.02]">
                <h4 className="font-medium text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Windows Privilege Escalation (TCM Security)
                </h4>
                <p className="text-gray-300 text-sm mb-2 group-hover:text-white transition-colors duration-300">
                  Specialized training in Windows security vulnerabilities and privilege escalation techniques.
                </p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Since: 2022
                  </span>
                  <span className="bg-green-900 text-green-300 px-2 py-1 rounded group-hover:bg-green-800 group-hover:text-green-200 transition-colors duration-300">
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
