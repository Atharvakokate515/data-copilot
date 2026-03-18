

## DATAMIND Visual Reskin — Implementation Plan

19 files total: 1 new (`Navbar.tsx`), 18 modified (visual-only changes).

---

### 1. `src/index.css`
- Add IBM Plex Mono font import
- Replace all `:root` and `.dark` CSS variable values with DATAMIND HSL palette (void, soil, bark, moss, stone, fern, sage, lime, glow, text, muted)
- Add `--color-*` custom properties
- Set `--radius: 4px`
- Body: `font-family: 'IBM Plex Mono', monospace`, `background-color: var(--color-void)`, dot grid via `radial-gradient`
- Add keyframes: `blink-cursor`, `bounce-arrow`, `fade-up`, `pulse-bar`

### 2. `tailwind.config.ts`
- Add `fade-up`, `blink-cursor`, `bounce-arrow`, `pulse-bar` keyframes + animations
- Do NOT change font families

### 3. `src/components/common/Navbar.tsx` (NEW)
- Purely visual, no logic
- Left: "DATA" in `--color-text` + "MIND" in `--color-lime`, italic bold 18px font-mono
- Center: NavLinks to `/`, `/nl2sql`, `/copilot` — uppercase 11px, active state `--color-lime` 2px bottom border
- Right: pulsing dot + "SYSTEM ONLINE" 9px `--color-fern`
- Height 48px, bg `--color-void`, bottom border `--color-moss`

### 4. `src/pages/Home.tsx`
- Add `<Navbar />` as first child inside root div
- Title: split "DATA" (`--color-text`) + "MIND" (`--color-lime`), 96px (48px mobile) font-mono italic bold
- Subtitle: 13px uppercase tracking-[0.18em] `--color-muted`
- Feature buttons: 280×120px, bg `--color-soil`, border `--color-fern`, `rounded-[4px]`
- Add 4 L-bracket corner `<span>` per button (absolute, 8px, 2px borders, `--color-lime`)
- Hover: border `--color-lime`, glow shadow, bottom line width 0→100% transition
- Bouncing ChevronDown arrow at bottom
- Feature sections with IntersectionObserver fade-up (useEffect+useRef, CSS class toggle)

### 5. `src/components/common/Sidebar.tsx`
- Bg `--color-soil`, border `--color-moss`
- Session items: hover bg `--color-moss`, active left border `--color-lime`
- New chat button: border `--color-fern`, text `--color-lime`
- All text: font-mono uppercase text-[11px] tracking-[0.15em]
- All rounded → `rounded-[4px]`

### 6. `src/pages/NL2SQL.tsx`
- Add `<Navbar />` as first child inside root div
- Top bar: bg `--color-void`, border `--color-moss`
- DB badge: dot + "CONNECTED TO [db]" uppercase 9px, `rounded-[4px]`
- Divider: centered "// EXECUTION LAYER" label 9px `--color-fern`
- Empty state: blinking ">" cursor + "CONNECT A DATABASE AND START QUERYING" `--color-fern`
- All rounded → `rounded-[4px]`

### 7. `src/components/common/ChatInput.tsx`
- Restyle only (no conditional logic)
- Bg `--color-soil`, input bg `--color-moss`, border `--color-fern`
- Placeholder: uppercase class
- Send button: bg `--color-lime`, text `--color-void`
- Focus ring: `--color-glow`
- All rounded → `rounded-[4px]`

### 8. `src/components/common/ChatMessage.tsx`
- User: bg `--color-soil`, border `--color-moss`, add "YOU" label span 9px
- Assistant: no bubble, add "DM" circle avatar 24px bg `--color-lime` text `--color-void`, text `--color-muted`
- Error/clarification: restyle with DATAMIND colors
- All rounded → `rounded-[4px]`

### 9. `src/components/common/ThinkingIndicator.tsx`
- "PROCESSING" text + 3 animated dot spans
- Thin `--color-lime` pulsing bar below
- `rounded-[4px]`

### 10. `src/components/common/Modal.tsx`
- Backdrop: `backdrop-blur-[12px]`
- Modal bg `--color-bark`, border `--color-fern`
- `rounded-[4px]`

