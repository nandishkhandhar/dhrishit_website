'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Internships', href: '/internships' },
  { name: 'Community', href: '/community' },
  // { name: 'Awards', href: '/awards' }, // Commented out - can be restored easily
  { name: 'Resume', href: '/resume' },
  { name: 'Publications', href: '/publications' },
  { name: 'Research', href: '/research' },
  // { name: 'Life at JNIS', href: '/jnis' }, // Commented out - can be restored easily
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 pt-4 pb-0 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Black pill navbar */}
        <div className="bg-black rounded-full shadow-2xl px-8 py-4">
            <div className="flex justify-between items-center">
          <Link href="/" className="font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500 transition-all duration-500 transform hover:scale-105 text-2xl">
            <span className="inline-flex items-center gap-2">
              Dhrishit Khandhar
              <span className="text-xl animate-pulse">🧬</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  pathname === item.href
                    ? 'text-white bg-gradient-to-r from-teal-500 to-cyan-600 shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800 hover:shadow-sm'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-full text-gray-300 hover:bg-slate-800 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden mt-6 pb-6 border-t border-gray-700">
                <div className="flex flex-col space-y-2 pt-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                        pathname === item.href
                          ? 'text-white bg-gradient-to-r from-teal-500 to-cyan-600 shadow-md'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800 hover:shadow-sm'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </nav>
  );
}