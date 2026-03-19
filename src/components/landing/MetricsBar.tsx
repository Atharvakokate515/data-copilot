const metrics = [
  "~65% Reduction in Query Failures",
  "5 Stages NL2SQL Pipeline Depth",
  "3 Tools Copilot Agent Routing",
  "8 Tables Normalized PostgreSQL Schema",
  "100% Source-Attributed RAG Answers",
];

const MetricsBar = () => (
  <section className="bg-landing-amber py-6">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-0">
      {metrics.map((m, i) => (
        <div key={i} className="flex items-center">
          <span className="font-figtree text-[14px] md:text-[15px] font-semibold text-landing-bg px-4 md:px-5 py-2 text-center whitespace-nowrap">
            {m}
          </span>
          {i < metrics.length - 1 && (
            <span className="hidden md:block w-px h-5 bg-landing-bg/25" />
          )}
        </div>
      ))}
    </div>
  </section>
);

export default MetricsBar;
