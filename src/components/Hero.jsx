import casualAttire from '../assets/casual-attire.png';

const Hero = () => {
    return (
      <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative">
        <div className="w-full relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Hero Text Content */}
          <div className="flex-1 animate-fade-in md:max-w-2xl">
            <h1 className="text-neon-pink font-mono text-base md:text-lg mb-5 neon-text">
              Hi, my name is
            </h1>
            <h2 className="text-lightest-slate font-bold text-4xl md:text-6xl lg:text-7xl mb-3" style={{textShadow: '0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(185, 28, 46, 0.3)'}}>
              Your Name.
            </h2>
            <h3 className="text-neon-purple font-bold text-3xl md:text-5xl lg:text-6xl mb-5" style={{textShadow: '0 0 20px rgba(185, 103, 255, 0.6)'}}>
              I build things for the web.
            </h3>
            <p className="text-slate max-w-2xl text-base md:text-lg leading-relaxed mb-12">
              I'm a full-stack developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products at{' '}
              <a href="#" className="text-neon-cyan hover:text-neon-pink transition-colors neon-text">
                @Company
              </a>
              .
            </p>
            <a
              href="#projects"
              className="inline-block px-7 py-5 border-2 border-neon-pink text-neon-pink rounded font-mono text-sm hover:bg-neon-pink/10 hover:shadow-neon-pink transition-all"
              style={{textShadow: '0 0 10px rgba(255, 0, 110, 0.8)'}}
            >
              Check out my work!
            </a>
          </div>

          {/* Retro Synthwave Profile Picture */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative group">
              {/* VHS Frame Container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[450px]">
                {/* Outer Glow - Multiple Layers */}
                <div className="absolute -inset-8 bg-gradient-to-br from-neon-pink/30 via-neon-purple/30 to-neon-cyan/30 blur-3xl animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-tr from-maroon/40 to-neon-magenta/40 blur-2xl opacity-60"></div>
                
                {/* Retro TV Frame */}
                <div className="relative w-full h-full bg-gradient-to-br from-light-midnight to-midnight p-4 rounded-lg shadow-2xl"
                     style={{
                       boxShadow: `
                         0 0 30px rgba(255, 0, 110, 0.4),
                         0 0 60px rgba(139, 10, 26, 0.3),
                         inset 0 0 20px rgba(0, 0, 0, 0.8)
                       `
                     }}>
                  
                  {/* Corner Brackets - Retro Tech Style */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-neon-pink" 
                       style={{boxShadow: '0 0 15px rgba(255, 0, 110, 0.8)'}}></div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-neon-cyan"
                       style={{boxShadow: '0 0 15px rgba(5, 217, 232, 0.8)'}}></div>
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-neon-purple"
                       style={{boxShadow: '0 0 15px rgba(185, 103, 255, 0.8)'}}></div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-neon-magenta"
                       style={{boxShadow: '0 0 15px rgba(255, 20, 147, 0.8)'}}></div>
                  
                  {/* Main Image Container with Multiple Effects */}
                  <div className="relative w-full h-full overflow-hidden rounded border-4 border-maroon"
                       style={{
                         boxShadow: `
                           inset 0 0 40px rgba(139, 10, 26, 0.6),
                           0 0 20px rgba(255, 0, 110, 0.5)
                         `
                       }}>
                    
                    {/* Casual Attire Image */}
                    <img 
                      src={casualAttire} 
                      alt="Profile in casual attire"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Retro Color Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-neon-cyan/10 mix-blend-overlay"></div>
                    
                    {/* VHS Scan Lines */}
                    <div className="absolute inset-0 opacity-30 pointer-events-none"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 110, 0.1) 2px, rgba(255, 0, 110, 0.1) 4px)'
                         }}>
                    </div>
                    
                    {/* Animated Scan Line Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent opacity-60" 
                         style={{animation: 'scan 3s linear infinite'}}>
                    </div>
                    
                    {/* Chromatic Aberration Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style={{
                           mixBlendMode: 'screen',
                           background: 'linear-gradient(90deg, rgba(255,0,110,0.1) 0%, transparent 50%, rgba(5,217,232,0.1) 100%)'
                         }}>
                    </div>
                    
                    {/* Corner LED Indicators */}
                    <div className="absolute top-2 right-2 flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" 
                           style={{boxShadow: '0 0 10px rgba(255, 0, 110, 1)', animationDuration: '1s'}}></div>
                      <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" 
                           style={{boxShadow: '0 0 10px rgba(5, 217, 232, 1)', animationDuration: '1.5s'}}></div>
                    </div>
                    
                    {/* Bottom Status Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-maroon/80 via-neon-pink/80 to-neon-purple/80 backdrop-blur-sm py-2 px-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-mono text-xs neon-text">LIVE</span>
                        <div className="flex gap-1">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-1 h-3 bg-neon-cyan" 
                                 style={{
                                   opacity: Math.random() * 0.5 + 0.5,
                                   animation: `pulse ${1 + Math.random()}s infinite`
                                 }}></div>
                          ))}
                        </div>
                        <span className="text-white font-mono text-xs">◉ REC</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Side Control Panel Indicators */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-neon-pink to-maroon rounded-full"
                         style={{boxShadow: '0 0 10px rgba(255, 0, 110, 0.8)'}}></div>
                    <div className="w-2 h-8 bg-gradient-to-b from-neon-purple to-electric-violet rounded-full"
                         style={{boxShadow: '0 0 10px rgba(185, 103, 255, 0.8)'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;