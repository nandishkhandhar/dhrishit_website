import Image from 'next/image';

export default function JNIS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-lg border-4 border-emerald-200">
              <Image src="/jnislogo.jpeg" alt="JNIS Logo" width={80} height={80} className="w-20 h-20 object-contain rounded-full" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Life at JNIS
            </h1>
            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">
              Jamnabai Narsee International School
            </p>
          </div>

          <div className="space-y-8">
            {/* JNIS Overview */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About JNIS</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  Jamnabai Narsee International School (JNIS) - My alma mater where I developed leadership skills, artistic expression, and a passion for scientific excellence.
                </p>
              </div>
            </div>

            {/* My Role & Contributions */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Role & Contributions</h2>
              
              <div className="grid md:grid-cols-1 gap-8">
<div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Captain - Tagore House</h3>
                  <p className="text-amber-600 dark:text-amber-400 font-medium mb-3">2023 - Present</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Leading the JNIS Tagore House with responsibilities including organizing scientific events, 
                    coordinating research collaborations, mentoring junior members, and representing the society 
                    in inter-institutional academic competitions and conferences.
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Tagore Captain Certificate</h4>
                    <div className="max-w-xl mx-auto border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden bg-white">
                      <Image src="/tagorecaptain.jpg" alt="Tagore Captain Certificate" width={500} height={375} className="w-full h-auto object-contain" />
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fluid Art Instructor</h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">2023 • School Fair</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Designed and conducted fluid art workshops for children, teaching over 100+ kids various art techniques 
                    including acrylic pouring, color mixing, and creative expression.
                  </p>
                  
                  <div className="mt-8">
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-teal-200/50 dark:border-teal-700/30">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🎨</span>
                        </div>
                        <h4 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                          Workshop Gallery
                        </h4>
                      </div>
                      
                      <div className="space-y-8">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-700">
                          <video 
                            controls 
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                            preload="metadata"
                          >
                            <source src="/fluid-art/C9A2AC6C-27B7-4C8A-BBE2-72D8C55B24C3.mov" type="video/mp4" />
                            <source src="/fluid-art/C9A2AC6C-27B7-4C8A-BBE2-72D8C55B24C3.mov" type="video/quicktime" />
                            <div className="flex items-center justify-center h-full">
                              <div className="text-center p-4">
                                <p className="text-gray-600 dark:text-gray-300 mb-2">Video preview not available</p>
                                <a href="/fluid-art/C9A2AC6C-27B7-4C8A-BBE2-72D8C55B24C3.mov" className="text-teal-600 hover:text-teal-500 underline">
                                  Download video
                                </a>
                              </div>
                            </div>
                          </video>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/2C89381E-D1C2-47AE-85DA-479B48A032DF.jpg" alt="Fluid Art Workshop 1" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/431641C2-C013-423B-9570-1DA8D787D720.jpg" alt="Fluid Art Workshop 2" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/6370B38E-B927-4953-92F2-199473500A68.jpg" alt="Fluid Art Workshop 3" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/78DB3126-00F5-4F7D-861D-4F31938BE62C.jpg" alt="Fluid Art Workshop 4" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/9924CA00-B8DB-411B-9469-1D0227D79F29.jpg" alt="Fluid Art Workshop 5" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/fluid-art/A88DC2A4-46A5-4A3E-85C1-3719B1B0CB19.jpg" alt="Fluid Art Workshop 6" fill className="object-cover" />
                          </div>
                        </div>
                        
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-700">
                          <video 
                            controls 
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                            preload="metadata"
                          >
                            <source src="/fluid-art/310F4EE6-1CBF-4653-80F4-709344CECC3C.mov" type="video/mp4" />
                            <source src="/fluid-art/310F4EE6-1CBF-4653-80F4-709344CECC3C.mov" type="video/quicktime" />
                            <div className="flex items-center justify-center h-full">
                              <div className="text-center p-4">
                                <p className="text-gray-600 dark:text-gray-300 mb-2">Video preview not available</p>
                                <a href="/fluid-art/310F4EE6-1CBF-4653-80F4-709344CECC3C.mov" className="text-teal-600 hover:text-teal-500 underline">
                                  Download video
                                </a>
                              </div>
                            </div>
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Art & Photography Exhibition</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">Annual Event • 2024</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Organized and curated exhibitions showcasing scientific art and nature photography. 
                    Successfully sold 15+ pieces featuring marine life illustrations and underwater photography, 
                    with proceeds supporting JNIS educational initiatives and conservation projects.
                  </p>
                  
                  <div className="mt-8">
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-indigo-200/50 dark:border-indigo-700/30">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🎨</span>
                        </div>
                        <h4 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                          Exhibition Gallery
                        </h4>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto max-w-md">
                          <Image src="/artex/poster.jpeg" alt="Art Exhibition Poster" fill className="object-cover" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/artex/a1.jpg" alt="Art Exhibition Piece 1" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/artex/a2.jpg" alt="Art Exhibition Piece 2" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/artex/a3.jpg" alt="Art Exhibition Piece 3" fill className="object-cover" />
                          </div>
                          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Image src="/artex/a4.jpg" alt="Art Exhibition Piece 4" fill className="object-cover" />
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
      </div>
    </div>
  );
}