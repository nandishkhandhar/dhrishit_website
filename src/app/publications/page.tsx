'use client';

import { useState } from 'react';

export default function Publications() {
  const [hornbillOpen, setHornbillOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [vinculocaOpen, setVinculocaOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">📚</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Literary Publications
            </h1>
            <p className="text-lg text-gray-600">
              Creative writing and literary contributions exploring the intersection of science and art
            </p>
          </div>

          <div className="space-y-12">
            {/* Hornbill Magazine Article */}
            <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setHornbillOpen(!hornbillOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-teal-300/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-2xl">🤿</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 text-left">
                      Diving Experiences and Marine Biodiversity Observations in the Andaman and Nicobar Islands
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Published in Hornbill Magazine - BNHS</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">June-September 2025</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${hornbillOpen ? 'rotate-180' : ''}`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {hornbillOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-teal-50/50 rounded-xl p-6 border-l-4 border-teal-400">
                      <p className="text-gray-700 leading-relaxed text-base mb-4">
                        Published an article describing diving experiences and marine biodiversity observations in the
                        <span className="font-semibold text-teal-700"> Andaman and Nicobar Islands</span>, providing detailed insights into underwater ecosystems and marine
                        life diversity in this biodiverse archipelago.
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-teal-700">Publisher:</strong> Bombay Natural History Society (BNHS)
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-teal-700">Magazine:</strong> Hornbill Magazine
                      </p>
                      <p className="text-gray-700">
                        <strong className="text-teal-700">Publication:</strong> June-September 2025
                      </p>
                    </div>

                    <div className="bg-teal-50/30 rounded-xl p-6 border border-teal-200">
                      <h4 className="text-xl font-bold text-teal-700 mb-4">Article Highlights</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Detailed diving experiences in Andaman waters</li>
                        <li>• Marine biodiversity observations and documentation</li>
                        <li>• Underwater ecosystem insights</li>
                        <li>• Conservation perspectives on island marine life</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* 100 Feet Under Coffee Table Book */}
            <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setBookOpen(!bookOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-teal-300/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-2xl">📖</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 text-left">
                      100 FEET UNDER–Embracing the Serenity
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Published in Partridge Publishing</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Coffee Table Book</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">2025</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${bookOpen ? 'rotate-180' : ''}`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {bookOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-teal-50/50 rounded-xl p-6 border-l-4 border-teal-400">
                      <p className="text-gray-700 leading-relaxed text-base mb-4">
                        A stunning coffee table book featuring underwater photography captured during trips to
                        <span className="font-semibold text-teal-700"> Bali, Indonesia</span> and the
                        <span className="font-semibold text-teal-700"> Andaman Islands, India</span> (2023-2025). This photographic journey documents
                        marine biodiversity and underwater ecosystems, showcasing the serene beauty found beneath
                        the waves.
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-teal-700">Publisher:</strong> Partridge Publishing
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-teal-700">Type:</strong> Coffee Table Book
                      </p>
                      <p className="text-gray-700">
                        <strong className="text-teal-700">Role:</strong> Photographer
                      </p>
                    </div>

                    <div className="w-full h-screen max-h-[800px] rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src="/100feetunder.pdf"
                        className="w-full h-full border-0"
                        title="100 Feet Under Coffee Table Book"
                        style={{
                          border: 'none',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* The Tale of Vinculoca */}
            <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setVinculocaOpen(!vinculocaOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-teal-300/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-2xl">📘</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 text-left">
                      The Tale of Vinculoca
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">Published in BriBooks</span>
                    <span className="bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-sm">2023</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${vinculocaOpen ? 'rotate-180' : ''}`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {vinculocaOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="bg-teal-50/50 rounded-xl p-6 border-l-4 border-teal-400">
                      <p className="text-gray-700 leading-relaxed text-base mb-4">
                        Selected by school teachers based on interest in English literature to author a short book.
                        Wrote about a
                        <span className="font-semibold text-teal-700"> mechanised utopian future</span> where select students from sectors were escorted to
                        experience the natural world, exploring themes of
                        <span className="font-semibold text-teal-700"> technology, nature, and human connection</span>.
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-teal-700">Publisher:</strong> BriBooks
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-teal-700">Type:</strong> Short Novel
                      </p>
                      <p className="text-gray-700">
                        <strong className="text-teal-700">Role:</strong> Author
                      </p>
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