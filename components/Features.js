function Features() {
  try {
    const features = [
      {
        icon: 'rocket',
        title: 'Lightning Fast',
        description: 'Experience blazing fast performance that keeps your users engaged and coming back for more.'
      },
      {
        icon: 'shield-check',
        title: 'Secure & Reliable',
        description: 'Enterprise-grade security ensures your data is protected with the highest standards.'
      },
      {
        icon: 'sparkles',
        title: 'AI-Powered',
        description: 'Leverage cutting-edge AI technology to automate and optimize your workflows.'
      },
      {
        icon: 'users',
        title: 'Team Collaboration',
        description: 'Work seamlessly with your team using powerful collaboration tools built for productivity.'
      },
      {
        icon: 'chart-bar',
        title: 'Analytics Dashboard',
        description: 'Get actionable insights with beautiful dashboards and real-time analytics.'
      },
      {
        icon: 'globe',
        title: 'Global Scale',
        description: 'Deploy worldwide with our global infrastructure for optimal performance everywhere.'
      }
    ];

    return (
      <section 
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        data-name="features"
        data-file="components/Features.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to succeed, all in one platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 bg-[var(--bg-light)] rounded-2xl hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
                  <div className={`icon-${feature.icon} text-2xl text-white`}></div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}