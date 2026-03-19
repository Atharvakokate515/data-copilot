import { Database, Brain } from "lucide-react";

const nl2sqlStages = ["Clarifier", "Planner", "Generator", "Validator", "Executor"];
const ragStages = ["Planner Node", "Tool Router", "Synthesis Node"];

const nl2sqlBullets = [
  "Clarifier stage intercepts ambiguous questions before SQL generation, asking targeted follow-ups to resolve missing intent",
  "Self-correcting retry loop feeds execution errors back to the LLM for regeneration, cutting query failure rate by an estimated 60–70%",
  "Word-boundary-aware validator blocks DDL/DCL operations, enforces WHERE clauses on mutations, and whitelists system schemas like information_schema for meta-queries",
  "Auto-suggested Chart.js visualizations based on result shape — bar, line, or pie charts rendered alongside table results in a split-pane view",
  "Session persistence across 3 normalized PostgreSQL tables preserving message history and last SQL for follow-up queries",
];

const ragBullets = [
  "Hybrid RAG chunker uses section-aware splitting for structured documents and sentence-aware splitting for dense prose, discarding sub-50-character noise chunks automatically",
  "BAAI/bge-small-en embeddings stored in ChromaDB, chosen over MiniLM for faster inference with comparable retrieval accuracy",
  "Parallel PDF ingestion via ThreadPoolExecutor with automatic deduplication when a file is re-uploaded",
  "Structured citations per answer — source filename, page number, and confidence score — with a groundedness flag warning when answers lack document evidence",
  "Read-only SQL enforcement inside Copilot — only SELECT queries permitted; mutations require the dedicated NL2SQL pipeline",
];

const PipelinesSection = () => (
  <section id="pipelines" className="relative py-28">
    {/* Top divider */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-landing-amber/50 to-transparent" />
    {/* Bottom divider */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-landing-amber/50 to-transparent" />

    <div className="max-w-7xl mx-auto px-6">
      <span className="font-figtree text-sm text-landing-amber uppercase tracking-widest">Core Architecture</span>
      <h2 className="font-syne font-bold text-[48px] md:text-[56px] text-white mt-2 mb-14">
        Two Independent AI Pipelines
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* NL2SQL Card */}
        <div className="bg-landing-card border border-landing-card-border rounded-[20px] overflow-hidden hover:border-landing-amber/40 transition-all group">
          <div className="h-1.5 bg-landing-amber" />
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-[12px] bg-landing-amber/15 flex items-center justify-center">
                <Database size={22} className="text-landing-amber" />
              </div>
              <div>
                <h3 className="font-syne font-bold text-[22px] text-white">NL2SQL Engine</h3>
              </div>
            </div>
            <p className="font-figtree text-[16px] text-landing-muted leading-relaxed mb-6">
              Transforms plain-English questions into validated, safely executed SQL queries
              against any connected PostgreSQL database — with full multi-turn conversation
              context and auto-correction on failure.
            </p>
            {/* Stage pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {nl2sqlStages.map((s, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="font-figtree text-xs font-semibold text-landing-amber bg-landing-amber/10 border border-landing-amber/30 rounded-full px-3 py-1">
                    {s}
                  </span>
                  {i < nl2sqlStages.length - 1 && <span className="text-landing-muted/40">→</span>}
                </span>
              ))}
            </div>
            <ul className="space-y-3">
              {nl2sqlBullets.map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="text-landing-amber mt-1.5 shrink-0">•</span>
                  <span className="font-figtree text-[15px] text-landing-muted leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RAG Copilot Card */}
        <div className="bg-landing-card border border-landing-card-border rounded-[20px] overflow-hidden hover:border-landing-teal/40 transition-all group">
          <div className="h-1.5 bg-landing-teal" />
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-[12px] bg-landing-teal/15 flex items-center justify-center">
                <Brain size={22} className="text-landing-teal" />
              </div>
              <div>
                <h3 className="font-syne font-bold text-[22px] text-white">RAG Copilot Agent</h3>
              </div>
            </div>
            <p className="font-figtree text-[16px] text-landing-muted leading-relaxed mb-6">
              A 3-tool LangGraph Copilot that intelligently routes every question —
              database analytics, document search, or direct conversation — and
              synthesizes multi-source results into a single grounded answer.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {ragStages.map((s, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="font-figtree text-xs font-semibold text-landing-teal bg-landing-teal/10 border border-landing-teal/30 rounded-full px-3 py-1">
                    {s}
                  </span>
                  {i < ragStages.length - 1 && <span className="text-landing-muted/40">→</span>}
                </span>
              ))}
            </div>
            <ul className="space-y-3">
              {ragBullets.map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="text-landing-teal mt-1.5 shrink-0">•</span>
                  <span className="font-figtree text-[15px] text-landing-muted leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PipelinesSection;