### 11. `src/components/nl2sql/DBConnectionModal.tsx`
- Input bg `--color-moss`, border `--color-fern`, focus border `--color-lime`
- Labels: uppercase 10px tracking-wide
- Button: bg `--color-lime`, text `--color-void`
- `rounded-[4px]`

### 12. `src/components/nl2sql/ResultsPanel.tsx`
- Tab bar: bg `--color-soil`, active tab bg `--color-void` + 2px bottom border `--color-lime`
- Metadata chips: uppercase 10px font-mono
- SQL block: bg `--color-moss`
- All rounded → `rounded-[4px]`

### 13. `src/components/nl2sql/TableDisplay.tsx`
- Headers: uppercase 10px `--color-fern` tracking-wide
- Row hover: bg `--color-soil` 60% opacity
- Borders: `--color-moss`

### 14. `src/components/nl2sql/PlanInspector.tsx`
- Terminal format: `[01] INTENT ......... value` using decorative spans
- Labels `--color-fern`, values `--color-text`

### 15. `src/components/nl2sql/ChartDisplay.tsx`
- Replace all `hsl(...)` inline strings: grid `#585b28`, bars/lines `#acbe57`, tooltip bg `#4c4e27`, tooltip border `#585b28`, tick fill `#99a870`
- Add decorative chart-type indicator icons (BarChart2, LineChart, PieChart) top-right, active in `--color-lime`, inactive `--color-fern` — read-only indicators of current `chart.type`, no new logic

### 16. `src/pages/Copilot.tsx`
- Add `<Navbar />` as first child inside root div
- Three-column layout: sidebar (240px) | chat (flex-1) | citations panel (280px)
- Citations panel: 280px right column, visible when latest message has citations, controlled by existing messages state (derive `hasCitations` from messages array — no new state)
- Pass `visible` CSS class to CitationsPanel for slide-in
- Empty state: large "DM" 80px `--color-soil`, 3 decorative prompt chips (no onClick)
- Scroll-to-bottom: floating ChevronDown button bg `--color-lime`
- Top bar: DATAMIND colors
- All rounded → `rounded-[4px]`

### 17. `src/components/copilot/CitationsPanel.tsx`
- Add `visible` prop (boolean) for translateX transition — parent controls it
- Wrapper: `transition-transform duration-300`, `translateX(0)` when visible, `translateX(100%)` when not
- Header: "SOURCES" uppercase with count badge in `--color-lime`
- Each card: relevance % top-right, source filename in `--color-lime`, page in `--color-muted`
- Progress bar fill: `--color-lime`
- All rounded → `rounded-[4px]`

### 18. `src/components/copilot/DocUploadModal.tsx`
- Drag zone: dashed border `--color-moss`, dragover → `--color-lime` (toggle CSS class via existing onDragOver/onDrop, add onDragEnter/onDragLeave for visual class only)
- Doc cards: bg `--color-moss`, filenames `--color-lime`
- Button: bg `--color-lime`, text `--color-void`
- All rounded → `rounded-[4px]`

### 19. `src/components/copilot/ToolBadge.tsx`
- Format: `[ RAG ]` / `[ SQL ]` / `[ CHAT ]` uppercase 9px tracking-wide
- SQL: `--color-sage` text, `--color-soil` bg
- RAG: `--color-fern` text, `--color-soil` bg
- Chat: `--color-moss` text, `--color-soil` bg

### 20. `src/components/NavLink.tsx`
- Restyle classes: font-mono uppercase text-[11px] tracking-[0.15em]
- Default color `--color-muted`, active color `--color-lime` with 2px bottom border

---

### Constraints respected
- No changes to: api/client.ts, types/index.ts, main.tsx, App.tsx, hooks, vite.config.ts, package.json, bun.lock, tailwind font families
- No logic/props/handlers/API calls modified
- CitationsPanel slide controlled by parent prop, not internal state
- Copilot prompt chips are purely decorative divs
- ChatInput has no conditional logic added
- Navbar placed as first child inside each page's root div

