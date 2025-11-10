function PricingHero() {
  try {
    return (
      <section 
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
        data-name="pricing-hero"
        data-file="components/PricingHero.js"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent
            <span className="text-gradient"> Pricing</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>
    );
  } catch (error) {
    console.error('PricingHero component error:', error);
    return null;
  }
}