import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    // Auto-close if resized up to the desktop layout
    const desktopQuery = window.matchMedia('(min-width: 768px)');
    const handleDesktop = (e) => {
      if (e.matches) setIsMobileMenuOpen(false);
    };
    desktopQuery.addEventListener('change', handleDesktop);

    firstLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      desktopQuery.removeEventListener('change', handleDesktop);
      menuButtonRef.current?.focus();
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { number: '01', title: 'About', href: '#about' },
    { number: '02', title: 'Experience', href: '#experience' },
    { number: '03', title: 'Work', href: '#projects' },
    { number: '04', title: 'Certifications', href: '#certifications' },
    { number: '05', title: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-midnight/95 backdrop-blur-sm' : 'bg-transparent'
      } ${isScrolled && !isMobileMenuOpen ? 'shadow-glow-pink' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <a href="#" className="text-neon-pink text-2xl font-mono font-bold hover:text-neon-purple transition-colors neon-text">
            &lt;Platform Engineer /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group flex items-center text-lightest-slate hover:text-neon-pink transition-colors"
              >
                <span className="text-neon-pink-bright font-mono text-sm mr-1 neon-text">{item.number}.</span>
                <span className="font-mono text-sm">{item.title}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden relative z-50 p-3 -mr-3 text-neon-pink text-2xl rounded"
          >
            <span className={`block transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Scrim */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
        className={`md:hidden fixed top-0 left-0 w-full h-screen z-40 bg-midnight/70 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Menu Drawer */}
      <aside
        id="mobile-menu"
        inert={!isMobileMenuOpen}
        aria-hidden={!isMobileMenuOpen}
        className={`md:hidden fixed top-0 right-0 z-40 h-screen w-3/4 max-w-sm bg-light-midnight/75 backdrop-blur-md border-l border-neon-pink/20 shadow-glow-drawer flex flex-col items-center justify-center gap-2 px-8 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item, i) => (
          <a
            key={item.number}
            ref={i === 0 ? firstLinkRef : undefined}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ transitionDelay: isMobileMenuOpen ? `${100 + i * 50}ms` : '0ms' }}
            className={`block w-full text-center py-4 font-mono text-lightest-slate hover:text-neon-pink transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            <span className="block text-neon-pink-bright text-sm mb-1 neon-text">{item.number}.</span>
            <span className="text-lg">{item.title}</span>
          </a>
        ))}
      </aside>
    </nav>
  );
};

export default Navbar;
