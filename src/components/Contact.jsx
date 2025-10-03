const Contact = () => {
    return (
      <section id="contact" className="py-24 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h2 className="text-green font-mono text-base md:text-lg mb-5">
            04. What's Next?
          </h2>
          <h3 className="text-lightest-slate font-bold text-4xl md:text-5xl mb-5">
            Get In Touch
          </h3>
          <p className="text-slate text-lg leading-relaxed mb-12">
            I'm currently looking for new opportunities, and my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get
            back to you!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-7 py-5 border border-green text-green rounded font-mono text-sm hover:bg-green/10 transition-all"
          >
            Say Hello
          </a>
        </div>
      </section>
    );
  };
  
  export default Contact;