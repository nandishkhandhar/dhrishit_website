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
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">💼</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Internships
            </h1>
            <p className="text-lg text-gray-600">
              Diverse experience spanning urban ecology, marine conservation, and microbiome research across India&apos;s leading environmental organizations
            </p>
          </div>

          <div className="space-y-12">
            {/* Coastal Impact - 2025 */}
            <div className="bg-gradient-to-br from-white via-teal-50/30 to-white backdrop-blur-sm rounded-2xl shadow-xl border border-teal-200/60 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setCoastalImpactOpen(!coastalImpactOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-teal-50/80 hover:to-teal-100/40 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image src="/coastalimpactlogo.jpeg" alt="Coastal Impact Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent text-left">
                      Coastal Impact NGO Goa: Marine Research
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm">Marine Research Intern</span>
                    <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm">Summer 2025</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${coastalImpactOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-cyan-200 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {coastalImpactOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-teal-200 via-cyan-400 to-teal-200 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-gradient-to-r from-teal-50/50 via-cyan-50/50 to-blue-50/50 rounded-xl p-6 border-l-4 border-teal-500">
                      <p className="text-gray-800 leading-relaxed text-base">
                        Interned at
                        <span className="font-semibold text-teal-700"> Coastal Impact NGO</span> (established 2009) which studies and monitors India&apos;s marine ecosystems, supporting awareness, outreach, research, and conservation initiatives.
                        Conducted
                        <span className="font-semibold text-teal-700"> coral restoration data analysis</span>,
                        <span className="font-semibold text-teal-700"> benthic composition surveys</span>, and
                        <span className="font-semibold text-teal-700"> coral microfragmentation research</span> using CPCe software and AI platforms.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200/50">
                        <p className="text-xs text-teal-600 uppercase tracking-wide mb-1">Focus Area</p>
                        <p className="text-sm font-bold text-gray-800">Marine Biology</p>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200/50">
                        <p className="text-xs text-cyan-600 uppercase tracking-wide mb-1">Specialty</p>
                        <p className="text-sm font-bold text-gray-800">Coral Restoration</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
                        <p className="text-xs text-blue-600 uppercase tracking-wide mb-1">Research Type</p>
                        <p className="text-sm font-bold text-gray-800">Coastal Ecology</p>
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
                        <div className="mt-4 rounded-lg overflow-hidden shadow-xl border-2 border-teal-200/30">
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

            {/* MiBiome - 2025 */}
            <div className="bg-gradient-to-br from-white via-purple-50/30 to-white backdrop-blur-sm rounded-2xl shadow-xl border border-purple-200/60 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setMiBiomeOpen(!miBiomeOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-purple-50/80 hover:to-purple-100/40 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image src="/mibiomelogo.jpeg" alt="MiBiome Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-purple-700 to-violet-600 bg-clip-text text-transparent text-left">
                      MiBiome Lab Mumbai: Genomics Research
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Research Assistant</span>
                    <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded text-sm">Summer 2025</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${miBiomeOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-violet-200 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {miBiomeOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-purple-200 via-violet-400 to-purple-200 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-gradient-to-r from-purple-50/50 via-violet-50/50 to-fuchsia-50/50 rounded-xl p-6 border-l-4 border-purple-500">
                      <p className="text-gray-800 leading-relaxed text-base">
                        <span className="font-semibold text-purple-700">MiBiome</span> develops cutting-edge genomics technologies to democratize genetic research and advance precision medicine.
                        Gained expertise in
                        <span className="font-semibold text-purple-700"> DNA sequencing methodologies</span> including
                        <span className="font-semibold text-purple-700"> Sanger sequencing</span> and next-generation
                        <span className="font-semibold text-purple-700"> Illumina sequencing techniques</span>.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-200/50">
                        <p className="text-xs text-purple-600 uppercase tracking-wide mb-1">Focus Area</p>
                        <p className="text-sm font-bold text-gray-800">Microbiome Research</p>
                      </div>
                      <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-xl p-4 border border-violet-200/50">
                        <p className="text-xs text-violet-600 uppercase tracking-wide mb-1">Specialty</p>
                        <p className="text-sm font-bold text-gray-800">Bioinformatics</p>
                      </div>
                      <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-xl p-4 border border-fuchsia-200/50">
                        <p className="text-xs text-fuchsia-600 uppercase tracking-wide mb-1">Research Type</p>
                        <p className="text-sm font-bold text-gray-800">Molecular Biology</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        onClick={() => setMiBiomePdfOpen(!miBiomePdfOpen)}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-2 border-purple-400/30"
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
                        <div className="mt-4 rounded-lg overflow-hidden shadow-xl border-2 border-cyan-200/30">
                          <div className="w-full h-screen max-h-[800px]">
                            <iframe
                              src="https://view.officeapps.live.com/op/embed.aspx?src=https%3A%2F%2Fdhrishitsanghvi.com%2FMiBiome.pptx"
                              className="w-full h-full border-0"
                              title="MiBiome Research Presentation"
                              allowFullScreen
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

            {/* BNHS - 2023/2024 */}
            <div className="bg-gradient-to-br from-white via-emerald-50/30 to-white backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-200/60 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setBnhsOpen(!bnhsOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-emerald-50/80 hover:to-emerald-100/40 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image src="/bnhslogo.png" alt="BNHS Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent text-left">
                      BNHS Navi Mumbai: Urban Ecology Research
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm">Bombay Natural History Society</span>
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm">Summer 2023/2024</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${bnhsOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {bnhsOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-gradient-to-r from-emerald-50/50 via-teal-50/50 to-cyan-50/50 rounded-xl p-6 border-l-4 border-emerald-500">
                      <p className="text-gray-800 leading-relaxed text-base">
                        Conducted
                        <span className="font-semibold text-emerald-700"> biodiversity surveys and wildlife monitoring</span> in Mumbai&apos;s urban ecosystems.
                        Assisted in research on
                        <span className="font-semibold text-emerald-700"> urban bird populations</span> and their adaptation patterns.
                        Participated in
                        <span className="font-semibold text-emerald-700"> conservation education programs</span> for local communities.
                        Documented flora and fauna species using field identification techniques and contributed to BNHS research database with field observations and data collection.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200/50">
                        <p className="text-xs text-emerald-600 uppercase tracking-wide mb-1">Focus Area</p>
                        <p className="text-sm font-bold text-gray-800">Urban Ecology</p>
                      </div>
                      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200/50">
                        <p className="text-xs text-teal-600 uppercase tracking-wide mb-1">Specialty</p>
                        <p className="text-sm font-bold text-gray-800">Wildlife Conservation</p>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200/50">
                        <p className="text-xs text-cyan-600 uppercase tracking-wide mb-1">Research Type</p>
                        <p className="text-sm font-bold text-gray-800">Biodiversity Monitoring</p>
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
