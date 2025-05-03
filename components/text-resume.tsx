import { Mail, Phone, Linkedin, Award, Globe, Book, Code } from "lucide-react"

export default function TextResume() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 p-4 rounded-lg">
      {/* Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-green-500">HABIBUR RAHOMAN</h1>
        <h2 className="text-xl text-blue-500 dark:text-green-400 mb-4">Cyber Security Specialist</h2>

        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-1 text-blue-500 dark:text-green-400" />
            <span>habiburrahmanr99@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-1 text-blue-500 dark:text-green-400" />
            <span>+8801744830527</span>
          </div>
          <div className="flex items-center">
            <Linkedin className="w-4 h-4 mr-1 text-blue-500 dark:text-green-400" />
            <span>linkedin.com/in/habiburrahman99/</span>
          </div>
        </div>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          {/* Skills */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 dark:text-green-500 mb-2 flex items-center">
              <Code className="w-4 h-4 mr-2" /> SKILLS
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Ethical Hacking</li>
              <li>Network Pentesting</li>
              <li>Web Application Pentesting</li>
              <li>Virtualization</li>
              <li>Firewall</li>
              <li>Splunk</li>
              <li>Cryptography</li>
              <li>Steganography</li>
              <li>Osint</li>
              <li>Digital Forensics</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 dark:text-green-500 mb-2">TOOLS</h3>
            <div className="space-y-2 text-sm">
              <div>
                <div className="flex justify-between">
                  <span>Wireshark</span>
                  <span className="text-blue-500 dark:text-green-400">●●●●●</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Burpsuite</span>
                  <span className="text-blue-500 dark:text-green-400">●●●●●</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Maltego</span>
                  <span className="text-blue-500 dark:text-green-400">●●●●●</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Metasploit</span>
                  <span className="text-blue-500 dark:text-green-400">●●●●●</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Splunk</span>
                  <span className="text-blue-500 dark:text-green-400">●●●●●</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Nessus/Openvas</span>
                  <span className="text-blue-500 dark:text-green-400">●●●●●</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Nmap/Nikto</span>
                  <span className="text-blue-500 dark:text-green-400">●●●●●</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 dark:text-green-500 mb-2 flex items-center">
              <Globe className="w-4 h-4 mr-2" /> LANGUAGES
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-blue-500 dark:text-green-400">●●●●●</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Bangla</span>
                  <span className="text-blue-500 dark:text-green-400">●●●●●</span>
                </div>
              </div>
            </div>
          </div>

          {/* Courses and Trainings */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 dark:text-green-500 mb-2 flex items-center">
              <Book className="w-4 h-4 mr-2" /> COURSES AND TRAININGS
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Windows Privilege Escalation by TCM Security</li>
              <li>Linux Privilege Escalation by TCM Security</li>
              <li>Opensource Intelligence by Basel Institute of Governance</li>
              <li>Ethical Hacking Essentials by Codered EC Council</li>
              <li>And more Coursera, Udemy, Udacity, courses on pentesting, cloud and Linux.</li>
            </ul>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-2 space-y-6">
          {/* Experience */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 dark:text-green-500 mb-2">EXPERIENCE</h3>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <h4 className="font-bold">Internship in Digital Forensics</h4>
                <span className="text-blue-500 dark:text-green-400 text-sm">September 2023 – October 2023</span>
              </div>
              <div className="text-blue-500 dark:text-green-400 mb-2 text-sm">Technohacks Edutech</div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Experience on network testing, forensics by wireshark</li>
                <li>Memory Forensics by WinPMen, FTK Imager, WinDbg.</li>
                <li>Analyze reports and scan files in different file system and Os using Autopsy.</li>
                <li>Analyze the browsing history of a web browser using Firefox Forensics</li>
                <li>
                  Analyze email content using Email Examiner or any other email analysis tools, Recover deleted files
                  from a USB drive using Recuva
                </li>
                <li>Analyze user activity using LastActivityView, Analyze system logs using LogParser</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <h4 className="font-bold">VAPT</h4>
                <span className="text-blue-500 dark:text-green-400 text-sm">September 2022 – March 2023</span>
              </div>
              <div className="text-blue-500 dark:text-green-400 mb-2 text-sm">Blue Team Bangladesh Ltd</div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Experience on network vulnerability scanning penetration testing</li>
                <li>
                  Industrial Application and System scanning with Nessus NetCat, NMAP, Metasploit, HPing, and similar
                  tools set like Qualys.
                </li>
                <li>Analyze scan reports and suggest remediation/mitigation plan</li>
                <li>Keep track of new vulnerabilities on various network and security devices for different vendors</li>
                <li>Audit configuration of Network and Security devices, providing rich client specific reports.</li>
              </ul>
            </div>
          </div>

          {/* Hands-on Lab and CTF */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 dark:text-green-500 mb-2">HANDS ON LAB AND CTF</h3>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <h4 className="font-bold">HackTheBox</h4>
                <span className="text-blue-500 dark:text-green-400 text-sm">December 2020-on</span>
              </div>
              <div className="text-blue-500 dark:text-green-400 mb-2 text-sm">Self-Learning and Practising Lab</div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Learning From HTB Academy</li>
                <li>Machine hacking and path based practising</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-1">CTF</h4>
              <div className="text-blue-500 dark:text-green-400 mb-2 text-sm">
                Tryhacme, OverTheWire, PicoCTF, CyberTalent
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 dark:text-green-500 mb-2 flex items-center">
              <Award className="w-4 h-4 mr-2" /> CERTIFICATIONS
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>CCNA ITNv7 by Cisco Netacad</li>
              <li>Google Cybersecurity</li>
              <li>CWL Certified Cyber Security Analyst [C3SA] from CWLabs Pvt. Ltd.</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 dark:text-green-500 mb-2">EDUCATION</h3>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <h4 className="font-bold">Pursuing BSc in Computer Science Engineering</h4>
                <span className="text-blue-500 dark:text-green-400 text-sm">January 2020 – Present</span>
              </div>
              <div className="text-blue-500 dark:text-green-400 mb-2 text-sm">Islamic University, Bangladesh</div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <h4 className="font-bold">Class 12 - Science</h4>
                <span className="text-blue-500 dark:text-green-400 text-sm">2019</span>
              </div>
              <div className="text-blue-500 dark:text-green-400 mb-2 text-sm">Carmichael College, Rangpur</div>
              <div className="text-sm">GPA 4.67 out of 5</div>
            </div>
          </div>

          {/* Referees */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 dark:text-green-500 mb-2">REFEREES</h3>
            <div className="text-sm">
              <p className="font-bold">Md. Jahangir Alam, OSCP, CISA, PCI QSA</p>
              <p>
                Co-Founder And Chief Operating Officer at EIC | Professional Hacker | Chair, OWASP Bangladesh Chapter |
                Director CISA, ISACA Dhaka Chapter | Adjunct Faculty, DIU | Instructor, MIST Cyber Range | Trainer
              </p>
              <p className="text-blue-500 dark:text-green-400">jahangircsebd@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
