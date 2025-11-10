function PricingFAQ() {
  try {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
      {
        question: 'Can I change plans later?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.'
      },
      {
        question: 'Is there a free trial?',
        answer: 'Yes, all plans come with a 14-day free trial. No credit card required to start.'
      },
      {
        question: 'What happens when I reach my limit?',
        answer: "We'll notify you when you're approaching your limits. You can upgrade anytime to continue without interruption."
      }
    ];

    return (
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-indigo-50"
        data-name="pricing-faq"
        data-file="components/PricingFAQ.js"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <div className={`icon-chevron-down text-xl text-[var(--primary-color)] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}></div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 text-[var(--text-secondary)]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('PricingFAQ component error:', error);
    return null;
  }
}