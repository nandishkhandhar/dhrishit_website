'use client';

export default function ScrollButton() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto">
      <button
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 0.85,
            behavior: 'smooth'
          });
        }}
        className="group flex flex-col items-center gap-2 text-white/90 hover:text-white transition-all duration-300"
      >
        <span className="text-sm font-medium drop-shadow-lg">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 group-hover:border-white transition-colors">
          <div className="w-1.5 h-2 bg-white/80 rounded-full animate-bounce"></div>
        </div>
      </button>
    </div>
  );
}
