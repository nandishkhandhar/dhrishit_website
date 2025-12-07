'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Community() {
  const [timeAndTideOpen, setTimeAndTideOpen] = useState(false);
  const [greytoGrowOpen, setGreytoGrowOpen] = useState(false);
  const [greytoGrowPdfOpen, setGreytoGrowPdfOpen] = useState(false);
  const [saakshatraOpen, setSaakshatraOpen] = useState(false);
  const [saakshatraPdfOpen, setSaakshatraPdfOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">🌱</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Community Connect
            </h1>
            <p className="text-lg text-gray-600">
              Building connections through biology education and community outreach
            </p>
          </div>

          <div className="space-y-12">
            {/* GreytoGrow - 2025 */}
            <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setGreytoGrowOpen(!greytoGrowOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-teal-300/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image src="/greylogo.png" alt="GreytoGrow Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 text-left">
                      Project GreytoGrow: Wetland-Inspired Water Purification
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Founder</span>
                    <span className="bg-amber-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">🏆 Earth Prize Asian Scholar Award</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">2025</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${greytoGrowOpen ? 'rotate-180' : ''}`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {greytoGrowOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-teal-50/50 rounded-xl p-6 border-l-4 border-teal-400">
                      <p className="text-gray-700 leading-relaxed text-base">
                        Created a
                        <span className="font-semibold text-teal-700"> 3-step prototype</span> to purify and reuse greywater, inspired by wetland ecosystems,
                        designed to purify greywater for
                        <span className="font-semibold text-teal-700"> low income communities</span> in my locality. Trained
                        <span className="font-semibold text-teal-700"> 100+ children</span> from the Saaksharta Foundation to implement the system through workshops and by distributing
                        kits and manuals. Won the
                        <span className="font-semibold text-teal-700"> Earth Prize award</span> for this project.
                      </p>
                    </div>

                    <div className="mt-6">
                      <button
                        onClick={() => setGreytoGrowPdfOpen(!greytoGrowPdfOpen)}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-2 border-teal-400/30"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>View Project Report</span>
                        <div className={`transform transition-all duration-300 ${greytoGrowPdfOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {greytoGrowPdfOpen && (
                        <div className="mt-4 rounded-lg overflow-hidden shadow-xl border-2 border-teal-200/30">
                          <div className="w-full h-screen max-h-[800px]">
                            <iframe
                              src="/greytogrowreport.pdf#toolbar=0&navpanes=0&scrollbar=0"
                              className="w-full h-full border-0"
                              title="GreytoGrow Project Report"
                              style={{
                                display: 'block',
                                background: 'white',
                                border: 'none',
                                outline: 'none'
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-8">
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6 border border-teal-200/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">🎬</span>
                    </div>
                    <h4 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                      Project Showcase & Gallery
                    </h4>
                  </div>

                  <div className="space-y-8">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                      <iframe
                        src="https://drive.google.com/file/d/10GfrswQ6uetxiVLicERIn67OJ7P_liOW/preview"
                        className="w-full aspect-video"
                        allow="fullscreen"
                        allowFullScreen
                        title="GreyToGrow Project Video"
                      ></iframe>
                    </div>

                    <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
                      <iframe
                        src="https://www.youtube.com/embed/zCO0msrFwkU"
                        className="w-full aspect-video border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="GreyToGrow YouTube Video"
                      ></iframe>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                          <Image src="/e1.jpeg" alt="GreytoGrow Project Image 1" fill className="object-contain" />
                        </div>
                        <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                          <Image src="/e2.jpeg" alt="GreytoGrow Project Image 2" fill className="object-contain" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                          <Image src="/e3.jpeg" alt="GreytoGrow Project Image 3" fill className="object-contain" />
                        </div>
                        <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                          <Image src="/e4.jpeg" alt="GreytoGrow Project Image 4" fill className="object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Time and Tide - 2024 */}
            <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setTimeAndTideOpen(!timeAndTideOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-teal-300/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image src="/timeandtidelogo.jpeg" alt="Time and Tide Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 text-left">
                      Time and Tide: Marine Awareness Initiative
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Marine Conservation Initiative</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Founder</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">2024 onwards</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${timeAndTideOpen ? 'rotate-180' : ''}`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {timeAndTideOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-teal-50/50 rounded-xl p-6 border-l-4 border-teal-400">
                      <p className="text-gray-700 leading-relaxed text-base">
                        Time and Tide is an organisation created in hopes to spark passion about the
                        <span className="font-semibold text-teal-700"> unique biodiversity of Mumbai</span> in young marine enthusiasts. Bringing light to the ecosystems that thrive in such environments is vital for their conservation and maintenance for future generations. My goal is to help bridge the gap between
                        <span className="font-semibold text-teal-700"> Mumbai&apos;s hidden life and public awareness</span>. Through Time and Tide, I also aim to uncover our life-teeming shores, share and gain knowledge, and connect with others who are passionate about protecting our oceans.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200/50">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🌊</span>
                        </div>
                        <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          Marine Life Gallery
                        </h4>
                      </div>

                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                            <Image src="/r2.jpeg" alt="Time and Tide Marine Life 2" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                            <Image src="/r3.jpeg" alt="Time and Tide Marine Life 3" fill className="object-cover" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                            <Image src="/r4.jpeg" alt="Time and Tide Marine Life 4" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                            <Image src="/r5.jpeg" alt="Time and Tide Marine Life 5" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                            <Image src="/r6.jpeg" alt="Time and Tide Marine Life 6" fill className="object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Saakshatra Foundation - 2024 */}
            <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setSaakshatraOpen(!saakshatraOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-teal-300/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image src="/saakshartalogo.jpg" alt="Saaksharta Foundation Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 text-left">
                      Saaksharta Foundation: Science Education Volunteer
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Saaksharta Foundation</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Volunteer Educator</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">2024 onwards</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${saakshatraOpen ? 'rotate-180' : ''}`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {saakshatraOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-teal-50/50 rounded-xl p-6 border-l-4 border-teal-400 mb-6">
                      <p className="text-gray-700 leading-relaxed text-base">
                        Volunteer at
                        <span className="font-semibold text-teal-700"> Saaksharta Foundation</span>, a Mumbai-based non-profit NGO inclined towards bettering lives
                        of the underprivileged community. Teaching science to
                        <span className="font-semibold text-teal-700"> 40+ Grade 7 students</span> through creative experiments
                        and hands-on learning. Introduced
                        <span className="font-semibold text-teal-700"> marine conservation</span> through intertidal walks and shared the
                        award-winning GreytoGrow project with students and their families.
                      </p>
                    </div>

                    <div className="mt-6">
                      <button
                        onClick={() => setSaakshatraPdfOpen(!saakshatraPdfOpen)}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-2 border-cyan-400/30"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>View Volunteer Reflection</span>
                        <div className={`transform transition-all duration-300 ${saakshatraPdfOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {saakshatraPdfOpen && (
                        <div className="mt-4 rounded-lg overflow-hidden shadow-xl border-2 border-cyan-200/30">
                          <div className="w-full h-screen max-h-[800px]">
                            <iframe
                              src="/saaksharta.pdf?v=1#toolbar=0&navpanes=0&scrollbar=0"
                              className="w-full h-full border-0"
                              title="Saaksharta Foundation Volunteer Reflection"
                              style={{
                                display: 'block',
                                background: 'white',
                                border: 'none',
                                outline: 'none'
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">📸</span>
                    </div>
                    <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      Teaching Gallery
                    </h4>
                  </div>

                  <div className="space-y-6">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100">
                      <video
                        controls
                        muted
                        loop
                        className="w-full h-full object-cover"
                        preload="metadata"
                      >
                        <source src="/s5.mp4" type="video/mp4" />
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center p-4">
                            <p className="text-gray-600 mb-2">Video preview not available</p>
                            <a href="/s5.mp4" className="text-cyan-600 hover:text-cyan-500 underline">
                              Download video
                            </a>
                          </div>
                        </div>
                      </video>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Image src="/s1.jpeg" alt="Teaching Science at Saaksharta Foundation 1" fill className="object-contain" />
                      </div>
                      <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Image src="/s2.jpeg" alt="Teaching Science at Saaksharta Foundation 2" fill className="object-contain" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Image src="/s3.jpeg" alt="Teaching Science at Saaksharta Foundation 3" fill className="object-contain" />
                      </div>
                      <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Image src="/s4.jpeg" alt="Teaching Science at Saaksharta Foundation 4" fill className="object-contain" />
                      </div>
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
