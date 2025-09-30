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
                  <span className="text-2xl">📚</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Articles and Books</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;Diving Experiences and Marine Biodiversity Observations in the Andaman and Nicobar Islands&quot;
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">Hornbill Magazine</span> • <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">Published</span> • <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">June-September 2025</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>Publisher:</strong> Bombay Natural History Society (BNHS) • <strong>Role:</strong> Freelance Author
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Published an article describing diving experiences and marine biodiversity observations in the 
                    Andaman and Nicobar Islands, providing detailed insights into underwater ecosystems and marine 
                    life diversity in this biodiverse archipelago.
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;100 FEET UNDER–Embracing the Serenity&quot;
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">Partridge Publishing</span> • <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">Published</span> • <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">2025</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>Publisher:</strong> Partridge Publishing • <strong>Role:</strong> Photographer
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Published underwater photography book featuring marine life photography captured during trips to Bali, 
                    Indonesia, and the Andaman Islands, India (2023-2025). Developed professional underwater photography 
                    skills while documenting marine biodiversity and underwater ecosystems.
                  </p>
                </div>


                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    &quot;The Tale of Vinculoca&quot;
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">BriBooks</span> • <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">Published</span> • <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">2023</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>Publisher:</strong> BriBooks • <strong>Role:</strong> Author
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Selected by school teachers based on interest in English literature to author a short book. 
                    Wrote about a mechanised utopian future where select students from sectors were escorted to 
                    experience the natural world, exploring themes of technology, nature, and human connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}