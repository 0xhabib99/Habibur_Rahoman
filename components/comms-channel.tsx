"use client"

import { useState } from "react"
import { MessageSquare, Shield, Globe, Lock, ExternalLink, Mail, Key } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ScanEffect from "./scan-effect"

export default function CommsChannel() {
  const [activeTab, setActiveTab] = useState("secure")

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden flex flex-col h-[600px] relative">
      <ScanEffect />

      <div className="bg-gray-800 px-4 py-2 flex items-center relative z-20">
        <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
        <div className="text-gray-200 text-sm flex-1">Communications Channel</div>
      </div>

      <Tabs defaultValue="secure" className="flex-1 flex flex-col" onValueChange={setActiveTab}>
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 relative z-20">
          <TabsList className="grid grid-cols-2 bg-gray-900">
            <TabsTrigger value="secure" className="data-[state=active]:bg-blue-600">
              <Shield className="w-4 h-4 mr-2" /> Secure Channels
            </TabsTrigger>
            <TabsTrigger value="social" className="data-[state=active]:bg-blue-600">
              <Globe className="w-4 h-4 mr-2" /> Social Networks
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 overflow-y-auto p-6 relative z-20">
          <TabsContent value="secure" className="mt-0 h-full">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-blue-400 mb-4">SECURE COMMUNICATION CHANNELS</h2>

              {/* PGP Key */}
              <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <Key className="w-5 h-5 text-green-500 mr-2 group-hover:text-green-400 group-hover:scale-110 transition-all duration-300" />
                  <h3 className="text-lg font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                    PGP Encryption
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  For secure communications, you can use my PGP public key to encrypt your messages.
                </p>
                <div className="bg-gray-800 p-3 rounded border border-gray-700 font-mono text-xs text-gray-300 mb-3 overflow-x-auto group-hover:border-green-700 group-hover:text-green-200 transition-all duration-300">
                  <pre className="group-hover:text-green-300 transition-colors duration-300">
                    -----BEGIN PGP PUBLIC KEY BLOCK-----
                    <br />
                    mQINBGJHvl4BEADJQqSQp+Hs0/tL/XFqRvA2Qp/Cc7Rn+wZBWEgXrQkAjUxl
                    <br />
                    KUBCnj5M5Jz7jW3Ynm/jcxlRK/7uUKBiGCbZFJdpr0Jxkr0NqWZ+Xn7Qw9qa
                    <br />
                    ...
                    <br />
                    =ABCD
                    <br />
                    -----END PGP PUBLIC KEY BLOCK-----
                  </pre>
                </div>
                <div className="flex justify-end">
                  <button className="bg-gray-800 hover:bg-green-700 text-blue-400 hover:text-white px-3 py-1 rounded-md text-sm flex items-center transition-colors duration-300">
                    <Lock className="w-4 h-4 mr-1" /> Copy PGP Key
                  </button>
                </div>
              </div>

              {/* Secure Email */}
              <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <Mail className="w-5 h-5 text-blue-500 mr-2 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                  <h3 className="text-lg font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                    Encrypted Email
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  Contact me via encrypted email for sensitive communications.
                </p>
                <div className="bg-gray-800 p-3 rounded border border-gray-700 flex items-center justify-between group-hover:border-blue-700 transition-all duration-300">
                  <span className="font-mono text-gray-300 group-hover:text-blue-200 transition-colors duration-300">
                    secure@habibur.com
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Signal */}
              <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <Shield className="w-5 h-5 text-purple-500 mr-2 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
                  <h3 className="text-lg font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                    Signal Messenger
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  For end-to-end encrypted messaging, you can reach me on Signal.
                </p>
                <div className="bg-gray-800 p-3 rounded border border-gray-700 flex items-center justify-between group-hover:border-purple-700 transition-all duration-300">
                  <span className="font-mono text-gray-300 group-hover:text-purple-200 transition-colors duration-300">
                    Signal: @habibur_security
                  </span>
                  <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                    Connect
                  </div>
                </div>
              </div>

              {/* Matrix */}
              <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <MessageSquare className="w-5 h-5 text-green-500 mr-2 group-hover:text-green-400 group-hover:scale-110 transition-all duration-300" />
                  <h3 className="text-lg font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                    Matrix
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  Connect with me on Matrix for secure, decentralized communications.
                </p>
                <div className="bg-gray-800 p-3 rounded border border-gray-700 flex items-center justify-between group-hover:border-green-700 transition-all duration-300">
                  <span className="font-mono text-gray-300 group-hover:text-green-200 transition-colors duration-300">
                    @habibur:matrix.org
                  </span>
                  <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                    Connect
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="social" className="mt-0 h-full">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-blue-400 mb-4">SOCIAL NETWORKS & PROFESSIONAL PROFILES</h2>

              {/* GitHub */}
              <div className="group border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-700 group-hover:scale-105 transition-all duration-300">
                      <svg
                        className="w-8 h-8 text-white group-hover:text-blue-200 transition-colors duration-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                        GitHub
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        @habibur-security
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="bg-gray-800 group-hover:bg-blue-600 text-white px-3 py-1 rounded text-sm flex items-center transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> View Profile
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="group border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-700 group-hover:scale-105 transition-all duration-300">
                      <svg
                        className="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                        LinkedIn
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        Habibur Rahman
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="bg-gray-800 group-hover:bg-blue-600 text-white px-3 py-1 rounded text-sm flex items-center transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Connect
                  </a>
                </div>
              </div>

              {/* Twitter */}
              <div className="group border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-700 group-hover:scale-105 transition-all duration-300">
                      <svg
                        className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                        Twitter
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        @habibur_sec
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="bg-gray-800 group-hover:bg-blue-600 text-white px-3 py-1 rounded text-sm flex items-center transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Follow
                  </a>
                </div>
              </div>

              {/* HackTheBox */}
              <div className="group border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-700 group-hover:scale-105 transition-all duration-300">
                      <div className="w-8 h-8 bg-green-500 flex items-center justify-center text-black font-bold group-hover:bg-green-400 transition-colors duration-300">
                        HTB
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                        HackTheBox
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        Pro Hacker | Rank: Elite
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="bg-gray-800 group-hover:bg-green-600 text-white px-3 py-1 rounded text-sm flex items-center transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> View Profile
                  </a>
                </div>
              </div>

              {/* TryHackMe */}
              <div className="group border border-gray-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-700 group-hover:scale-105 transition-all duration-300">
                      <div className="w-8 h-8 bg-red-500 flex items-center justify-center text-white font-bold group-hover:bg-red-400 transition-colors duration-300">
                        THM
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-500 group-hover:text-yellow-400 group-hover:shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-300">
                        TryHackMe
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        Top 1% | 250+ Rooms Completed
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="bg-gray-800 group-hover:bg-red-600 text-white px-3 py-1 rounded text-sm flex items-center transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> View Profile
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
