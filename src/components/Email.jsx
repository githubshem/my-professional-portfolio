const Email = () => {
    return (
      <div className="hidden md:block fixed right-8 bottom-0 z-10">
        <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-light-slate after:mt-6">
          <a
            href="mailto:shemsumbelingforwork@gmail.com"
            className="text-light-slate hover:text-green hover:-translate-y-1 transition-all font-mono text-sm"
            style={{ writingMode: 'vertical-rl' }}
          >
            shemsumbelingforwork@gmail.com
          </a>
        </div>
      </div>
    );
  };
  
  export default Email;