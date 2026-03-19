import { useState, useEffect } from "react";

const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-landing-bg/80 backdrop-blur-xl border-landing-amber/30"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-0">
          <span className="font-syne font-bold text-xl text-white">Data</span>
          <span className="font-syne font-bold text-xl text-landing-amber">Mind</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {["About", "Pipelines", "Features", "Use Cases", "Tech Stack"].map((label) => (
            <button
              key={label}
              onClick={() => scrollTo(label.toLowerCase().replace(/\s+/g, "-"))}
              className="font-figtree text-[15px] text-landing-muted hover:text-white transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("pipelines")}
            className="hidden sm:inline-flex font-figtree text-[15px] text-landing-amber border border-landing-amber/50 hover:border-landing-amber hover:bg-landing-amber/10 rounded-[14px] px-7 py-3.5 transition-all"
          >
            See How It Works
          </button>
          <button
            onClick={() => scrollTo("features")}
            className="font-figtree text-[15px] font-semibold bg-landing-amber text-landing-bg rounded-[14px] px-7 py-3.5 hover:shadow-[0_0_24px_rgba(245,175,25,0.4)] transition-all"
          >
            Explore Features →
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
