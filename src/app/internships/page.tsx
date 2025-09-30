'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Internships() {
  const [coastalImpactOpen, setCoastalImpactOpen] = useState(false);
  const [miBiomeOpen, setMiBiomeOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">🔬</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Internships & Research Experience
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hands-on experience in biological research and laboratory environments
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Research Intern - BNHS Navi Mumbai
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                    Bombay Natural History Society • Summer 2024
                  </p>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <ul className="space-y-2">
                      <li>Conducted biodiversity surveys and wildlife monitoring in Mumbai&apos;s urban ecosystems</li>
                      <li>Assisted in research on urban bird populations and their adaptation patterns</li>
                      <li>Participated in conservation education programs for local communities</li>
                      <li>Documented flora and fauna species using field identification techniques</li>
                      <li>Contributed to BNHS research database with field observations and data collection</li>
                    </ul>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                      Urban Ecology
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                      Wildlife Conservation
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                      Biodiversity
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Marine Research Intern - Coastal Impact NGO Goa, India
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                    Summer 2025
                  </p>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-3">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>Interned at Coastal Impact NGO (established 2009) - studies and monitors India's marine ecosystems, supporting awareness, outreach, research, and conservation initiatives</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                      Marine Biology
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                      Coastal Ecology
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                      Environmental Impact
                    </span>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      onClick={() => setCoastalImpactOpen(!coastalImpactOpen)}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-2 border-teal-400/30"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>View Internship Certificate and Report</span>
                      <div className={`transform transition-all duration-300 ${coastalImpactOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {coastalImpactOpen && (
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <div className="w-full h-screen max-h-[800px]">
                          <iframe
                            src="/coastalimpact.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            className="w-full h-full border-0"
                            title="Coastal Impact NGO Internship Certificate"
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
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Research Assistant - MiBiome Lab Mumbai
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                    Summer 2025
                  </p>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <ul className="space-y-2">
                      <li>Assisted in coral microbiome research and microbial community analysis</li>
                      <li>Performed DNA extraction and sequencing preparation for microbial samples</li>
                      <li>Analyzed microbiome data using bioinformatics tools and software</li>
                      <li>Maintained sterile laboratory conditions for microbial culture work</li>
                      <li>Contributed to research on coral-microbe interactions and symbiosis</li>
                    </ul>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                      Microbiome
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                      Bioinformatics
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                      Molecular Biology
                    </span>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      onClick={() => setMiBiomeOpen(!miBiomeOpen)}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-2 border-cyan-400/30"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>View Research Presentation</span>
                      <div className={`transform transition-all duration-300 ${miBiomeOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {miBiomeOpen && (
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <div className="w-full h-screen max-h-[800px]">
                          <iframe
                            src={`https://docs.google.com/gview?url=${window.location.origin}/MiBiome.pptx&embedded=true`}
                            className="w-full h-full"
                            title="MiBiome Research Presentation"
                            frameBorder="0"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}