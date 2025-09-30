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
                        &quot;Evolutionary History of Pulmonary Surfactant Proteins: A Defence Against Fibrosis?&quot;
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                        National High School Journal of Science • 2025 • Under Review
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <strong>Mentor:</strong> Dr. Nirpma Singh (PhD in Bioinformatics, University of Delhi)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        This groundbreaking research analyzed how the evolutionary history of pulmonary surfactant proteins 
                        in vertebrates plays a crucial role in the prevention and susceptibility of lung fibrosis across 
                        different vertebrate species. The study provides insights into evolutionary adaptations that protect 
                        against respiratory diseases.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                          Evolutionary Biology
                        </span>
                        <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                          Bioinformatics
                        </span>
                        <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                          S.T. Yau Competition
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                          First Author
                        </span>
                      </div>
                    </div>
                    <div className="lg:w-64 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Highlights</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Analyzed surfactant protein evolution across vertebrates</li>
                        <li>• Identified fibrosis defense mechanisms</li>
                        <li>• Qualified for S.T. Yau Competition Round 1</li>
                        <li>• Advanced bioinformatics analysis techniques</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        &quot;How do changes in evolutionary mechanisms and environmental stress affect micro-fragmentation in coral species and their microbiome?&quot;
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                        International Journal for High School Research • December 2023 • Accepted for Publication
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <strong>Mentor:</strong> Dr. Prerna Gupta (PhD in Virology and Immunology)
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        This research analyzed how different coral species secrete different hormones and enzymes in response 
                        to the process of micro-fragmentation and how extreme environmental stress reduces its effectiveness. 
                        The study provides crucial insights into coral adaptation mechanisms and their vulnerability to 
                        climate change impacts.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                          Marine Biology
                        </span>
                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                          Coral Research
                        </span>
                        <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                          Microbiome
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                          First Author
                        </span>
                      </div>
                    </div>
                    <div className="lg:w-64 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Focus</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Coral micro-fragmentation mechanisms</li>
                        <li>• Hormone and enzyme secretion analysis</li>
                        <li>• Environmental stress impact assessment</li>
                        <li>• Species-specific adaptation patterns</li>
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