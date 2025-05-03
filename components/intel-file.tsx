import { FileText, Download } from "lucide-react"
import ScanEffect from "./scan-effect"

export default function IntelFile() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden relative">
      <ScanEffect />

      <div className="bg-gray-800 px-4 py-2 flex items-center relative z-20">
        <FileText className="w-5 h-5 mr-2 text-blue-400" />
        <div className="text-gray-200 text-sm flex-1">Intel File</div>
      </div>

      <div className="p-6 relative z-20">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">INTELLIGENCE BRIEFING</h2>

        <div className="grid gap-6">
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
            <h3 className="text-xl font-semibold text-yellow-500 mb-2 hover:text-yellow-400 hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
              PROFILE SUMMARY
            </h3>
            <p className="text-gray-300 mb-4 hover:text-white transition-colors duration-300">
              Hi, I am Habibur Rahoman from Bangladesh. I am a Cyber Security Researcher. My Passion is to learn new
              things, explore new ideas and thoughts, and emphasize self-development. I am a quick learner and a strong
              information technology professional with a Bachelor of Science - B.Sc in Computer Science & Engineering
              from Islamic University, Bangladesh.
            </p>
            <p className="text-gray-300 mb-4 hover:text-white transition-colors duration-300">
              My professional journey includes experience as an VAPT, where I do research on vulnerability on the the
              assigned domain, and worked then with cyber security analyst team. I also conducted Digital forensics
              investigation on the enterprise networks and systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="text-blue-400 font-medium mb-2 hover:text-blue-300 hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300">
                  CORE COMPETENCIES
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">
                    Penetration Testing
                  </li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">
                    Web application Testing
                  </li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">VAPT</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">OSINT</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-2 hover:text-blue-300 hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300">
                  CERTIFICATIONS
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">
                    Google Cyber Security
                  </li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">
                    AWS Cloud Practitioner
                  </li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">
                    CWL Certified Cyber Security Analyst [C3SA]
                  </li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">
                    Open-Source Intelligence | Basel Institute on Governance
                  </li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">
                    Linux Privilege Escalation (TCM Security)
                  </li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">
                    Windows Privilege Escalation (TCM Security)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
            <h3 className="text-xl font-semibold text-yellow-500 mb-2 hover:text-yellow-400 hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
              TECHNICAL ARSENAL
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-blue-400 font-medium mb-2 hover:text-blue-300 hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300">
                  LANGUAGES
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">Python</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">JavaScript</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">Bash</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">PowerShell</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">SQL</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-2 hover:text-blue-300 hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300">
                  TOOLS
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">Metasploit</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">Burp Suite</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">Wireshark</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">Nmap</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">OWASP ZAP</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-2 hover:text-blue-300 hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300">
                  PLATFORMS
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">Linux</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">Windows</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">AWS</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">Azure</li>
                  <li className="hover:text-white hover:translate-x-1 transition-all duration-200">Docker</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
            <h3 className="text-xl font-semibold text-yellow-500 mb-2 hover:text-yellow-400 hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
              DOCUMENTS
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 border border-gray-700 rounded bg-gray-800 hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-gray-300 hover:text-white transition-colors duration-300">
                    Habibur Rahoman's Resume.pdf
                  </span>
                </div>
                <a
                  href="/resume-viewer"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-300"
                  rel="noreferrer"
                >
                  <FileText className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center justify-between p-2 border border-gray-700 rounded bg-gray-800 hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-gray-300 hover:text-white transition-colors duration-300">
                    Web Application Reconnaissance and Vulnerability Detection.pdf
                  </span>
                </div>
                <button className="text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-300">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
