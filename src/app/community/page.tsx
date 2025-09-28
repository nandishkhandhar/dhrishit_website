export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">🌱</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Community Connect
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Building connections through biology education and community outreach
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Time and Tide</h3>
                  <p className="text-emerald-600 dark:text-emerald-400">Marine Conservation Initiative</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Led community awareness campaigns about tidal patterns and their impact on coastal ecosystems. 
                Organized beach clean-up drives and educated local communities about marine conservation, 
                reaching over 200 participants across coastal areas.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                  Marine Conservation
                </span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                  Community Outreach
                </span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                  Environmental Education
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project GreytoGrow</h3>
                  <p className="text-teal-600 dark:text-teal-400">Urban Greening Initiative</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Spearheaded an urban reforestation project transforming grey concrete spaces into green areas. 
                Collaborated with local authorities to plant over 500 native trees and create community gardens 
                in urban neighborhoods, improving air quality and biodiversity.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                  Urban Ecology
                </span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                  Sustainability
                </span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                  Community Development
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">NGO Volunteer</h3>
                  <p className="text-cyan-600 dark:text-cyan-400">Wildlife Conservation NGO</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Volunteered with local wildlife conservation NGO to support endangered species protection programs. 
                Assisted in wildlife rehabilitation efforts, conducted educational workshops for school children, 
                and participated in habitat restoration projects across protected areas.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                  Wildlife Conservation
                </span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                  Education
                </span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                  Habitat Restoration
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Community Impact
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">150+</div>
                <p className="text-gray-600 dark:text-gray-300">Students Tutored</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">25</div>
                <p className="text-gray-600 dark:text-gray-300">Sustainability Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">500+</div>
                <p className="text-gray-600 dark:text-gray-300">Community Members Reached</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}