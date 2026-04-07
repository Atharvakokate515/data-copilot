const infoCards = [
  {
    title: "Zero SQL Knowledge Required",
    desc: "The clarifier and planner stages handle ambiguous questions before they reach SQL generation, preventing failures upstream.",
  },
  {
    title: "Context-Aware Multi-Turn Queries",
    desc: "Session memory persists the last executed SQL and full conversation history, enabling follow-up questions like \"now filter that by region\" without re-explaining context.",
  },
  {
    title: "Source-Attributed Document Answers",
    desc: "Every RAG response includes structured citations with source filename, page number, and a confidence score so users always know where the answer came from.",
  },
  {
    title: "Real-Time Observability",
    desc: "A FastAPI middleware layer logs every request — endpoint, latency, tool used, retry flag, and SQL errors — powering a live metrics dashboard with no extra setup.",
  },
];

const AboutSection = () => (
  <section id="about" className="max-w-7xl mx-auto px-6 py-28">
    {/* Divider */}
    <div className="h-px w-full bg-gradient-to-r from-transparent via-landing-amber/50 to-transparent mb-20" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16"> 
      {/* Left: descriptive text */}
      <div className="space-y-6">
        <p className="font-syne font-bold text-[48px] leading-[1.15] text-white mb-4">
          About <span className="text-landing-amber">DataMind</span>
        </p>
        <p className="font-figtree text-[18px] text-landing-muted leading-relaxed">
          DataMind is an enterprise-grade AI platform that closes the gap between raw
          data and human understanding. It combines two fully independent AI pipelines —
          a Natural Language to SQL Engine and a RAG-powered Document Copilot — into a
          single unified interface.
        </p>
        <p className="font-figtree text-[18px] text-landing-muted leading-relaxed">
          Non-technical users can ask questions like "How many orders were placed last
          month by enterprise clients?" or "What does our refund policy say about
          international customers?" and receive accurate, grounded answers without
          writing SQL or manually searching documents.
        </p>
        <p className="font-figtree text-[18px] text-landing-muted leading-relaxed">
          Each pipeline is a carefully engineered multi-stage LangGraph workflow with
          structured LLM outputs, self-correcting retry loops, safety validation, and
          full observability — built for production reliability.
        </p>
      </div>

      {/* Right: info cards */}
      <div className="space-y-5">
        {infoCards.map((card, i) => (
          <div
            key={i}
            className="border-l-4 border-landing-amber bg-landing-card rounded-[16px] p-6 hover:shadow-[0_0_20px_rgba(245,175,25,0.1)] transition-all"
          >
            <h3 className="font-syne font-bold text-[18px] text-white mb-2">{card.title}</h3>
            <p className="font-figtree text-[16px] text-landing-muted leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
