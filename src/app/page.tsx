export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-8 shadow-lg">
              <span className="text-5xl">🧬</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Dhrishit Khandhar
            </h1>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
              Biology Student & Researcher
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about marine conservation, genetic research, and bridging the gap between science and community through education and outreach
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/research"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg font-medium"
              >
                View Research
              </a>
              <a 
                href="/resume"
                className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Research</h3>
              <p className="text-gray-600 dark:text-gray-300">Marine biology research with focus on coral reef ecosystems and conservation genetics</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">Science education and environmental outreach to underserved communities</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Writing</h3>
              <p className="text-gray-600 dark:text-gray-300">Scientific publications and creative writing exploring nature and science</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Exploring the intersection of biology, conservation, and community
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              From coral reef research to science tutoring, I'm driven by curiosity about the natural world 
              and committed to making scientific knowledge accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
