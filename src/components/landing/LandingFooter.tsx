const LandingFooter = () => (
  <footer className="border-t border-landing-amber/20">
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-0">
        <span className="font-syne font-bold text-lg text-white">Data</span>
        <span className="font-syne font-bold text-lg text-landing-amber">Mind</span>
      </div>
      <p className="font-figtree text-sm text-landing-muted">
        © {new Date().getFullYear()} DataMind. All rights reserved.
      </p>
    </div>
  </footer>
);

export default LandingFooter;
