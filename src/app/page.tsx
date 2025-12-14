import { memo } from 'react';
import ScrollButton from './components/ScrollButton';

// Memoized icon components for better performance
const LinkedInIcon = memo(function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 relative overflow-hidden">
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image Card Section */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 hover:shadow-3xl transition-shadow duration-500">
            <div className="grid grid-cols-3 gap-0 h-[70vh] min-h-[550px]">
              {/* Image 1 */}
              <div className="relative overflow-hidden">
                <img src="/home1.png" alt="Dhrishit Khandhar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
              </div>

              {/* Image 2 */}
              <div className="relative overflow-hidden">
                <img src="/r2.jpeg" alt="Dhrishit Khandhar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
              </div>

              {/* Image 3 */}
              <div className="relative overflow-hidden">
                <img src="/r6.jpeg" alt="Dhrishit Khandhar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
              </div>
            </div>

            {/* Text Overlay - Stays Fixed */}
            <div className="absolute inset-0">
              {/* Subtle dark gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none"></div>

              <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-16 pointer-events-none">
                <h1 className="text-6xl font-bold text-white mb-3 leading-tight tracking-tight drop-shadow-2xl">
                  Dhrishit Khandhar
                </h1>
                <p className="text-2xl text-emerald-300 font-semibold drop-shadow-lg">
                  Marine Biology, Genetic Research & Conservation
                </p>
              </div>

              {/* Scroll Down Button */}
              <ScrollButton />
            </div>
          </div>

          {/* Profile Section */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-2xl text-gray-900 leading-relaxed font-semibold">
                Passionate about <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">marine conservation</span>, <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">genetic research</span>, and bridging the gap between science and community through <span className="bg-gradient-to-r from-cyan-600 to-cyan-700 bg-clip-text text-transparent">education and outreach</span>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/dhrishitk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold flex items-center gap-3 transform hover:scale-105"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/the.arts_dhrishit/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold flex items-center gap-3 transform hover:scale-105"               >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Art Portfolio
              </a>
              <a
                href="https://www.instagram.com/timeandtide_mumbai/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold flex items-center gap-3 transform hover:scale-105"               >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Time and Tide
              </a>
              <a
                href="/resume"
                className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 font-semibold hover:border-emerald-600 transform hover:scale-105 shadow-lg hover:shadow-xl"               >
                Download Resume
              </a>
            </div>
          </div>

          <div className="mb-20">
            {/* Grid layout: 3 cards on top, 2 on bottom */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
              <a href="/research" className="group text-center p-6 bg-gradient-to-br from-cyan-600 to-teal-700 rounded-2xl shadow-xl border-2 border-cyan-500 hover:border-teal-400 hover:shadow-2xl hover:from-cyan-500 hover:to-teal-600 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-300 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-100 transition-colors">Research</h3>
                <p className="text-cyan-50 leading-relaxed text-sm">Marine biology research with focus on coral reef ecosystems and conservation genetics</p>
                <div className="mt-3 flex justify-center">
                  <span className="px-3 py-1 bg-teal-500/50 text-white rounded-full text-xs font-medium">2 Papers</span>
                </div>
              </a>

              <a href="/publications" className="group text-center p-6 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl shadow-xl border-2 border-teal-500 hover:border-cyan-400 hover:shadow-2xl hover:from-teal-500 hover:to-cyan-600 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-300 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">Publications</h3>
                <p className="text-teal-50 leading-relaxed text-sm">Scientific publications and creative writing exploring nature and science</p>
                <div className="mt-3 flex justify-center">
                  <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-xs font-medium">3 Publications</span>
                </div>
              </a>

              <a href="/community" className="group text-center p-6 bg-gradient-to-br from-cyan-600 to-teal-700 rounded-2xl shadow-xl border-2 border-cyan-500 hover:border-teal-400 hover:shadow-2xl hover:from-cyan-500 hover:to-teal-600 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-300 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-100 transition-colors">Community</h3>
                <p className="text-cyan-50 leading-relaxed text-sm">Science education and environmental outreach to underserved communities</p>
                <div className="mt-3 flex justify-center">
                  <span className="px-3 py-1 bg-teal-500/50 text-white rounded-full text-xs font-medium">🏆 Earth Prize Winner</span>
                </div>
              </a>

            </div>

            {/* Second row: 2 cards centered */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <a href="/internships" className="group text-center p-6 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl shadow-xl border-2 border-teal-500 hover:border-cyan-400 hover:shadow-2xl hover:from-teal-500 hover:to-cyan-600 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-300 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">Internships</h3>
                <p className="text-teal-50 leading-relaxed text-sm">Professional experience in marine research and conservation organizations</p>
                <div className="mt-3 flex justify-center">
                  <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-xs font-medium">3 Organizations</span>
                </div>
              </a>

              <a href="/jnis" className="group text-center p-6 bg-gradient-to-br from-cyan-600 to-teal-700 rounded-2xl shadow-xl border-2 border-cyan-500 hover:border-teal-400 hover:shadow-2xl hover:from-cyan-500 hover:to-teal-600 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-300 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-100 transition-colors">Life at JNIS</h3>
                <p className="text-cyan-50 leading-relaxed text-sm">My high school journey</p>
                <div className="mt-3 flex justify-center">
                  <span className="px-3 py-1 bg-teal-500/50 text-white rounded-full text-xs font-medium">House Captain</span>
                </div>
              </a>
            </div>

              {/* Awards card - Commented out - can be restored easily
              <a href="/awards" className="group text-center p-6 bg-gradient-to-br from-teal-600 to-cyan-700 dark:from-teal-800/80 dark:to-cyan-900/80 rounded-2xl shadow-xl border-2 border-teal-500 dark:border-teal-700 hover:border-cyan-400 hover:shadow-2xl hover:from-teal-500 hover:to-cyan-600 dark:hover:from-teal-700/80 dark:hover:to-cyan-800/80 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-300 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">Awards</h3>
                <p className="text-teal-50 leading-relaxed text-sm">Recognition for academic excellence and contributions to biological sciences</p>
                <div className="mt-3 flex justify-center">
                  <span className="px-3 py-1 bg-cyan-500/50 text-white rounded-full text-xs font-medium">10+ Awards</span>
                </div>
              </a>
              */}

          </div>
        </div>
      </div>
    </div>
  );
}
