function Header() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <div className="icon-zap text-xl text-white"></div>
              </div>
              <span className="text-2xl font-bold text-gradient">Elevate</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Features</a>
              <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">About</a>
              <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Contact</a>
            </nav>
            
            <button className="px-6 py-2 gradient-bg text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}