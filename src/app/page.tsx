export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/50 to-teal-50 dark:from-slate-900 dark:via-emerald-950/30 dark:to-gray-900 relative overflow-hidden">
      {/* Ultra-modern layered background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-transparent to-cyan-100/40 dark:from-emerald-900/20 dark:via-transparent dark:to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-teal-100/30 to-transparent dark:via-teal-900/15 animate-pulse" style={{animationDuration: '4s'}}></div>
        
        {/* Floating animated orbs with complex movements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-300/25 via-teal-300/20 to-cyan-300/25 dark:from-emerald-700/20 dark:via-teal-700/15 dark:to-cyan-700/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-cyan-300/20 via-emerald-300/25 to-teal-300/20 dark:from-cyan-700/15 dark:via-emerald-700/20 dark:to-teal-700/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-teal-300/25 via-cyan-300/20 to-emerald-300/25 dark:from-teal-700/20 dark:via-cyan-700/15 dark:to-emerald-700/20 rounded-full blur-3xl animate-ping" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
        
        {/* Rotating geometric elements */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-200/15 to-teal-200/15 dark:from-emerald-800/8 dark:to-teal-800/8 rounded-3xl blur-xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-emerald-200/20 dark:from-cyan-800/10 dark:to-emerald-800/10 rounded-2xl blur-lg animate-spin" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
        <div className="absolute top-1/6 right-1/4 w-16 h-16 bg-gradient-to-br from-teal-200/25 to-cyan-200/25 dark:from-teal-800/12 dark:to-cyan-800/12 rounded-xl blur-md animate-pulse" style={{animationDuration: '3s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-emerald-300/30 dark:bg-emerald-600/20 rounded-full blur-sm animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-teal-300/40 dark:bg-teal-600/25 rounded-full blur-sm animate-ping" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/5 left-3/4 w-2 h-2 bg-cyan-300/50 dark:bg-cyan-600/30 rounded-full blur-sm animate-pulse" style={{animationDelay: '2.5s', animationDuration: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-emerald-400/35 dark:bg-emerald-700/20 rounded-full blur-sm animate-bounce" style={{animationDelay: '3s', animationDuration: '5s'}}></div>
        
        {/* Dynamic grid patterns */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/8 to-transparent dark:via-emerald-900/4" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.08) 1px, transparent 0)', backgroundSize: '50px 50px'}}></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-teal-100/6 to-transparent dark:via-teal-900/3 animate-pulse" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.06) 0.5px, transparent 0)', backgroundSize: '30px 30px', animationDuration: '8s'}}></div>
        
        {/* Organic flowing shapes */}
        <div className="absolute top-0 left-1/2 w-64 h-32 bg-gradient-to-r from-emerald-200/10 via-teal-200/15 to-cyan-200/10 dark:from-emerald-800/5 dark:via-teal-800/8 dark:to-cyan-800/5 rounded-full blur-2xl transform -rotate-12 animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/6 left-0 w-48 h-24 bg-gradient-to-r from-cyan-200/12 via-emerald-200/18 to-teal-200/12 dark:from-cyan-800/6 dark:via-emerald-800/9 dark:to-teal-800/6 rounded-full blur-2xl transform rotate-45 animate-pulse" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")'}}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <a href="/research" className="group text-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">Research</h3>
              <p className="text-gray-600 dark:text-gray-300">Marine biology research with focus on coral reef ecosystems and conservation genetics</p>
            </a>

            <a href="/community" className="group text-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">Science education and environmental outreach to underserved communities</p>
            </a>

            <a href="/publications" className="group text-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">Publications</h3>
              <p className="text-gray-600 dark:text-gray-300">Scientific publications and creative writing exploring nature and science</p>
            </a>

            <a href="/internships" className="group text-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">Internships</h3>
              <p className="text-gray-600 dark:text-gray-300">Professional experience in marine research and conservation organizations</p>
            </a>

            <a href="/awards" className="group text-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">Awards</h3>
              <p className="text-gray-600 dark:text-gray-300">Recognition for academic excellence and contributions to biological sciences</p>
            </a>

            <a href="/jnis" className="group text-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">JNIS</h3>
              <p className="text-gray-600 dark:text-gray-300">Leadership, education, and artistic expression through scientific society</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Exploring the intersection of biology, conservation, and community
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              From coral reef research to science tutoring, I&apos;m driven by curiosity about the natural world 
              and committed to making scientific knowledge accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
