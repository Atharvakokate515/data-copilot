const techStack = [
  { name: "LangGraph", role: "Multi-stage AI pipeline orchestration" },
  { name: "FastAPI", role: "High-performance async backend API" },
  { name: "PostgreSQL", role: "Relational session and metadata storage" },
  { name: "ChromaDB", role: "Vector store for RAG embeddings" },
  { name: "React + TypeScript", role: "Type-safe interactive frontend" },
  { name: "BAAI/bge-small-en", role: "Document embedding model" },
  { name: "Pydantic", role: "Structured LLM output validation" },
  { name: "Vitest", role: "Frontend unit testing" },
];

const TechStackSection = () => (
  <section id="tech-stack" className="max-w-7xl mx-auto px-6 py-28">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-landing-amber/50 to-transparent mb-20" />

    <span className="font-figtree text-sm text-landing-amber uppercase tracking-widest">Infrastructure</span>
    <h2 className="font-syne font-bold text-[48px] md:text-[56px] text-white mt-2 mb-14">Tech Stack</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {techStack.map((t, i) => (
        <div
          key={i}
          className="bg-landing-card border border-landing-card-border rounded-[16px] p-6 hover:border-landing-amber/40 hover:shadow-[0_0_20px_rgba(245,175,25,0.1)] hover:-translate-y-1 transition-all"
        >
          <h3 className="font-syne font-bold text-[17px] text-white mb-1.5">{t.name}</h3>
          <p className="font-figtree text-[14px] text-landing-muted">{t.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TechStackSection;
