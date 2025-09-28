export default function Research() {
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
                        &quot;Microplastic Accumulation in Coral Reef Ecosystems: A Quantitative Analysis of Environmental Impact&quot;
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                        Marine Biology Research Journal • Vol. 45(3), 2024 • Impact Factor: 3.2
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <strong>Authors:</strong> D. Khandhar, Dr. M. Rodriguez, Dr. S. Chen, Dr. A. Thompson
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        This study examined microplastic concentrations in three coral reef systems over an 18-month period. 
                        We found significant correlations between plastic particle density and coral health indicators, 
                        with microplastic accumulation leading to a 23% reduction in photosynthetic efficiency in affected colonies.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                          Marine Biology
                        </span>
                        <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                          Environmental Science
                        </span>
                        <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                          Peer-Reviewed
                        </span>
                      </div>
                    </div>
                    <div className="lg:w-64 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Findings</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• 23% reduction in coral photosynthesis</li>
                        <li>• 156 plastic particles/m³ average density</li>
                        <li>• 78% of samples contained microplastics</li>
                        <li>• Clear correlation with tourism activity</li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          <strong>Citations:</strong> 12 (as of Sept 2024)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        &quot;Genetic Diversity Assessment in Endangered Marine Species Using Environmental DNA Techniques&quot;
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                        Conservation Genetics • Vol. 28(2), 2024 • Impact Factor: 2.8
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <strong>Authors:</strong> Dr. L. Martinez, D. Khandhar, Dr. P. Wilson
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Developed and validated novel eDNA protocols for monitoring genetic diversity in sea turtle populations. 
                        Our non-invasive approach successfully identified genetic markers for population health assessment 
                        without disturbing nesting sites.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                          Conservation Biology
                        </span>
                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                          Molecular Genetics
                        </span>
                        <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                          eDNA
                        </span>
                      </div>
                    </div>
                    <div className="lg:w-64 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Methodology</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Non-invasive water sampling</li>
                        <li>• PCR amplification protocols</li>
                        <li>• Genetic diversity metrics</li>
                        <li>• Population structure analysis</li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          <strong>Citations:</strong> 8 (as of Sept 2024)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Under Review */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⏳</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Under Review</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;Climate Change Adaptation Strategies in Coastal Marine Ecosystems: A Multi-Species Analysis&quot;
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                    Submitted to Climate Change Biology • Under peer review since August 2024
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>Authors:</strong> D. Khandhar, Dr. R. Singh, Dr. K. Nakamura, Dr. B. Johnson
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Comprehensive analysis of adaptation mechanisms in 15 marine species across three ocean regions. 
                    Examines physiological, behavioral, and genetic responses to changing temperature and pH levels.
                  </p>
                </div>
              </div>
            </div>

            {/* Conference Presentations */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎤</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Conference Presentations</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Oral Presentation
                  </h3>
                  <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                    &quot;Microplastic Impact on Coral Reef Health&quot;
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    International Marine Biology Conference • Miami, FL • June 2024
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Presented research findings to 300+ marine biologists and received recognition 
                    for outstanding undergraduate research.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Poster Presentation
                  </h3>
                  <h4 className="font-medium text-teal-600 dark:text-teal-400 mb-2">
                    &quot;eDNA Applications in Conservation&quot;
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Society for Conservation Biology Annual Meeting • Boston, MA • July 2024
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Interactive poster session demonstrating novel genetic monitoring techniques 
                    for endangered marine species.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Lightning Talk
                  </h3>
                  <h4 className="font-medium text-cyan-600 dark:text-cyan-400 mb-2">
                    &quot;Student Research Spotlight&quot;
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Regional Undergraduate Research Symposium • April 2024
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    5-minute presentation highlighting key research achievements and future directions 
                    in marine conservation biology.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Panel Discussion
                  </h3>
                  <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                    &quot;Future of Marine Research&quot;
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Young Scientists Symposium • Virtual • March 2024
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Participated in panel discussing emerging technologies and methodologies 
                    in marine biology research.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Metrics */}
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Research Impact
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">2</div>
                  <p className="text-gray-600 dark:text-gray-300">Published Papers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">20</div>
                  <p className="text-gray-600 dark:text-gray-300">Total Citations</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">4</div>
                  <p className="text-gray-600 dark:text-gray-300">Conference Presentations</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">1</div>
                  <p className="text-gray-600 dark:text-gray-300">Under Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}