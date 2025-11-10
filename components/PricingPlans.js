function PricingPlans() {
  try {
    const plans = [
      {
        name: 'Starter',
        price: '29',
        description: 'Perfect for individuals and small teams',
        features: [
          'Up to 5 team members',
          '10GB storage',
          'Basic analytics',
          'Email support',
          'Mobile app access'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: '79',
        description: 'For growing teams and businesses',
        features: [
          'Up to 25 team members',
          '100GB storage',
          'Advanced analytics',
          'Priority support',
          'API access',
          'Custom integrations'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '199',
        description: 'For large organizations',
        features: [
          'Unlimited team members',
          'Unlimited storage',
          'Enterprise analytics',
          '24/7 phone support',
          'Dedicated account manager',
          'Custom contracts',
          'SLA guarantee'
        ],
        popular: false
      }
    ];

    return (
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        data-name="pricing-plans"
        data-file="components/PricingPlans.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-[var(--primary-color)] text-white shadow-2xl scale-105' 
                    : 'bg-[var(--bg-light)]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[var(--accent-color)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : ''}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.popular ? 'text-indigo-100' : 'text-[var(--text-secondary)]'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={plan.popular ? 'text-indigo-100' : 'text-[var(--text-secondary)]'}>/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <div className={`icon-check text-lg ${plan.popular ? 'text-white' : 'text-[var(--primary-color)]'}`}></div>
                      <span className={plan.popular ? 'text-indigo-50' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-[var(--primary-color)] hover:bg-gray-50'
                      : 'gradient-bg text-white hover:opacity-90'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('PricingPlans component error:', error);
    return null;
  }
}