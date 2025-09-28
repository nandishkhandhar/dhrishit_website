export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">📄</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive overview of academic and professional experience
            </p>
            <div className="mt-6">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg">
                Download PDF Resume
              </button>
            </div>
          </div>

          <div className="space-y-12">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-500">📧</span>
                    <span className="text-gray-700 dark:text-gray-300">dhrishit.khandhar@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-500">📱</span>
                    <span className="text-gray-700 dark:text-gray-300">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-500">📍</span>
                    <span className="text-gray-700 dark:text-gray-300">City, State 12345</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-500">💼</span>
                    <span className="text-gray-700 dark:text-gray-300">linkedin.com/in/dhrishit-khandhar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-500">🌐</span>
                    <span className="text-gray-700 dark:text-gray-300">dhrishit-portfolio.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Science in Biology</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium">University Name • Expected Graduation: May 2025</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    <strong>GPA:</strong> 3.85/4.0 • <strong>Major GPA:</strong> 3.92/4.0 • <strong>Dean's List:</strong> 4 semesters
                  </p>
                  <div className="mt-3">
                    <p className="text-gray-700 dark:text-gray-300"><strong>Relevant Coursework:</strong></p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Molecular Biology, Marine Biology, Ecology, Genetics, Biochemistry, Research Methods, 
                      Statistics, Environmental Science, Cell Biology, Microbiology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Experience</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Research Intern</h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium">Ocean Research Institute • June 2024 - August 2024</p>
                  <ul className="mt-3 space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Conducted field research on coral reef ecosystems, collecting and analyzing marine biodiversity data</li>
                    <li>• Utilized advanced microscopy and molecular techniques for species identification</li>
                    <li>• Co-authored research paper on microplastic impact on marine organisms (submitted for publication)</li>
                    <li>• Presented findings at regional marine biology conference</li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Laboratory Assistant</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium">University Molecular Biology Lab • September 2023 - May 2024</p>
                  <ul className="mt-3 space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Assisted in DNA extraction, PCR amplification, and gel electrophoresis procedures</li>
                    <li>• Maintained cell cultures and performed viability assays for ongoing research projects</li>
                    <li>• Prepared reagents and maintained laboratory equipment according to safety protocols</li>
                    <li>• Trained incoming students in basic laboratory techniques and safety procedures</li>
                  </ul>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Biology Tutor</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium">Community Learning Center • January 2023 - Present</p>
                  <ul className="mt-3 space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Provide free tutoring in biology and chemistry to 150+ high school students</li>
                    <li>• Develop engaging lesson plans and study materials for college prep courses</li>
                    <li>• Mentor students in science fair projects and research methodology</li>
                    <li>• Achieved 95% student satisfaction rate and 80% improvement in test scores</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Laboratory Techniques</h3>
                  <div className="space-y-2">
                    {[
                      'PCR & qPCR',
                      'DNA/RNA Extraction',
                      'Cell Culture',
                      'Microscopy (Light & Fluorescence)',
                      'Gel Electrophoresis',
                      'Spectrophotometry',
                      'ELISA',
                      'Western Blotting'
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Software & Analysis</h3>
                  <div className="space-y-2">
                    {[
                      'R Programming',
                      'Python (Pandas, NumPy)',
                      'SPSS',
                      'ImageJ',
                      'GraphPad Prism',
                      'Microsoft Office Suite',
                      'Laboratory Information Systems',
                      'Statistical Analysis'
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Languages</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">English</div>
                  <p className="text-gray-600 dark:text-gray-300">Native</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">Spanish</div>
                  <p className="text-gray-600 dark:text-gray-300">Conversational</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">French</div>
                  <p className="text-gray-600 dark:text-gray-300">Basic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}