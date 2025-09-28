export default function JNIS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">🏛️</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Life at JNIS
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Junior National Investigator Society - Leadership, education, and artistic expression
            </p>
          </div>

          <div className="space-y-8">
            {/* JNIS Overview */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About JNIS</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Junior National Investigator Society (JNIS) is a prestigious organization dedicated to 
                  fostering scientific excellence among undergraduate students. As a member, I participate in 
                  collaborative research initiatives, peer mentoring programs, and scientific outreach activities 
                  that advance our understanding of biological sciences.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  JNIS provides a platform for emerging scientists to share their research, learn from 
                  established investigators, and contribute to the broader scientific community through 
                  innovative research projects and educational initiatives.
                </p>
              </div>
            </div>

            {/* My Role & Contributions */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Role & Contributions</h2>
              
              <div className="grid md:grid-cols-1 gap-8">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Captain - JNIS Leadership</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">2023 - Present</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Leading the JNIS chapter with responsibilities including organizing scientific events, 
                    coordinating research collaborations, mentoring junior members, and representing the society 
                    in inter-institutional academic competitions and conferences.
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Art Workshop Instructor</h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">2022 - 2024</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Designed and conducted art workshops for children, teaching over 100+ kids various art techniques 
                    including scientific illustration, nature sketching, and creative expression. Combined artistic skills 
                    with biology education to make science more accessible and engaging.
                  </p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Art & Photography Exhibition</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">Annual Event • 2023 & 2024</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Organized and curated exhibitions showcasing scientific art and nature photography. 
                    Successfully sold 15+ pieces featuring marine life illustrations and underwater photography, 
                    with proceeds supporting JNIS educational initiatives and conservation projects.
                  </p>
                </div>
              </div>
            </div>

            {/* JNIS Projects */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">JNIS Collaborative Projects</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Multi-University Marine Biodiversity Survey
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                    Lead Researcher • 2024
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Coordinating a comprehensive study involving 8 universities along the East Coast to assess 
                    marine biodiversity changes over the past decade. The project combines field surveys, 
                    genetic analysis, and environmental monitoring.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                      Multi-institutional
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                      Biodiversity
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                      Leadership
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Student Research Excellence Program
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                    Co-Director • 2023 - Present
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Developed and implemented a mentorship program connecting advanced undergraduate researchers 
                    with peers beginning their scientific journey. Program has supported 50+ student research projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                      Mentorship
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                      Program Development
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                      Education
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Science Communication Initiative
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                    Content Creator • 2022 - Present
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Creating accessible content to communicate complex biological concepts to public audiences. 
                    Developed educational materials used by JNIS chapters nationwide for community outreach.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                      Science Communication
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                      Public Outreach
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                      Content Creation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements & Recognition */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">JNIS Achievements</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Outstanding Researcher Award</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">JNIS National Conference • 2024</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🌟</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Leadership Excellence Recognition</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Regional JNIS Chapter • 2023</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📚</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Best Mentorship Program</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">JNIS Innovation Awards • 2024</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Community Impact Award</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">JNIS Service Recognition • 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                JNIS Impact & Achievements
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">100+</div>
                  <p className="text-gray-600 dark:text-gray-300">Kids Taught Art</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">15+</div>
                  <p className="text-gray-600 dark:text-gray-300">Artworks Sold</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">2</div>
                  <p className="text-gray-600 dark:text-gray-300">Annual Exhibitions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">1</div>
                  <p className="text-gray-600 dark:text-gray-300">Captain Position</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}