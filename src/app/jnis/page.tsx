'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function JNIS() {
  const [tagoreCaptainOpen, setTagoreCaptainOpen] = useState(false);
  const [fluidArtOpen, setFluidArtOpen] = useState(false);
  const [artExhibitionOpen, setArtExhibitionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-lg border-4 border-emerald-200">
              <Image src="/jnislogo.jpeg" alt="JNIS Logo" width={80} height={80} className="w-20 h-20 object-contain rounded-full" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Life at JNIS
            </h1>
            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">
              Jamnabai Narsee International School
            </p>
          </div>

          <div className="space-y-12">
            {/* Tagore House Captain */}
            <div className="bg-gradient-to-br from-white via-amber-50/30 to-white dark:from-gray-800/70 dark:via-amber-900/10 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200/60 dark:border-amber-800/40 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setTagoreCaptainOpen(!tagoreCaptainOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-amber-50/80 hover:to-amber-100/40 dark:hover:from-amber-900/30 dark:hover:to-amber-800/20 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 dark:from-amber-300 dark:to-yellow-300 bg-clip-text text-transparent text-left">
                      Tagore House Captain
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-2 py-1 rounded text-sm">Leadership Role</span>
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">2023 - Present</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${tagoreCaptainOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-yellow-200 dark:from-amber-800/60 dark:to-yellow-700/40 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {tagoreCaptainOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 dark:from-amber-800 dark:via-amber-600 dark:to-amber-800 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-gradient-to-r from-amber-50/50 via-yellow-50/50 to-orange-50/50 dark:from-amber-900/10 dark:via-yellow-900/10 dark:to-orange-900/10 rounded-xl p-6 border-l-4 border-amber-500">
                      <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base">
                        Leading the
                        <span className="font-semibold text-amber-700 dark:text-amber-400"> JNIS Tagore House</span> with responsibilities including
                        <span className="font-semibold text-amber-700 dark:text-amber-400"> organizing scientific events</span>,
                        coordinating research collaborations,
                        <span className="font-semibold text-amber-700 dark:text-amber-400"> mentoring junior members</span>, and representing the society
                        in inter-institutional academic competitions and conferences.
                      </p>
                    </div>

                    <div className="max-w-xl mx-auto border-2 border-amber-200 dark:border-amber-600 rounded-lg overflow-hidden bg-white shadow-lg">
                      <Image src="/tagorecaptain.jpg" alt="Tagore Captain Certificate" width={500} height={375} className="w-full h-auto object-contain" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Fluid Art Instructor */}
            <div className="bg-gradient-to-br from-white via-teal-50/30 to-white dark:from-gray-800/70 dark:via-teal-900/10 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-200/60 dark:border-teal-800/40 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setFluidArtOpen(!fluidArtOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-teal-50/80 hover:to-teal-100/40 dark:hover:from-teal-900/30 dark:hover:to-teal-800/20 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 dark:from-teal-300 dark:to-cyan-300 bg-clip-text text-transparent text-left">
                      Fluid Art Instructor: School Fair
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-sm">Workshop Leader</span>
                    <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 px-2 py-1 rounded text-sm">2023</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${fluidArtOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-800/60 dark:to-cyan-700/40 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {fluidArtOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-teal-200 via-cyan-400 to-teal-200 dark:from-teal-800 dark:via-cyan-600 dark:to-teal-800 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-gradient-to-r from-teal-50/50 via-cyan-50/50 to-blue-50/50 dark:from-teal-900/10 dark:via-cyan-900/10 dark:to-blue-900/10 rounded-xl p-6 border-l-4 border-teal-500">
                      <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base">
                        Designed and conducted
                        <span className="font-semibold text-teal-700 dark:text-teal-400"> fluid art workshops</span> for children, teaching
                        <span className="font-semibold text-teal-700 dark:text-teal-400"> over 100+ kids</span> various art techniques
                        including
                        <span className="font-semibold text-teal-700 dark:text-teal-400"> acrylic pouring</span>, color mixing, and creative expression.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-teal-200/50 dark:border-teal-700/30">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🎨</span>
                        </div>
                        <h4 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                          Workshop Gallery
                        </h4>
                      </div>

                      <div className="space-y-8">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-700">
                          <video
                            controls
                            muted
                            loop
                            className="w-full h-full object-cover"
                            preload="metadata"
                          >
                            <source src="/fluid-art/C9A2AC6C-27B7-4C8A-BBE2-72D8C55B24C3.mov" type="video/mp4" />
                            <source src="/fluid-art/C9A2AC6C-27B7-4C8A-BBE2-72D8C55B24C3.mov" type="video/quicktime" />
                            <div className="flex items-center justify-center h-full">
                              <div className="text-center p-4">
                                <p className="text-gray-600 dark:text-gray-300 mb-2">Video preview not available</p>
                                <a href="/fluid-art/C9A2AC6C-27B7-4C8A-BBE2-72D8C55B24C3.mov" className="text-teal-600 hover:text-teal-500 underline">
                                  Download video
                                </a>
                              </div>
                            </div>
                          </video>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/2C89381E-D1C2-47AE-85DA-479B48A032DF.jpg" alt="Fluid Art Workshop 1" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/431641C2-C013-423B-9570-1DA8D787D720.jpg" alt="Fluid Art Workshop 2" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/6370B38E-B927-4953-92F2-199473500A68.jpg" alt="Fluid Art Workshop 3" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/78DB3126-00F5-4F7D-861D-4F31938BE62C.jpg" alt="Fluid Art Workshop 4" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/9924CA00-B8DB-411B-9469-1D0227D79F29.jpg" alt="Fluid Art Workshop 5" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/A88DC2A4-46A5-4A3E-85C1-3719B1B0CB19.jpg" alt="Fluid Art Workshop 6" fill className="object-cover" />
                          </div>
                        </div>

                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-700">
                          <video
                            controls
                            muted
                            loop
                            className="w-full h-full object-cover"
                            preload="metadata"
                          >
                            <source src="/fluid-art/310F4EE6-1CBF-4653-80F4-709344CECC3C.mov" type="video/mp4" />
                            <source src="/fluid-art/310F4EE6-1CBF-4653-80F4-709344CECC3C.mov" type="video/quicktime" />
                            <div className="flex items-center justify-center h-full">
                              <div className="text-center p-4">
                                <p className="text-gray-600 dark:text-gray-300 mb-2">Video preview not available</p>
                                <a href="/fluid-art/310F4EE6-1CBF-4653-80F4-709344CECC3C.mov" className="text-teal-600 hover:text-teal-500 underline">
                                  Download video
                                </a>
                              </div>
                            </div>
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Art & Photography Exhibition */}
            <div className="bg-gradient-to-br from-white via-indigo-50/30 to-white dark:from-gray-800/70 dark:via-indigo-900/10 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-200/60 dark:border-indigo-800/40 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setArtExhibitionOpen(!artExhibitionOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-indigo-50/80 hover:to-indigo-100/40 dark:hover:from-indigo-900/30 dark:hover:to-indigo-800/20 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-700 to-blue-600 dark:from-indigo-300 dark:to-blue-300 bg-clip-text text-transparent text-left">
                      Art & Photography Exhibition
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-sm">Curator & Artist</span>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">Annual Event 2024</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${artExhibitionOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-indigo-800/60 dark:to-blue-700/40 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {artExhibitionOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 dark:from-indigo-800 dark:via-indigo-600 dark:to-indigo-800 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-gradient-to-r from-indigo-50/50 via-blue-50/50 to-purple-50/50 dark:from-indigo-900/10 dark:via-blue-900/10 dark:to-purple-900/10 rounded-xl p-6 border-l-4 border-indigo-500">
                      <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base">
                        Organized and curated exhibitions showcasing
                        <span className="font-semibold text-indigo-700 dark:text-indigo-400"> scientific art and nature photography</span>.
                        Successfully sold
                        <span className="font-semibold text-indigo-700 dark:text-indigo-400"> 15+ pieces</span> featuring marine life illustrations and underwater photography,
                        with proceeds supporting
                        <span className="font-semibold text-indigo-700 dark:text-indigo-400"> JNIS educational initiatives and conservation projects</span>.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-indigo-200/50 dark:border-indigo-700/30">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🎨</span>
                        </div>
                        <h4 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                          Exhibition Gallery
                        </h4>
                      </div>

                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/artex/a1.jpg" alt="Art Exhibition Piece 1" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/artex/a2.jpg" alt="Art Exhibition Piece 2" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/artex/a3.jpg" alt="Art Exhibition Piece 3" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/artex/a4.jpg" alt="Art Exhibition Piece 4" fill className="object-cover" />
                          </div>
                        </div>

                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto max-w-md">
                          <Image src="/artex/poster.jpeg" alt="Art Exhibition Poster" fill className="object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
