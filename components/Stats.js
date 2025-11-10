function Stats() {
  try {
    const stats = [
      { number: '10K+', label: 'Active Users' },
      { number: '99.9%', label: 'Uptime' },
      { number: '50M+', label: 'Requests Daily' },
      { number: '24/7', label: 'Support' }
    ];

    return (
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg"
        data-name="stats"
        data-file="components/Stats.js"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-indigo-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Stats component error:', error);
    return null;
  }
}