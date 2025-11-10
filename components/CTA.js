function CTA() {
  try {
    return (
      <section 
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-indigo-50"
        data-name="cta"
        data-file="components/CTA.js"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8">
            Join thousands of companies already using Elevate to transform their business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 gradient-bg text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
              Start Your Free Trial
            </button>
            <button className="px-8 py-4 bg-white text-[var(--primary-color)] border-2 border-[var(--primary-color)] rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CTA component error:', error);
    return null;
  }
}