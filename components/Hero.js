function Hero() {
  try {
    return (
      <section 
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <div className="icon-sparkles text-base text-[var(--primary-color)]"></div>
              <span className="text-sm font-medium text-[var(--text-secondary)]">Transform Your Digital Presence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Something
              <span className="text-gradient"> Extraordinary</span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
              Elevate your business with cutting-edge solutions that drive results. 
              Join thousands of companies transforming their digital future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 gradient-bg text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white text-[var(--primary-color)] border-2 border-[var(--primary-color)] rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}