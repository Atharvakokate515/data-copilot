import { RefreshCw, Shield, MessageSquare, FileText, BarChart3, Activity, Link2, Key, Puzzle } from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Self-Correcting SQL Retry",
    desc: "When generated SQL fails, the error is fed back to the LLM as explicit context. It regenerates and re-validates before retrying — no human intervention needed on recoverable failures.",
    badge: "~60–70% failure reduction",
  },
  {
    icon: Shield,
    title: "Multi-Layer SQL Safety",
    desc: "Word-boundary regex prevents false positives. DDL/DCL keywords are blocked. UPDATE and DELETE require WHERE clauses. System schemas like information_schema are whitelisted for meta-queries.",
    badge: "Zero unsafe executions",
  },
  {
    icon: MessageSquare,
    title: "Multi-Turn Context Memory",
    desc: "Full conversation history and last executed SQL are persisted per session. Follow-up queries like \"now group by city\" resolve correctly without re-explaining intent.",
    badge: "3 normalized tables",
  },
  {
    icon: FileText,
    title: "Hybrid RAG Chunking",
    desc: "Section-aware boundaries for structured content, sentence-aware for dense prose. Chunks under 50 characters discarded as noise. Parallel ingestion with deduplication on re-upload.",
    badge: "Dual-strategy chunker",
  },
  {
    icon: BarChart3,
    title: "Auto Chart Suggestions",
    desc: "After every SELECT query, result shape is analyzed. Bar, line, pie, or table charts are suggested automatically based on column types and row count — rendered in a live split-pane view.",
    badge: "4 chart types",
  },
  {
    icon: Activity,
    title: "Real-Time Observability",
    desc: "A FastAPI middleware layer silently logs every API request — latency, tool used, SQL errors, retry flag, and success rate — aggregated into a live metrics dashboard.",
    badge: "Per-request telemetry",
  },
  {
    icon: Link2,
    title: "Citation-Backed Answers",
    desc: "Every RAG response includes source filename, page number, and confidence score. A groundedness flag warns users when answers lack document evidence and may come from general LLM knowledge.",
    badge: "100% attributed outputs",
  },
  {
    icon: Key,
    title: "Server-Side Session Management",
    desc: "Session and chat IDs are generated server-side as UUIDs. Clients never supply their own IDs. The server returns the assigned ID on first response which the frontend persists.",
    badge: "Production-safe IDs",
  },
  {
    icon: Puzzle,
    title: "Persistent Cross-Tab State",
    desc: "DB connection and document readiness stored in shared React context. Switching between NL2SQL and Copilot tabs preserves full state — no re-connection or re-upload required.",
    badge: "Zero re-auth friction",
  },
];

const FeaturesSection = () => (
  <section id="features" className="max-w-7xl mx-auto px-6 py-28">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-landing-amber/50 to-transparent mb-20" />

    <span className="font-figtree text-sm text-landing-amber uppercase tracking-widest">Capabilities</span>
    <h2 className="font-syne font-bold text-[48px] md:text-[56px] text-white mt-2 mb-14">Features</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => {
        const Icon = f.icon;
        return (
          <div
            key={i}
            className="bg-landing-card border border-landing-card-border rounded-[20px] p-7 hover:border-landing-amber/40 hover:shadow-[0_0_24px_rgba(245,175,25,0.12)] transition-all group"
          >
            <div className="w-11 h-11 rounded-[12px] bg-landing-amber/10 flex items-center justify-center mb-5 group-hover:bg-landing-amber/20 transition-colors">
              <Icon size={22} className="text-landing-amber" />
            </div>
            <h3 className="font-syne font-bold text-[18px] text-white mb-2">{f.title}</h3>
            <p className="font-figtree text-[15px] text-landing-muted leading-relaxed mb-4">{f.desc}</p>
            <span className="inline-block font-figtree text-xs font-semibold text-landing-amber bg-landing-amber/10 border border-landing-amber/25 rounded-full px-3 py-1">
              {f.badge}
            </span>
          </div>
        );
      })}
    </div>
  </section>
);

export default FeaturesSection;
