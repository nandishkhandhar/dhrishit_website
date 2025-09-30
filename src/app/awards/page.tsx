'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Awards() {
  const [academicOpen, setAcademicOpen] = useState(false);
  const [extracurricularOpen, setExtracurricularOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">🏆</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Awards & Certificates
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Recognition for academic excellence and contributions to biological sciences
            </p>
          </div>

          <div className="space-y-12">
            {/* Academic Awards */}
            <div className="bg-gradient-to-br from-white via-emerald-50/30 to-white dark:from-gray-800/70 dark:via-emerald-900/10 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-200/60 dark:border-emerald-800/40 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => setAcademicOpen(!academicOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-emerald-50/80 hover:to-emerald-100/40 dark:hover:from-emerald-900/30 dark:hover:to-emerald-800/20 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/60 dark:to-emerald-800/40 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🎓</span>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 dark:from-emerald-300 dark:to-teal-300 bg-clip-text text-transparent">Academic Awards</h2>
                </div>
                <div className={`transform transition-all duration-300 ${academicOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-800/60 dark:to-emerald-700/40 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {academicOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 dark:from-emerald-800 dark:via-emerald-600 dark:to-emerald-800 mb-8"></div>
                  
                  <div className="space-y-8 px-6 pb-4">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white">
                    <Image src="/fisologo.jpg" alt="FISO Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      FISO Biology Olympiad - Gold Medal
                    </h3>
                    <p className="text-rose-600 dark:text-rose-400 font-medium mb-3">
                      International Biology Olympiad Foundation • 2023
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Achieved gold medal recognition in the prestigious international biology olympiad, 
                      competing in advanced topics including molecular biology, ecology, and genetics.
                    </p>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">FISO Certificate</h4>
                      <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white p-4">
                        <Image src="/FISO.png" alt="FISO Biology Olympiad Certificate" width={800} height={600} className="w-full h-auto object-contain" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white">
                    <Image src="/assetlogo.jpeg" alt="ASSET Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      ASSET Talent Award
                    </h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                      Educational Testing Service • 2023
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Received talent recognition in the ASSET assessment, demonstrating 
                      superior performance in academic aptitude, given by Jamnabai Narsee International School.
                    </p>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">ASSET Certificate</h4>
                      <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white p-4">
                        <Image src="/ASSET.png" alt="ASSET Chemistry Certificate" width={800} height={600} className="w-full h-auto object-contain" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white">
                    <Image src="/icqlogo.jpg" alt="ICQ Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      International Chemistry Quiz Winner
                    </h3>
                    <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                      International Chemistry Competition • 2025
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Secured top position in the prestigious international chemistry quiz, demonstrating exceptional 
                      knowledge in organic, inorganic, and physical chemistry concepts among global participants. 
                      <strong>Achieved distinction and qualified for ICQ Asia camp.</strong>
                    </p>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">ICC Certificate</h4>
                      <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white p-4">
                        <Image src="/ICC.jpeg" alt="International Chemistry Competition Certificate" width={600} height={800} className="w-full h-auto object-contain" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white">
                    <Image src="/cemclogo.png" alt="CEMC Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      CEMC Mathematics Competitions - Multiple Awards
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                      University of Waterloo • 2022-2025
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Distinguished performance in Fryer, Fermat, and Hypatia mathematics contests, achieving 
                      certificates of distinction in advanced mathematical problem-solving and analytical reasoning.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Fryer Contest Certificate</h4>
                        <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white p-4">
                          <Image src="/Fryer.png" alt="Fryer Contest Certificate" width={800} height={600} className="w-full h-auto object-contain" />
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Fermat Contest Certificate</h4>
                        <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white p-4">
                          <Image src="/Fermat.png" alt="Fermat Contest Certificate" width={800} height={600} className="w-full h-auto object-contain" />
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Hypatia Contest Certificate</h4>
                        <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white p-4">
                          <Image src="/Hypatia.png" alt="Hypatia Contest Certificate" width={800} height={600} className="w-full h-auto object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white">
                    <Image src="/hkimologo.png" alt="HKIMO Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      HKIMO Math Olympiad - <strong>Silver Medal</strong>
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                      Hong Kong International Mathematical Olympiad • 2023
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Earned silver medal in the highly competitive international mathematics olympiad, 
                      demonstrating exceptional problem-solving skills among global participants.
                    </p>
                    
                    <div className="max-w-4xl">
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">HKIMO Certificate</h4>
                        <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white p-4">
                          <Image src="/HKIMO.png" alt="HKIMO Certificate" width={800} height={600} className="w-full h-auto object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white">
                    <Image src="/avogadrologo.jpg" alt="Avogadro Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Avogadro Chemistry Competition
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                      International Chemistry Competition • 2025
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Recognition for outstanding performance in the Avogadro chemistry competition, 
                      demonstrating advanced knowledge in chemical principles and problem-solving.
                    </p>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Avogadro Certificate</h4>
                      <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white p-4">
                        <Image src="/avogadro.png" alt="Avogadro Chemistry Competition Certificate" width={800} height={600} className="w-full h-auto object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                </>
              )}
            </div>

            {/* Extra-Curricular Awards */}
            <div className="bg-gradient-to-br from-white via-teal-50/30 to-white dark:from-gray-800/70 dark:via-teal-900/10 dark:to-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-200/60 dark:border-teal-800/40 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => setExtracurricularOpen(!extracurricularOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 group hover:bg-gradient-to-r hover:from-teal-50/80 hover:to-teal-100/40 dark:hover:from-teal-900/30 dark:hover:to-teal-800/20 rounded-2xl transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/60 dark:to-teal-800/40 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🌟</span>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 dark:from-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">Extra-Curricular Awards</h2>
                </div>
                <div className={`transform transition-all duration-300 ${extracurricularOpen ? 'rotate-180' : ''} group-hover:scale-110`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-800/60 dark:to-teal-700/40 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {extracurricularOpen && (
                <>
                  <div className="w-full h-px bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200 dark:from-teal-800 dark:via-teal-600 dark:to-teal-800 mb-8"></div>
                  
                  <div className="space-y-8 px-6 pb-4">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image src="/earthprizelogo.jpg" alt="Earth Prize Logo" width={80} height={80} className="w-20 h-20 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Earth Prize Asian Scholar Award
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                      Earth Prize Foundation • 2025
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      The Earth Prize is the world&apos;s largest environmental competition for young people addressing environmental sustainability issues. Won the award for his project GreyToGrow, to purify greywater for low income communities in my locality.
                    </p>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Earth Prize Certificate</h4>
                      <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white p-4">
                        <Image src="/earth_prize.png" alt="Earth Prize Asian Scholar Award Certificate" width={800} height={600} className="w-full h-auto object-contain" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white">
                    <Image src="/padilogo.svg" alt="PADI Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      PADI Advanced Open Water Diver & Underwater Photographer
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      Professional Association of Diving Instructors • 2022-Present
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Advanced open water diver qualification and certified underwater photographer.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Advanced Open Water Certificate</h4>
                        <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white p-4">
                          <Image src="/openwater.jpeg" alt="PADI Advanced Open Water Certificate" width={800} height={600} className="w-full h-auto object-contain" />
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Underwater Photography Certificate</h4>
                        <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white p-4">
                          <Image src="/photography.jpeg" alt="PADI Underwater Photography Certificate" width={800} height={600} className="w-full h-auto object-contain" />
                        </div>
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