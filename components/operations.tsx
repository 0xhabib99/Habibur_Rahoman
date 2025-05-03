import { Shield, Target, Zap, Server, Database } from "lucide-react"
import ScanEffect from "./scan-effect"

export default function Operations() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden relative">
      <ScanEffect />

      <div className="bg-gray-800 px-4 py-2 flex items-center relative z-20">
        <Shield className="w-5 h-5 mr-2 text-blue-400" />
        <div className="text-gray-200 text-sm flex-1">Operations</div>
      </div>

      <div className="p-6 relative z-20">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">SECURITY OPERATIONS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Operation 1 */}
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-red-500 mr-3 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                Penetration Testing
              </h3>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
              Comprehensive security assessments to identify vulnerabilities in systems, networks, and applications
              before malicious actors can exploit them.
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Web Application Testing
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Network Infrastructure Testing
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Mobile Application Testing
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                API Security Testing
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Social Engineering Simulations
              </li>
            </ul>

            <div className="bg-gray-800 p-3 rounded border border-gray-700 text-sm text-gray-300 group-hover:border-blue-500 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="group-hover:text-white transition-colors duration-300">Success Rate</span>
                <span className="text-green-400 group-hover:text-green-300 group-hover:scale-105 transition-all duration-300">
                  98%
                </span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-green-500 h-2 rounded-full group-hover:bg-green-400 group-hover:shadow-[0_0_5px_rgba(74,222,128,0.5)] transition-all duration-500"
                  style={{ width: "98%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Operation 2 */}
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-yellow-500 mr-3 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                Incident Response
              </h3>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
              Rapid response to security incidents with a methodical approach to contain, eradicate, and recover from
              security breaches.
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Breach Investigation
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Malware Analysis
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Digital Forensics
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Threat Hunting
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Recovery Planning
              </li>
            </ul>

            <div className="bg-gray-800 p-3 rounded border border-gray-700 text-sm text-gray-300 group-hover:border-blue-500 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="group-hover:text-white transition-colors duration-300">Average Response Time</span>
                <span className="text-green-400 group-hover:text-green-300 group-hover:scale-105 transition-all duration-300">
                  &lt; 2 hours
                </span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-green-500 h-2 rounded-full group-hover:bg-green-400 group-hover:shadow-[0_0_5px_rgba(74,222,128,0.5)] transition-all duration-500"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Operation 3 */}
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Server className="w-6 h-6 text-blue-500 mr-3 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                Security Architecture
              </h3>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
              Design and implementation of secure systems and networks with defense-in-depth strategies to protect
              critical assets.
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Zero Trust Architecture
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Secure Network Design
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Identity & Access Management
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Encryption Implementation
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Security Control Mapping
              </li>
            </ul>

            <div className="bg-gray-800 p-3 rounded border border-gray-700 text-sm text-gray-300 group-hover:border-blue-500 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="group-hover:text-white transition-colors duration-300">
                  Security Posture Improvement
                </span>
                <span className="text-green-400 group-hover:text-green-300 group-hover:scale-105 transition-all duration-300">
                  +65%
                </span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-green-500 h-2 rounded-full group-hover:bg-green-400 group-hover:shadow-[0_0_5px_rgba(74,222,128,0.5)] transition-all duration-500"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Operation 4 */}
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-purple-500 mr-3 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                AI Security
              </h3>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
              Specialized security services for artificial intelligence systems, focusing on model security, data
              protection, and ethical AI implementation.
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Model Vulnerability Assessment
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Adversarial Testing
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Training Data Security
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                AI Ethics Compliance
              </li>
              <li className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                Secure MLOps Implementation
              </li>
            </ul>

            <div className="bg-gray-800 p-3 rounded border border-gray-700 text-sm text-gray-300 group-hover:border-blue-500 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="group-hover:text-white transition-colors duration-300">
                  Vulnerability Detection Rate
                </span>
                <span className="text-green-400 group-hover:text-green-300 group-hover:scale-105 transition-all duration-300">
                  92%
                </span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-green-500 h-2 rounded-full group-hover:bg-green-400 group-hover:shadow-[0_0_5px_rgba(74,222,128,0.5)] transition-all duration-500"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
