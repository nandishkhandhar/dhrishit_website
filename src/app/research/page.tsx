'use client';

import { useState } from 'react';

export default function Research() {
  const [surfactantOpen, setSurfactantOpen] = useState(false);
  const [microfragOpen, setMicrofragOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100" style={{ colorScheme: 'light' }}>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full mb-6 shadow-xl">
              <span className="text-3xl">🔬</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Research Papers
            </h1>
            <p className="text-xl font-semibold text-gray-600">
              Scientific publications and research contributions to biological sciences
            </p>
          </div>

          <div className="space-y-12">
            {/* Pulmonary Surfactant Research */}
            <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setSurfactantOpen(!surfactantOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-teal-300/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-2xl">🫁</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 text-left">
                      Evolutionary History of Pulmonary Surfactant Proteins: A Defence Against Fibrosis?
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Submitted for Publication</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">S.T. Yau Competition</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">2025</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${surfactantOpen ? 'rotate-180' : ''}`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {surfactantOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-teal-50/50 rounded-xl p-6 border-l-4 border-teal-400">
                      <p className="text-gray-700 leading-relaxed text-base mb-4">
                        Independent Research Paper analyzing how the evolutionary history of pulmonary surfactant proteins
                        in vertebrates affects prevention and susceptibility to lung fibrosis. Participated in the S.T. Yau
                        Competition and qualified for the first round. Submitted the research paper for publication to the
                        National High School Journal of Science.
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-teal-700">Mentor:</strong> Dr. Nirupma Singh (PhD in Bioinformatics, University of Delhi)
                      </p>
                      <p className="text-gray-700">
                        <strong className="text-teal-700">Journal:</strong> National High School Journal of Science
                      </p>
                    </div>

                    <div className="bg-teal-50/30 rounded-xl p-6 border border-teal-200">
                      <h4 className="text-xl font-bold text-teal-700 mb-4">Research Highlights</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Analyzed surfactant protein evolution across vertebrates</li>
                        <li>• Identified fibrosis defense mechanisms</li>
                        <li>• Advanced bioinformatics analysis techniques</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-4 border-2 border-teal-200 shadow-md mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-teal-700">
                              Research Paper
                            </h4>
                            <p className="text-sm text-teal-600">Publication • 2025</p>
                          </div>
                        </div>
                        <a
                          href="/lungresearch.pdf"
                          download
                          className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download PDF
                        </a>
                      </div>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-xl border-2 border-teal-200">
                      <div className="w-full h-screen max-h-[800px]">
                        <iframe
                          src="/lungresearch.pdf#toolbar=0&navpanes=0&scrollbar=0"
                          className="w-full h-full border-0"
                          title="Surfactant Proteins Research Paper"
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
                </>
              )}
            </div>

            {/* Microfragmentation Research */}
            <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setMicrofragOpen(!microfragOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-teal-300/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-2xl">🪸</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 text-left">
                      Microfragmentation as a Coral Reef Restoration Tool: The Role of Genetics, Microbiomes, & Climate Challenge
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">🏆 British Gold Crest Award</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Published in IJHSR</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">2025</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${microfragOpen ? 'rotate-180' : ''}`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {microfragOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-teal-50/50 rounded-xl p-6 border-l-4 border-teal-400">
                      <p className="text-gray-700 leading-relaxed text-base mb-4">
                        Analyzed how 4 coral species secrete hormones and enzymes during microfragmentation and how
                        extreme environmental stress affects their effectiveness. This independent research provides
                        critical insights into coral restoration techniques and their resilience under climate change
                        pressures. Won the prestigious British Gold Crest Award for this research.
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-teal-700">Mentor:</strong> Pialy Ghanekar (PhD in Immunology and Virology, Mumbai University)
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-teal-700">Journal:</strong> International Journal for High School Research (IJHSR)
                      </p>
                      <p className="text-gray-700">
                        <strong className="text-teal-700">Award:</strong> 🏆 British Gold Crest Award
                      </p>
                    </div>

                    <div className="bg-teal-50/30 rounded-xl p-6 border border-teal-200">
                      <h4 className="text-xl font-bold text-teal-700 mb-4">Research Highlights</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Analyzed 4 coral species responses</li>
                        <li>• Hormone and enzyme secretion patterns</li>
                        <li>• Environmental stress impact assessment</li>
                        <li>• Restoration tool effectiveness evaluation</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-4 border-2 border-teal-200 shadow-md mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-teal-700">
                              Research Paper
                            </h4>
                            <p className="text-sm text-teal-600">Publication • December 2025</p>
                          </div>
                        </div>
                        <a
                          href="/microfrag.pdf"
                          download
                          className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download PDF
                        </a>
                      </div>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-xl border-2 border-teal-200">
                      <div className="w-full h-screen max-h-[800px]">
                        <iframe
                          src="/microfrag.pdf#toolbar=0&navpanes=0&scrollbar=0"
                          className="w-full h-full border-0"
                          title="Microfragmentation Research Paper"
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
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}