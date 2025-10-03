import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { number: '01', title: 'About', href: '#about' },
    { number: '02', title: 'Experience', href: '#experience' },
    { number: '03', title: 'Work', href: '#projects' },
    { number: '04', title: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-midnight/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
      style={isScrolled ? {boxShadow: '0 10px 30px -10px rgba(255, 0, 110, 0.3), 0 0 20px rgba(139, 10, 26, 0.2)'} : {}}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <a href="#" className="text-neon-pink text-2xl font-mono font-bold hover:text-neon-purple transition-colors neon-text">
            &lt;DevOps Engineer /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group flex items-center text-lightest-slate hover:text-neon-pink transition-colors"
              >
                <span className="text-neon-pink font-mono text-sm mr-1 neon-text">{item.number}.</span>
                <span className="font-mono text-sm">{item.title}</span>
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="px-4 py-2 border-2 border-neon-pink text-neon-pink rounded font-mono text-sm hover:bg-neon-pink/10 hover:shadow-neon-pink transition-all"
              style={{textShadow: '0 0 10px rgba(255, 0, 110, 0.8)'}}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neon-pink text-2xl"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-light-midnight" style={{boxShadow: '0 10px 30px rgba(255, 0, 110, 0.3)'}}>
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.number}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lightest-slate hover:text-neon-pink transition-colors"
              >
                <span className="text-neon-pink font-mono text-sm mr-2 neon-text">{item.number}.</span>
                <span className="font-mono text-sm">{item.title}</span>
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="block text-center px-4 py-2 border-2 border-neon-pink text-neon-pink rounded font-mono text-sm hover:bg-neon-pink/10 transition-all"
              style={{textShadow: '0 0 10px rgba(255, 0, 110, 0.8)'}}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;