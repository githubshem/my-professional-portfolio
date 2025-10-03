import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import Email from './components/Email';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-navy flex items-center justify-center">
        <div className="text-green text-4xl font-mono animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-navy min-h-screen text-slate relative">
      {/* Global Synthwave Grid Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 0, 110, 0.15) 2px, transparent 2px),
          linear-gradient(90deg, rgba(255, 0, 110, 0.15) 2px, transparent 2px),
          linear-gradient(rgba(139, 10, 26, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 10, 26, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
      }}></div>
      
      {/* Radial gradient overlay for depth */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-midnight/50 to-midnight pointer-events-none z-0"></div>
      
      <CustomCursor />
      <Navbar />
      <SocialLinks />
      <Email />
      
      <main className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;