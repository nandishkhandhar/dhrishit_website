'use client';

export default function HornbillArticle() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Underwater Realms
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Published in Hornbill Magazine - BNHS | June-September 2025
            </p>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="w-full h-[85vh] min-h-[600px]">
              <iframe
                src="/hornbillarticle.pdf#page=24"
                className="w-full h-full border-0"
                title="Hornbill Magazine Article"
                style={{
                  display: 'block',
                  border: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
