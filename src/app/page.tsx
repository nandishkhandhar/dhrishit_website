import { memo } from 'react';

// Memoized icon components for better performance
const LinkedInIcon = memo(() => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
));

const InstagramIcon = memo(() => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
));

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/50 to-teal-50 dark:from-slate-900 dark:via-emerald-950/30 dark:to-gray-900 relative overflow-hidden">
      {/* Ultra-modern layered background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-transparent to-cyan-100/40 dark:from-emerald-900/20 dark:via-transparent dark:to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-teal-100/30 to-transparent dark:via-teal-900/15 animate-pulse" style={{animationDuration: '4s', willChange: 'opacity'}}></div>
        
        {/* Floating animated orbs with complex movements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-300/25 via-teal-300/20 to-cyan-300/25 dark:from-emerald-700/20 dark:via-teal-700/15 dark:to-cyan-700/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s', willChange: 'transform'}}></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-cyan-300/20 via-emerald-300/25 to-teal-300/20 dark:from-cyan-700/15 dark:via-emerald-700/20 dark:to-teal-700/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '5s', willChange: 'opacity'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-teal-300/25 via-cyan-300/20 to-emerald-300/25 dark:from-teal-700/20 dark:via-cyan-700/15 dark:to-emerald-700/20 rounded-full blur-3xl animate-ping" style={{animationDelay: '2s', animationDuration: '7s', willChange: 'transform, opacity'}}></div>
        
        {/* Rotating geometric elements */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-200/15 to-teal-200/15 dark:from-emerald-800/8 dark:to-teal-800/8 rounded-3xl blur-xl animate-spin" style={{animationDuration: '20s', willChange: 'transform'}}></div>
        <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-emerald-200/20 dark:from-cyan-800/10 dark:to-emerald-800/10 rounded-2xl blur-lg animate-spin" style={{animationDirection: 'reverse', animationDuration: '15s', willChange: 'transform'}}></div>
        <div className="absolute top-1/6 right-1/4 w-16 h-16 bg-gradient-to-br from-teal-200/25 to-cyan-200/25 dark:from-teal-800/12 dark:to-cyan-800/12 rounded-xl blur-md animate-pulse" style={{animationDuration: '3s', willChange: 'opacity'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-emerald-300/30 dark:bg-emerald-600/20 rounded-full blur-sm animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s', willChange: 'transform'}}></div>
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-teal-300/40 dark:bg-teal-600/25 rounded-full blur-sm animate-ping" style={{animationDelay: '1.5s', animationDuration: '4s', willChange: 'transform, opacity'}}></div>
        <div className="absolute top-1/5 left-3/4 w-2 h-2 bg-cyan-300/50 dark:bg-cyan-600/30 rounded-full blur-sm animate-pulse" style={{animationDelay: '2.5s', animationDuration: '2s', willChange: 'opacity'}}></div>
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-emerald-400/35 dark:bg-emerald-700/20 rounded-full blur-sm animate-bounce" style={{animationDelay: '3s', animationDuration: '5s', willChange: 'transform'}}></div>
        
        {/* Dynamic grid patterns */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/8 to-transparent dark:via-emerald-900/4" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.08) 1px, transparent 0)', backgroundSize: '50px 50px'}}></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-teal-100/6 to-transparent dark:via-teal-900/3 animate-pulse" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.06) 0.5px, transparent 0)', backgroundSize: '30px 30px', animationDuration: '8s', willChange: 'opacity'}}></div>
        
        {/* Organic flowing shapes */}
        <div className="absolute top-0 left-1/2 w-64 h-32 bg-gradient-to-r from-emerald-200/10 via-teal-200/15 to-cyan-200/10 dark:from-emerald-800/5 dark:via-teal-800/8 dark:to-cyan-800/5 rounded-full blur-2xl transform -rotate-12 animate-pulse" style={{animationDuration: '6s', willChange: 'opacity'}}></div>
        <div className="absolute bottom-1/6 left-0 w-48 h-24 bg-gradient-to-r from-cyan-200/12 via-emerald-200/18 to-teal-200/12 dark:from-cyan-800/6 dark:via-emerald-800/9 dark:to-teal-800/6 rounded-full blur-2xl transform rotate-45 animate-pulse" style={{animationDelay: '3s', animationDuration: '7s', willChange: 'opacity'}}></div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")'}}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-36 h-36 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-full mb-8 shadow-2xl ring-4 ring-emerald-200/50 dark:ring-emerald-700/30">
              <span className="text-6xl animate-pulse" style={{willChange: 'opacity'}}>🧬</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Dhrishit Khandhar
            </h1>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
              Biology Student & Researcher
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about marine conservation, genetic research, and bridging the gap between science and community through education and outreach
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/dhrishitk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold flex items-center gap-3 transform hover:scale-105" style={{willChange: 'transform, box-shadow'}}
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/the.arts_dhrishit/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold flex items-center gap-3 transform hover:scale-105" style={{willChange: 'transform, box-shadow'}}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Art Portfolio
              </a>
              <a 
                href="https://www.instagram.com/timeandtide_mumbai/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold flex items-center gap-3 transform hover:scale-105" style={{willChange: 'transform, box-shadow'}}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Time and Tide
              </a>
              <a 
                href="/resume"
                className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 px-8 py-4 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 font-semibold hover:border-emerald-600 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{willChange: 'transform, box-shadow'}}
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <a href="/research" className="group text-center p-8 bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-800/50 dark:to-emerald-900/10 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-200/50 dark:border-emerald-800/30 hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1" style={{willChange: 'transform, box-shadow'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg" style={{willChange: 'transform'}}>
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Research</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Marine biology research with focus on coral reef ecosystems and conservation genetics</p>
              <div className="mt-4 flex justify-center">
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">2 Papers Published</span>
              </div>
            </a>

            <a href="/community" className="group text-center p-8 bg-gradient-to-br from-white to-teal-50/30 dark:from-gray-800/50 dark:to-teal-900/10 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-200/50 dark:border-teal-800/30 hover:border-teal-400 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1" style={{willChange: 'transform, box-shadow'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 shadow-lg" style={{willChange: 'transform'}}>
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Community</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Science education and environmental outreach to underserved communities</p>
              <div className="mt-4 flex justify-center">
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">🏆 Earth Prize Winner</span>
              </div>
            </a>

            <a href="/publications" className="group text-center p-8 bg-gradient-to-br from-white to-cyan-50/30 dark:from-gray-800/50 dark:to-cyan-900/10 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-200/50 dark:border-cyan-800/30 hover:border-cyan-400 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1" style={{willChange: 'transform, box-shadow'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg" style={{willChange: 'transform'}}>
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Publications</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Scientific publications and creative writing exploring nature and science</p>
              <div className="mt-4 flex justify-center">
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">3 Publications</span>
              </div>
            </a>

            <a href="/internships" className="group text-center p-8 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-800/50 dark:to-purple-900/10 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-200/50 dark:border-purple-800/30 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1" style={{willChange: 'transform, box-shadow'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 shadow-lg" style={{willChange: 'transform'}}>
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Internships</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Professional experience in marine research and conservation organizations</p>
              <div className="mt-4 flex justify-center">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">4+ Organizations</span>
              </div>
            </a>

            <a href="/awards" className="group text-center p-8 bg-gradient-to-br from-white to-yellow-50/30 dark:from-gray-800/50 dark:to-yellow-900/10 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-200/50 dark:border-yellow-800/30 hover:border-yellow-400 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1" style={{willChange: 'transform, box-shadow'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg" style={{willChange: 'transform'}}>
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Awards</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Recognition for academic excellence and contributions to biological sciences</p>
              <div className="mt-4 flex justify-center">
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium">10+ Awards</span>
              </div>
            </a>

            <a href="/jnis" className="group text-center p-8 bg-gradient-to-br from-white to-indigo-50/30 dark:from-gray-800/50 dark:to-indigo-900/10 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-200/50 dark:border-indigo-800/30 hover:border-indigo-400 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1" style={{willChange: 'transform, box-shadow'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 shadow-lg" style={{willChange: 'transform'}}>
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">JNIS</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Leadership, education, and artistic expression through scientific society</p>
              <div className="mt-4 flex justify-center">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">House Captain</span>
              </div>
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
