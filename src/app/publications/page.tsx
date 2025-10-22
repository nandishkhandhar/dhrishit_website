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
            <div className="bg-gradient-to-br from-white via-emerald-50/30 to-white backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-200/60 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setHornbillOpen(!hornbillOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-emerald-50/80 hover:to-emerald-100/40 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🤿</span>
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent text-left">
                      Diving Experiences and Marine Biodiversity Observations in the Andaman and Nicobar Islands
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Published</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm">Hornbill Magazine - BNHS</span>
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm">June-September 2025</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${hornbillOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {hornbillOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200">
                        <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wide mb-1">Publisher</p>
                        <p className="text-sm font-bold text-gray-900">Bombay Natural History Society (BNHS)</p>
                      </div>
                      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-200">
                        <p className="text-xs text-teal-600 font-semibold uppercase tracking-wide mb-1">Magazine</p>
                        <p className="text-sm font-bold text-gray-900">Hornbill Magazine</p>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                        <p className="text-xs text-cyan-600 font-semibold uppercase tracking-wide mb-1">Role</p>
                        <p className="text-sm font-bold text-gray-900">Freelance Author</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50/50 via-teal-50/50 to-cyan-50/50 rounded-xl p-6 border-l-4 border-emerald-500">
                      <p className="text-gray-800 leading-relaxed text-base">
                        Published an article describing diving experiences and marine biodiversity observations in the
                        <span className="font-semibold text-emerald-700"> Andaman and Nicobar Islands</span>, providing detailed insights into underwater ecosystems and marine
                        life diversity in this biodiverse archipelago.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* 100 Feet Under Coffee Table Book */}
            <div className="bg-gradient-to-br from-white via-teal-50/30 to-white backdrop-blur-sm rounded-2xl shadow-xl border border-teal-200/60 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setBookOpen(!bookOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-teal-50/80 hover:to-teal-100/40 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-200 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📖</span>
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent text-left">
                      100 FEET UNDER–Embracing the Serenity
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Published</span>
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm">Coffee Table Book</span>
                    <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm">Partridge Publishing</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">2025</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${bookOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-cyan-200 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {bookOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-teal-200 via-cyan-400 to-teal-200 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-200">
                        <p className="text-xs text-teal-600 font-semibold uppercase tracking-wide mb-1">Publisher</p>
                        <p className="text-sm font-bold text-gray-900">Partridge Publishing</p>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                        <p className="text-xs text-cyan-600 font-semibold uppercase tracking-wide mb-1">Type</p>
                        <p className="text-sm font-bold text-gray-900">Coffee Table Book</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                        <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">Role</p>
                        <p className="text-sm font-bold text-gray-900">Photographer</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50/50 via-cyan-50/50 to-blue-50/50 rounded-xl p-6 border-l-4 border-teal-500">
                      <p className="text-gray-800 leading-relaxed text-base">
                        A stunning coffee table book featuring underwater photography captured during trips to
                        <span className="font-semibold text-teal-700"> Bali, Indonesia</span> and the
                        <span className="font-semibold text-teal-700"> Andaman Islands, India</span> (2023-2025). This photographic journey documents
                        marine biodiversity and underwater ecosystems, showcasing the serene beauty found beneath
                        the waves.
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
            <div className="bg-gradient-to-br from-white via-cyan-50/30 to-white backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-200/60 hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => setVinculocaOpen(!vinculocaOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-cyan-50/80 hover:to-cyan-100/40 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📘</span>
                    </div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-700 to-blue-600 bg-clip-text text-transparent text-left">
                      The Tale of Vinculoca
                    </h2>
                  </div>
                  <div className="ml-15 flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Published</span>
                    <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm">BriBooks</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">2023</span>
                  </div>
                </div>
                <div className={`transform transition-all duration-300 ${vinculocaOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {vinculocaOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-cyan-200 via-blue-400 to-cyan-200 mb-8"></div>

                  <div className="space-y-6 px-6 pb-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                        <p className="text-xs text-cyan-600 font-semibold uppercase tracking-wide mb-1">Publisher</p>
                        <p className="text-sm font-bold text-gray-900">BriBooks</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                        <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">Type</p>
                        <p className="text-sm font-bold text-gray-900">Short Novel</p>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
                        <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mb-1">Role</p>
                        <p className="text-sm font-bold text-gray-900">Author</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50/50 via-blue-50/50 to-indigo-50/50 rounded-xl p-6 border-l-4 border-cyan-500">
                      <p className="text-gray-800 leading-relaxed text-base">
                        Selected by school teachers based on interest in English literature to author a short book.
                        Wrote about a
                        <span className="font-semibold text-cyan-700"> mechanised utopian future</span> where select students from sectors were escorted to
                        experience the natural world, exploring themes of
                        <span className="font-semibold text-cyan-700"> technology, nature, and human connection</span>.
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