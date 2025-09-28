export default function Life() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">🌱</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Life & Experiences
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Personal journey, hobbies, and the experiences that shape my perspective
            </p>
          </div>

          <div className="space-y-8">
            {/* Personal Philosophy */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Philosophy</h2>
                <div className="max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                    "Life, like biology, is about connection, adaptation, and growth. Every organism, every person, 
                    every moment teaches us something about resilience and the beautiful complexity of existence."
                  </p>
                </div>
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Hobbies & Interests</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📸</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Nature Photography</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Capturing the intricate beauty of marine life and coastal ecosystems. My underwater photography 
                        has been featured in local nature magazines and helps document biodiversity for research.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏃‍♀️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Trail Running</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Running through forest trails and coastal paths provides mental clarity and connects me 
                        with the environments I study. Completed 3 half-marathons and countless 10Ks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Scientific Illustration</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Creating detailed drawings of specimens and biological processes. This hobby enhances 
                        my observational skills and helps communicate scientific concepts visually.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌿</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Gardening</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Maintaining a native plant garden that attracts local wildlife. This hands-on experience 
                        with plant biology and ecology informs my academic understanding of ecosystems.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Creative Writing</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Writing poetry and short stories inspired by scientific discoveries and natural phenomena. 
                        This practice helps me communicate complex ideas in accessible, engaging ways.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎵</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Field Recording</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Recording natural soundscapes during research trips. These audio collections serve both 
                        as scientific data and personal meditation aids.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel & Adventures */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Travel & Field Adventures</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <div className="text-4xl mb-4">🏝️</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Coral Research - Bahamas</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Three-week marine biology field course studying coral reef ecosystems and conducting underwater surveys.
                  </p>
                </div>

                <div className="text-center p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <div className="text-4xl mb-4">🏔️</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Alpine Ecology - Colorado</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    High-altitude field study examining plant adaptations and climate change impacts in mountain ecosystems.
                  </p>
                </div>

                <div className="text-center p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                  <div className="text-4xl mb-4">🌊</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Whale Research - California</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Marine mammal observation and behavior documentation during migration season research expedition.
                  </p>
                </div>
              </div>
            </div>

            {/* Values & Inspiration */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">What Drives Me</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Values</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Environmental stewardship and conservation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Scientific integrity and curiosity</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Education and knowledge sharing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Community engagement and mentorship</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Interdisciplinary collaboration</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Daily Inspiration</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                        "The complexity of a single cell contains more wonder than most people see in a lifetime."
                      </p>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                        "Every research question answered leads to three new mysteries worth exploring."
                      </p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                        "Science and art are two sides of the same curiosity about the world around us."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Aspirations */}
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Looking Forward
              </h3>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  My goal is to pursue graduate studies in marine biology with a focus on conservation genetics. 
                  I envision a career that combines field research, laboratory work, and science communication 
                  to address pressing environmental challenges.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl mb-2">🎓</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Graduate School</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">PhD in Marine Biology</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl mb-2">🔬</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Research Focus</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Conservation Genetics</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl mb-2">🌍</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Impact Goal</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Global Conservation</p>
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