'use client';

import { useState } from 'react';

export default function Research() {
  const [surfactantOpen, setSurfactantOpen] = useState(false);
  const [microfragOpen, setMicrofragOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">🔬</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Research Papers
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Scientific publications and research contributions to biological sciences
            </p>
          </div>

          <div className="space-y-8">
            {/* Published Papers */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Published Research</h2>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-4 border-emerald-500 pl-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        &quot;Evolutionary History of Pulmonary Surfactant Proteins: A Defence Against Fibrosis?&quot;
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                        <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">National High School Journal of Science</span> • <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">Under Review</span> • <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">🏆 S.T. Yau Competition</span> • <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">2025</span>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <strong>Mentor:</strong> Dr. Nirupma Singh (PhD in Bioinformatics, University of Delhi)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Independent Research Paper analyzing how the evolutionary history of pulmonary surfactant proteins 
                        in vertebrates affects prevention and susceptibility to lung fibrosis. Participated in the S.T. Yau 
                        Competition and qualified for the first round. Submitted the research paper for publication to the 
                        National High School Journal of Science.
                      </p>
                      
                      <div className="mt-6">
                        <button
                          onClick={() => setSurfactantOpen(!surfactantOpen)}
                          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-2 border-emerald-400/30"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>View Research Paper</span>
                          <div className={`transform transition-all duration-300 ${surfactantOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                        
                        {surfactantOpen && (
                          <div className="mt-4 space-y-4">
                            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-4 border border-emerald-200/50 dark:border-emerald-700/30">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                      Research Paper
                                    </h4>
                                    <p className="text-sm text-emerald-600 dark:text-emerald-400">Publication • 2025</p>
                                  </div>
                                </div>
                                <a 
                                  href="/microfrag.pdf" 
                                  download 
                                  className="flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  Download PDF
                                </a>
                              </div>
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-xl border-2 border-emerald-200/30 dark:border-emerald-700/30">
                              <div className="w-full h-screen max-h-[800px]">
                                <iframe
                                  src="/microfrag.pdf#toolbar=0&navpanes=0&scrollbar=0"
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
                        )}
                      </div>
                    </div>
                    <div className="lg:w-64 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Highlights</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Analyzed surfactant protein evolution across vertebrates</li>
                        <li>• Identified fibrosis defense mechanisms</li>
                        <li>• Advanced bioinformatics analysis techniques</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        &quot;Microfragmentation as a Coral Reef Restoration Tool: The Role of Genetics, Microbiomes, & Climate Challenge&quot;
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                        <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">International Journal for High School Research</span> • <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">Published</span> • <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">December 2025</span>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <strong>Mentor:</strong> Dr. Prerna Gupta (PhD in Immunology and Virology, Mumbai University)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Analyzed how 4 coral species secrete hormones and enzymes during microfragmentation and how 
                        extreme environmental stress affects their effectiveness. This independent research provides 
                        critical insights into coral restoration techniques and their resilience under climate change 
                        pressures.
                      </p>
                      
                      <div className="mt-6">
                        <button
                          onClick={() => setMicrofragOpen(!microfragOpen)}
                          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] border-2 border-teal-400/30"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>View Research Paper</span>
                          <div className={`transform transition-all duration-300 ${microfragOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                        
                        {microfragOpen && (
                          <div className="mt-4 space-y-4">
                            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-teal-200/50 dark:border-teal-700/30">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                      Research Paper
                                    </h4>
                                    <p className="text-sm text-teal-600 dark:text-teal-400">Publication • December 2025</p>
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
                            <div className="rounded-lg overflow-hidden shadow-xl border-2 border-teal-200/30 dark:border-teal-700/30">
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
                        )}
                      </div>
                    </div>
                    <div className="lg:w-64 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Highlights</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Analyzed 4 coral species responses</li>
                        <li>• Hormone and enzyme secretion patterns</li>
                        <li>• Environmental stress impact assessment</li>
                        <li>• Restoration tool effectiveness evaluation</li>
                      </ul>
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