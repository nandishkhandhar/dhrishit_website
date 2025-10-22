'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function JNIS() {
  const [tagoreCaptainOpen, setTagoreCaptainOpen] = useState(false);
  const [fluidArtOpen, setFluidArtOpen] = useState(false);
  const [artExhibitionOpen, setArtExhibitionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100" style={{ colorScheme: 'light' }}>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-xl border-4 border-gray-200">
              <Image src="/jnislogo.jpeg" alt="JNIS Logo" width={80} height={80} className="w-20 h-20 object-contain rounded-full" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Life at JNIS
            </h1>
            <p className="text-xl font-semibold text-gray-600 mb-4">
              Jamnabai Narsee International School
            </p>
          </div>

          <div className="space-y-12">
            {/* Art & Photography Exhibition - 2024 */}
            <div className="bg-gradient-to-br from-blue-300 to-blue-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setArtExhibitionOpen(!artExhibitionOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-blue-400/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-blue-900 text-left">
                      Art & Photography Exhibition
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-400 text-blue-900 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Curator & Artist</span>
                    <span className="bg-blue-400 text-blue-900 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Annual Event 2024</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${artExhibitionOpen ? 'rotate-180' : ''}`}>
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {artExhibitionOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-indigo-50/50 rounded-xl p-6 border-l-4 border-indigo-400">
                      <p className="text-gray-700 leading-relaxed text-base">
                        Organized and curated exhibitions showcasing
                        <span className="font-semibold text-indigo-700"> scientific art and nature photography</span>.
                        Successfully sold
                        <span className="font-semibold text-indigo-700"> 15+ pieces</span> featuring marine life illustrations and underwater photography,
                        with proceeds used for creating
                        <span className="font-semibold text-indigo-700"> Project GreytoGrow</span>.
                      </p>
                    </div>

                    <div className="bg-indigo-50/30 rounded-xl p-6 border border-indigo-200">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🎨</span>
                        </div>
                        <h4 className="text-xl font-bold text-indigo-700">
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

            {/* Tagore House Captain - 2023/24 */}
            <div className="bg-gradient-to-br from-amber-300 to-orange-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setTagoreCaptainOpen(!tagoreCaptainOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-amber-300/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-amber-900 text-left">
                      Tagore House Captain
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-amber-400 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Leadership Role</span>
                    <span className="bg-amber-400 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">2023/24</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${tagoreCaptainOpen ? 'rotate-180' : ''}`}>
                  <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {tagoreCaptainOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-amber-50/50 rounded-xl p-6 border-l-4 border-amber-400">
                      <p className="text-gray-700 leading-relaxed text-base">
                        Leading the
                        <span className="font-semibold text-amber-700"> JNIS Tagore House</span> with responsibilities including
                        <span className="font-semibold text-amber-700"> organizing scientific events</span>,
                        coordinating research collaborations,
                        <span className="font-semibold text-amber-700"> mentoring junior members</span>, and representing the society
                        in inter-institutional academic competitions and conferences.
                      </p>
                    </div>

                    <div className="max-w-xl mx-auto border-2 border-amber-200 rounded-lg overflow-hidden bg-white shadow-lg">
                      <Image src="/tagorecaptain.jpg" alt="Tagore Captain Certificate" width={500} height={375} className="w-full h-auto object-contain" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Fluid Art Instructor - 2023 */}
            <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setFluidArtOpen(!fluidArtOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-teal-300/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-teal-900 text-left">
                      Fluid Art Instructor: School Fair
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-teal-300 text-teal-900 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Workshop Leader</span>
                    <span className="bg-teal-300 text-teal-900 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">2023</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${fluidArtOpen ? 'rotate-180' : ''}`}>
                  <div className="w-10 h-10 bg-teal-300 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {fluidArtOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-teal-50/50 rounded-xl p-6 border-l-4 border-teal-400">
                      <p className="text-gray-700 leading-relaxed text-base">
                        Designed and conducted
                        <span className="font-semibold text-teal-700"> fluid art workshops</span> for children, teaching
                        <span className="font-semibold text-teal-700"> over 100+ kids</span> various art techniques
                        including
                        <span className="font-semibold text-teal-700"> acrylic pouring</span>, color mixing, and creative expression.
                      </p>
                    </div>

                    <div className="bg-teal-50/30 rounded-xl p-6 border border-teal-200">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🎨</span>
                        </div>
                        <h4 className="text-xl font-bold text-teal-700">
                          Workshop Gallery
                        </h4>
                      </div>

                      <div className="space-y-8">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100">
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
                                <p className="text-gray-600 mb-2">Video preview not available</p>
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

                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100">
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
                                <p className="text-gray-600 mb-2">Video preview not available</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
