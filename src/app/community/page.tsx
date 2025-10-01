'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Community() {
  const [greytoGrowOpen, setGreytoGrowOpen] = useState(false);
  const [saakshatraOpen, setSaakshatraOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">🌱</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Community Connect
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Building connections through biology education and community outreach
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Time and Tide</h3>
                  <p className="text-emerald-600 dark:text-emerald-400">Marine Conservation Initiative</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Led community awareness campaigns about tidal patterns and their impact on coastal ecosystems. 
                Organized beach clean-up drives and educated local communities about marine conservation, 
                reaching over 200 participants across coastal areas.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image src="/greylogo.png" alt="GreytoGrow Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Project GreytoGrow</h3>
                  <p className="text-teal-600 dark:text-teal-400">Founder • 🏆 Earth Prize Asian Scholar Award Winner • 2025</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Created a 3-step prototype to purify and reuse greywater, inspired by wetland ecosystems, 
                designed to purify greywater for low income communities in my locality. Trained 100+ children 
                from the Saaksharta Foundation to implement the system through workshops and by distributing 
                kits and manuals. Won the Earth Prize award for this project.
              </p>
              
              <div className="mt-6">
                <button
                  onClick={() => setGreytoGrowOpen(!greytoGrowOpen)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-2 border-teal-400/30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>View Project Report</span>
                  <div className={`transform transition-all duration-300 ${greytoGrowOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {greytoGrowOpen && (
                  <div className="mt-4">
                    <div className="rounded-lg overflow-hidden shadow-xl border-2 border-teal-200/30 dark:border-teal-700/30">
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
                  </div>
                )}
              </div>
              
              <div className="mt-8">
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-teal-200/50 dark:border-teal-700/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">🎬</span>
                    </div>
                    <h4 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                      Project Showcase & Gallery
                    </h4>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 bg-black">
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

            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image src="/saakshartalogo.jpg" alt="Saaksharta Foundation Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Teaching Volunteer</h3>
                  <p className="text-cyan-600 dark:text-cyan-400">Saaksharta Foundation</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Volunteer at Saaksharta Foundation, a Mumbai-based non-profit NGO inclined towards bettering lives 
                of the underprivileged community. Teaching science to 40+ Grade 7 students through creative experiments 
                and hands-on learning. Introduced marine conservation through intertidal walks and shared the 
                award-winning GreytoGrow project with students and their families.
              </p>
              
              <div className="mt-6">
                <button
                  onClick={() => setSaakshatraOpen(!saakshatraOpen)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-2 border-cyan-400/30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>View Volunteer Reflection</span>
                  <div className={`transform transition-all duration-300 ${saakshatraOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {saakshatraOpen && (
                  <div className="mt-4">
                    <div className="rounded-lg overflow-hidden shadow-xl border-2 border-cyan-200/30 dark:border-cyan-700/30">
                      <div className="w-full h-screen max-h-[800px]">
                        <iframe
                          src="/saaksharta.pdf#toolbar=0&navpanes=0&scrollbar=0"
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
                  </div>
                )}
              </div>
              
              <div className="mt-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-cyan-200/50 dark:border-cyan-700/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">📸</span>
                    </div>
                    <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      Teaching Gallery
                    </h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-700">
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
                            <p className="text-gray-600 dark:text-gray-300 mb-2">Video preview not available</p>
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
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}