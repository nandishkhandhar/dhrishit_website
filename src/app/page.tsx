'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Dhrishit Khandhar</h1>
            <div className="hidden md:flex space-x-8">
              {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-600 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-4xl">📸</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">Dhrishit Khandhar</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Computer Science Student</p>
            <p className="text-lg text-gray-500 dark:text-gray-400">Aspiring Software Engineer & Innovation Enthusiast</p>
          </div>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                I&apos;m a passionate computer science student with a strong foundation in software development 
                and a keen interest in emerging technologies. My goal is to leverage technology to solve 
                real-world problems and make a positive impact.
              </p>
              <p className="text-lg leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or mentoring fellow students in programming fundamentals.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Problem Solving</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
              </div>
              
              <div className="flex justify-between">
                <span>Leadership</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
              
              <div className="flex justify-between">
                <span>Communication</span>
                <span>88%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '88%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300">University Name • 2021 - 2025</p>
              <p className="mt-2">GPA: 3.8/4.0 • Dean&apos;s List • Relevant Coursework: Data Structures, Algorithms, Software Engineering</p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-semibold">High School Diploma</h3>
              <p className="text-gray-600 dark:text-gray-300">School Name • 2017 - 2021</p>
              <p className="mt-2">Valedictorian • AP Computer Science A: 5 • National Honor Society</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
              <p className="text-gray-600 dark:text-gray-300">Tech Company • Summer 2024</p>
              <ul className="mt-4 space-y-2">
                <li>• Developed web applications using React and Node.js</li>
                <li>• Collaborated with cross-functional teams on product features</li>
                <li>• Optimized database queries, improving performance by 30%</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Teaching Assistant</h3>
              <p className="text-gray-600 dark:text-gray-300">University CS Department • 2023 - Present</p>
              <ul className="mt-4 space-y-2">
                <li>• Mentored 50+ students in programming fundamentals</li>
                <li>• Conducted lab sessions and office hours</li>
                <li>• Graded assignments and provided constructive feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Brief description of the project and its key features. Technologies used and impact achieved.
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
              <div className="space-y-4">
                {[
                  { name: 'Python', level: 90 },
                  { name: 'JavaScript', level: 85 },
                  { name: 'Java', level: 80 },
                  { name: 'C++', level: 75 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Frameworks & Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {['React', 'Node.js', 'MongoDB', 'Git', 'Docker', 'AWS', 'PostgreSQL', 'Express'].map((tool) => (
                  <div key={tool} className="bg-white dark:bg-gray-900 p-3 rounded-lg text-center border border-gray-200 dark:border-gray-700">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            I&apos;m always interested in new opportunities and collaborations. Let&apos;s connect!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">dhrishit@example.com</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/dhrishit</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🐙</div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-300">github.com/dhrishit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Dhrishit Khandhar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
