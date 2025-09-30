export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/50 to-teal-50 dark:from-slate-900 dark:via-emerald-950/30 dark:to-gray-900">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-xl">
              <span className="text-4xl">📄</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Resume
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/resume.pdf" 
                download="Dhrishit_Khandhar_Resume.pdf"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-3 transform hover:scale-105"
              >
                <span className="text-lg">📥</span>
                Download PDF Resume
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 px-8 py-4 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 font-medium flex items-center justify-center gap-3 transform hover:scale-105"
              >
                <span className="text-lg">🔗</span>
                View in New Tab
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-200/50 dark:border-emerald-800/30 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-full flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                  <a 
                    href="mailto:dhrishitk.16@gmail.com"
                    className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    dhrishitk.16@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/50 dark:to-cyan-900/50 rounded-full flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Phone</p>
                  <a 
                    href="tel:+918828022924"
                    className="text-lg font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                  >
                    +91-8828022924
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-emerald-200/50 dark:border-emerald-800/30">
            <div className="w-full h-screen max-h-[1200px]">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="w-full h-full border-0"
                title="Dhrishit Khandhar Resume"
                style={{
                  display: 'block',
                  background: 'white'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}