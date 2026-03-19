const useCases = [
  {
    num: "01",
    title: "Business Analysts & Operations Teams",
    desc: 'Ask "How many orders were delayed last quarter by region?" directly against live PostgreSQL data without a SQL editor. Get chart-ready results in seconds with zero technical knowledge.',
  },
  {
    num: "02",
    title: "Legal & Compliance Teams",
    desc: 'Upload contracts, policies, and compliance documents. Ask "What does our refund policy say about international customers?" and get page-level cited answers instead of manually scanning PDFs.',
  },
  {
    num: "03",
    title: "Product & Growth Teams",
    desc: 'Run multi-turn analytical queries like "Show me retention by cohort, now filter for mobile users" — with full conversation context preserved so each follow-up builds on the previous result.',
  },
  {
    num: "04",
    title: "Engineering & Data Teams",
    desc: "Use the observability dashboard to monitor query latency, retry rates, SQL error patterns, and tool usage across both pipelines — without adding any instrumentation code.",
  },
];

const UseCasesSection = () => (
  <section id="use-cases" className="relative py-28">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-landing-amber/50 to-transparent" />

    <div className="max-w-7xl mx-auto px-6">
      <span className="font-figtree text-sm text-landing-amber uppercase tracking-widest">Applications</span>
      <h2 className="font-syne font-bold text-[48px] md:text-[56px] text-white mt-2 mb-14">Use Cases</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {useCases.map((uc) => (
          <div
            key={uc.num}
            className="bg-landing-card border border-landing-card-border rounded-[20px] p-8 hover:border-landing-amber/40 hover:shadow-[0_0_24px_rgba(245,175,25,0.1)] transition-all relative overflow-hidden"
          >
            <span className="absolute top-4 right-6 font-syne font-extrabold text-[72px] text-white/[0.04] leading-none select-none">
              {uc.num}
            </span>
            <h3 className="font-syne font-bold text-[20px] text-white mb-3 relative">{uc.title}</h3>
            <p className="font-figtree text-[16px] text-landing-muted leading-relaxed relative">{uc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
