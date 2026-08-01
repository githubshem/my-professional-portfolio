const Contact = () => {
    return (
      <section id="contact" className="py-24 min-h-[70vh] flex items-center justify-center scroll-mt-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-mono text-base md:text-lg mb-5">
            <span className="section-number">05.</span>
            <span className="text-neon-pink-bright neon-text">What's Next?</span>
          </h2>
          <h3 className="text-lightest-slate font-bold text-4xl md:text-5xl mb-5">
            Please get in touch!
          </h3>
          <p className="text-slate text-lg leading-relaxed mb-12">
            I'm currently looking for new opportunities, and my inbox is always open.
          </p>
          <a
            href="mailto:shemsumbelingforwork@gmail.com"
            className="btn-sheen no-touch-callout inline-block px-8 py-4 border border-neon-pink text-neon-pink rounded font-mono text-sm hover:bg-neon-pink/10 hover:shadow-neon-pink transition-all"
            style={{ textShadow: '0 0 10px rgba(255, 0, 110, 0.8)' }}
          >
            Send me an email!
          </a>
        </div>
      </section>
    );
  };

  export default Contact;
