import { Calendar, Tag, AlertTriangle } from "lucide-react"
import ScanEffect from "./scan-effect"

export default function MissionLogs() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden relative">
      <ScanEffect />

      <div className="bg-gray-800 px-4 py-2 flex items-center relative z-20">
        <div className="text-gray-200 text-sm flex-1">Mission Logs</div>
      </div>

      <div className="p-6 relative z-20">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">SECURITY OPERATIONS LOG</h2>

        <div className="space-y-6">
          {/* Mission 1 */}
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                Web Application Penetration Test
              </h3>
              <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-xs group-hover:bg-green-800 group-hover:text-green-200 transition-colors duration-300">
                COMPLETED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2023-04-15</span>
              </div>
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                <Tag className="w-4 h-4 mr-2" />
                <span>Web Security</span>
              </div>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
              Conducted a comprehensive penetration test on a client's e-commerce platform. Identified and helped
              remediate 3 critical vulnerabilities including SQL injection and broken authentication.
            </p>

            <div className="bg-gray-800 p-3 rounded border border-gray-700 font-mono text-sm text-gray-300 group-hover:border-blue-500 group-hover:text-blue-100 transition-all duration-300 overflow-x-auto">
              <p className="group-hover:text-green-400 transition-colors duration-300">$ nmap -sV -p- target.com</p>
              <p className="group-hover:text-green-400 transition-colors duration-300">
                $ sqlmap -u "https://target.com/product?id=1" --dbs
              </p>
              <p className="group-hover:text-green-400 transition-colors duration-300">
                $ burpsuite --project=ecommerce_audit
              </p>
            </div>
          </div>

          {/* Mission 2 */}
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                AI Model Security Assessment
              </h3>
              <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs group-hover:bg-blue-800 group-hover:text-blue-200 transition-colors duration-300">
                IN PROGRESS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2023-09-22</span>
              </div>
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                <Tag className="w-4 h-4 mr-2" />
                <span>AI Security</span>
              </div>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
              Evaluating security vulnerabilities in a machine learning model used for financial fraud detection.
              Testing for model poisoning, adversarial examples, and data extraction attacks.
            </p>

            <div className="bg-gray-800 p-3 rounded border border-gray-700 font-mono text-sm text-gray-300 group-hover:border-blue-500 group-hover:text-blue-100 transition-all duration-300 overflow-x-auto">
              <p className="group-hover:text-green-400 transition-colors duration-300">
                $ python3 adversarial_test.py --model=fraud_detection
              </p>
              <p className="group-hover:text-green-400 transition-colors duration-300">
                $ python3 model_extraction.py --target-api=https://api.target.com/predict
              </p>
            </div>
          </div>

          {/* Mission 3 */}
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                Cloud Infrastructure Security Audit
              </h3>
              <span className="bg-yellow-900 text-yellow-300 px-2 py-1 rounded text-xs group-hover:bg-yellow-800 group-hover:text-yellow-200 transition-colors duration-300">
                SCHEDULED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2023-11-10</span>
              </div>
              <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                <Tag className="w-4 h-4 mr-2" />
                <span>Cloud Security</span>
              </div>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
              Scheduled comprehensive security audit of AWS infrastructure including EC2, S3, and Lambda services. Will
              focus on IAM configurations, network security, and data protection measures.
            </p>

            <div className="flex items-center mt-2 text-yellow-500 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span className="text-sm">Preparation in progress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
