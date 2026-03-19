const stats = [
  "5-Stage NL2SQL Pipeline",
  "~65% Fewer Query Failures",
  "8 Normalized DB Tables",
  "3-Tool Copilot Agent",
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      {/* Badge */}
      <div className="flex items-center gap-2.5 border border-landing-amber/40 rounded-full px-5 py-2 mb-8">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-landing-amber opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-landing-amber" />
        </span>
        <span className="font-figtree text-sm text-landing-amber">
          Enterprise AI Data Platform · Built with LangGraph + FastAPI
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-syne font-extrabold text-[48px] sm:text-[64px] md:text-[80px] leading-[1.05] text-center text-white max-w-5xl mb-6">
        Query Data & Documents{" "}
        <span className="text-landing-amber">in Plain English</span>
      </h1>

      {/* Subtext */}
      <p className="font-figtree text-[18px] md:text-[20px] text-landing-muted text-center max-w-3xl leading-relaxed mb-10">
        DataMind eliminates the barrier between non-technical users and their data.
        Ask questions in natural language — get SQL queries, chart-ready results, and
        document-grounded answers in seconds. Zero SQL knowledge required.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <button
          onClick={() => scrollTo("pipelines")}
          className="font-figtree text-[17px] font-semibold bg-landing-amber text-landing-bg rounded-[16px] px-8 py-4 hover:shadow-[0_0_32px_rgba(245,175,25,0.45)] transition-all"
        >
          Explore the Pipelines →
        </button>
        <button
          onClick={() => scrollTo("about")}
          className="font-figtree text-[17px] text-landing-amber border border-landing-amber/50 hover:border-landing-amber hover:bg-landing-amber/10 rounded-[16px] px-8 py-4 transition-all"
        >
          Learn More
        </button>
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap items-center justify-center gap-0">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center">
            <span className="font-figtree text-sm md:text-[15px] text-landing-muted px-4 md:px-6 text-center">
              {stat}
            </span>
            {i < stats.length - 1 && (
              <span className="hidden sm:block w-px h-5 bg-landing-muted/30" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
