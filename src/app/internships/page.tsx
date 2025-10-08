'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Internships() {
  const [bnhsOpen, setBnhsOpen] = useState(false);
  const [coastalImpactOpen, setCoastalImpactOpen] = useState(false);
  const [coastalImpactPdfOpen, setCoastalImpactPdfOpen] = useState(false);
  const [miBiomeOpen, setMiBiomeOpen] = useState(false);
  const [miBiomePdfOpen, setMiBiomePdfOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">💼</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Internships
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Diverse experience spanning urban ecology, marine conservation, and microbiome research across India&apos;s leading environmental organizations
            </p>
          </div>

          <div className="space-y-12">
            {/* BNHS */}
            <div className="bg-gradient-to-br from-white via-emerald-50/30 to-white dark:from-gray-800/70 dark:via-emerald-900/10 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-200/60 dark:border-emerald-800/40 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setBnhsOpen(!bnhsOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-emerald-50/80 hover:to-emerald-100/40 dark:hover:from-emerald-900/30 dark:hover:to-emerald-800/20 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image src="/bnhslogo.png" alt="BNHS Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 dark:from-emerald-300 dark:to-teal-300 bg-clip-text text-transparent text-left">
                      BNHS Navi Mumbai: Urban Ecology Research
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded text-sm">Bombay Natural History Society</span>
                    <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-sm">Summer 2024</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${bnhsOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-800/60 dark:to-emerald-700/40 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {bnhsOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 dark:from-emerald-800 dark:via-emerald-600 dark:to-emerald-800 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-gradient-to-r from-emerald-50/50 via-teal-50/50 to-cyan-50/50 dark:from-emerald-900/10 dark:via-teal-900/10 dark:to-cyan-900/10 rounded-xl p-6 border-l-4 border-emerald-500">
                      <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base">
                        Conducted
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400"> biodiversity surveys and wildlife monitoring</span> in Mumbai&apos;s urban ecosystems.
                        Assisted in research on
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400"> urban bird populations</span> and their adaptation patterns.
                        Participated in
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400"> conservation education programs</span> for local communities.
                        Documented flora and fauna species using field identification techniques and contributed to BNHS research database with field observations and data collection.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-4 border border-emerald-200/50 dark:border-emerald-700/30">
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1">Focus Area</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Urban Ecology</p>
                      </div>
                      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-teal-200/50 dark:border-teal-700/30">
                        <p className="text-xs text-teal-600 dark:text-teal-400 uppercase tracking-wide mb-1">Specialty</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Wildlife Conservation</p>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 border border-cyan-200/50 dark:border-cyan-700/30">
                        <p className="text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-wide mb-1">Research Type</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Biodiversity Monitoring</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Coastal Impact */}
            <div className="bg-gradient-to-br from-white via-teal-50/30 to-white dark:from-gray-800/70 dark:via-teal-900/10 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-200/60 dark:border-teal-800/40 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setCoastalImpactOpen(!coastalImpactOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-teal-50/80 hover:to-teal-100/40 dark:hover:from-teal-900/30 dark:hover:to-teal-800/20 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image src="/coastalimpactlogo.jpeg" alt="Coastal Impact Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 dark:from-teal-300 dark:to-cyan-300 bg-clip-text text-transparent text-left">
                      Coastal Impact NGO Goa: Marine Research
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-sm">Marine Research Intern</span>
                    <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 px-2 py-1 rounded text-sm">Summer 2025</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${coastalImpactOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-800/60 dark:to-cyan-700/40 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {coastalImpactOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-teal-200 via-cyan-400 to-teal-200 dark:from-teal-800 dark:via-cyan-600 dark:to-teal-800 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-gradient-to-r from-teal-50/50 via-cyan-50/50 to-blue-50/50 dark:from-teal-900/10 dark:via-cyan-900/10 dark:to-blue-900/10 rounded-xl p-6 border-l-4 border-teal-500">
                      <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base">
                        Interned at
                        <span className="font-semibold text-teal-700 dark:text-teal-400"> Coastal Impact NGO</span> (established 2009) which studies and monitors India&apos;s marine ecosystems, supporting awareness, outreach, research, and conservation initiatives.
                        Conducted
                        <span className="font-semibold text-teal-700 dark:text-teal-400"> coral restoration data analysis</span>,
                        <span className="font-semibold text-teal-700 dark:text-teal-400"> benthic composition surveys</span>, and
                        <span className="font-semibold text-teal-700 dark:text-teal-400"> coral microfragmentation research</span> using CPCe software and AI platforms.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-teal-200/50 dark:border-teal-700/30">
                        <p className="text-xs text-teal-600 dark:text-teal-400 uppercase tracking-wide mb-1">Focus Area</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Marine Biology</p>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 border border-cyan-200/50 dark:border-cyan-700/30">
                        <p className="text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-wide mb-1">Specialty</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Coral Restoration</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200/50 dark:border-blue-700/30">
                        <p className="text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">Research Type</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Coastal Ecology</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        onClick={() => setCoastalImpactPdfOpen(!coastalImpactPdfOpen)}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-2 border-teal-400/30"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>View Internship Certificate and Report</span>
                        <div className={`transform transition-all duration-300 ${coastalImpactPdfOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {coastalImpactPdfOpen && (
                        <div className="mt-4 rounded-lg overflow-hidden shadow-xl border-2 border-teal-200/30 dark:border-teal-700/30">
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
                </>
              )}
            </div>

            {/* MiBiome */}
            <div className="bg-gradient-to-br from-white via-cyan-50/30 to-white dark:from-gray-800/70 dark:via-cyan-900/10 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-200/60 dark:border-cyan-800/40 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setMiBiomeOpen(!miBiomeOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-cyan-50/80 hover:to-cyan-100/40 dark:hover:from-cyan-900/30 dark:hover:to-cyan-800/20 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image src="/mibiomelogo.jpeg" alt="MiBiome Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-700 to-blue-600 dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent text-left">
                      MiBiome Lab Mumbai: Genomics Research
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 px-2 py-1 rounded text-sm">Research Assistant</span>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">Summer 2025</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${miBiomeOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-blue-200 dark:from-cyan-800/60 dark:to-blue-700/40 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {miBiomeOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-cyan-200 via-blue-400 to-cyan-200 dark:from-cyan-800 dark:via-blue-600 dark:to-cyan-800 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-gradient-to-r from-cyan-50/50 via-blue-50/50 to-indigo-50/50 dark:from-cyan-900/10 dark:via-blue-900/10 dark:to-indigo-900/10 rounded-xl p-6 border-l-4 border-cyan-500">
                      <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base">
                        <span className="font-semibold text-cyan-700 dark:text-cyan-400">MiBiome</span> develops cutting-edge genomics technologies to democratize genetic research and advance precision medicine.
                        Gained expertise in
                        <span className="font-semibold text-cyan-700 dark:text-cyan-400"> DNA sequencing methodologies</span> including
                        <span className="font-semibold text-cyan-700 dark:text-cyan-400"> Sanger sequencing</span> and next-generation
                        <span className="font-semibold text-cyan-700 dark:text-cyan-400"> Illumina sequencing techniques</span>.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 border border-cyan-200/50 dark:border-cyan-700/30">
                        <p className="text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-wide mb-1">Focus Area</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Microbiome Research</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200/50 dark:border-blue-700/30">
                        <p className="text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">Specialty</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Bioinformatics</p>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-indigo-200/50 dark:border-indigo-700/30">
                        <p className="text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-1">Research Type</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Molecular Biology</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        onClick={() => setMiBiomePdfOpen(!miBiomePdfOpen)}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-2 border-cyan-400/30"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>View Research Presentation</span>
                        <div className={`transform transition-all duration-300 ${miBiomePdfOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {miBiomePdfOpen && (
                        <div className="mt-4 rounded-lg overflow-hidden shadow-xl border-2 border-cyan-200/30 dark:border-cyan-700/30">
                          <div className="w-full h-screen max-h-[800px]">
                            <iframe
                              src="/MiBiome.pdf"
                              className="w-full h-full border-0"
                              title="MiBiome Research Presentation"
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
