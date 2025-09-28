export default function Publications() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
              <span className="text-3xl">📚</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Literary Publications
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Creative writing and literary contributions exploring the intersection of science and art
            </p>
          </div>

          <div className="space-y-8">
            {/* Poetry Section */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌺</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Poetry</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Hornbill Article - &quot;The Silent Guardians of Our Coasts&quot;
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                    Published in Hornbill Magazine • BNHS • Spring 2024
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Featured article exploring the critical role of mangrove ecosystems in coastal protection 
                    and biodiversity conservation, highlighting urgent conservation needs.
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      &quot;Mangroves stand as nature&apos;s fortress against rising seas, their intricate root systems 
                      weaving together stories of resilience, adaptation, and the delicate balance of coastal life.&quot;
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;100 Feet Under&quot;
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                    Published in Marine Science Quarterly • Summer 2024
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Personal narrative documenting deep-sea diving experiences and underwater research encounters, 
                    capturing the wonder and challenges of marine biology fieldwork.
                  </p>
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      &quot;At 100 feet below, silence speaks volumes. Each bubble carries stories of ancient coral cities 
                      and the urgent whispers of a changing ocean.&quot;
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;The Tale of Vinculoca&quot;
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                    Featured in Biology Literature Review • Fall 2023
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Creative scientific writing piece exploring the fascinating world of marine symbiosis 
                    through the lens of coral-algae relationships, blending scientific accuracy with storytelling.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      &quot;In the tale of Vinculoca, we discover that the smallest partnerships 
                      can build the greatest structures on Earth.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Essays Section */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✍️</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Essays & Articles</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;The Language of Leaves: A Personal Journey into Botany&quot;
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                    Published in Nature Writing Quarterly • Fall 2023
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    A personal narrative exploring how studying plant biology transformed my understanding 
                    of communication in nature, weaving together scientific observation and creative reflection.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                      Nature Writing
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                      Science Communication
                    </span>
                  </div>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;Building Bridges: Science Education in Underserved Communities&quot;
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                    Featured in Educational Outreach Journal • Winter 2024
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    An analytical piece examining the importance of accessible science education and 
                    sharing strategies developed through community tutoring experiences.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                      Education
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                      Community Outreach
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Short Stories Section */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📖</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Short Fiction</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;The Last Coral&quot;
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                    Winner, Environmental Fiction Contest • University Press • 2024
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    A speculative fiction piece set in a future where marine biologists race to save 
                    the last remaining coral reef. Draws from real research to create a compelling narrative 
                    about conservation and hope.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      Science Fiction
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                      Environmental
                    </span>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                      Award Winner
                    </span>
                  </div>
                </div>

                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;Lab Partners&quot;
                  </h3>
                  <p className="text-rose-600 dark:text-rose-400 font-medium mb-3">
                    Published in Campus Literary Annual • 2023
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    A humorous short story about the unexpected friendship that develops between 
                    two very different biology students during a challenging molecular biology course.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 rounded-full text-sm">
                      Humor
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                      Academic Life
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog/Opinion Pieces */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💭</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Opinion & Commentary</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;Why Every Biology Student Should Write&quot;
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">University Science Blog • March 2024</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Exploring how creative writing enhances scientific thinking and communication skills.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;The Poetry of Photosynthesis&quot;
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Science & Arts Magazine • January 2024</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Finding artistic inspiration in biological processes and natural phenomena.
                  </p>
                </div>
              </div>
            </div>

            {/* Recognition */}
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Literary Recognition
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Environmental Fiction Award</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">University Press • 2024</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📝</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Featured Writer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Science Communication Workshop • 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}