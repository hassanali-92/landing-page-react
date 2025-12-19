const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        
        <p className="text-sm">
          © 2025 MovieVerse. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
