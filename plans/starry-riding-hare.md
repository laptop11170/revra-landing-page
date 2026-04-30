# Light Mode Implementation Plan for RevRa Landing Page

## Context

The landing page is currently dark-only with all colors locked to dark values. The goal is to add a fully functional light mode that maintains the premium, attractive aesthetic of the current design — preserving gradients, glows, glassmorphism, and brand identity (violet #a078ff and cyan #00cbe6).

The current system uses CSS custom properties in `globals.css` (`:root` and `.dark` are identical) mapped to Tailwind via `tailwind.config.ts`. Dark mode is enforced via a hardcoded `.dark` class on the `<body>` in `layout.tsx`.

---

## Architecture

**Theme switcher:** Context-based (`ThemeProvider`) with class toggle on `<html>`. Default: dark (current behavior). localStorage persistence + system preference detection.

**Color strategy:** CSS custom properties for all semantic tokens. Surface elevation system (container-lowest → container-highest) needs light equivalents. Brand colors (primary violet, secondary cyan) stay the same — only the surface colors they sit on change.

**What changes:**
- `src/styles/globals.css` — add `.light` block, surface variables, glow variants, scrollbar overrides
- `tailwind.config.ts` — surface colors mapped to CSS vars, new glow shadows, light keyframes
- `src/context/theme-provider.tsx` — NEW file, React context + useTheme hook
- `src/app/layout.tsx` — wrap with ThemeProvider, remove hardcoded `.dark`
- `src/components/navbar.tsx` — add Sun/Moon toggle button
- ALL component files — replace hardcoded surface hex values and `border-white/X` with theme-aware alternatives

**What stays the same:** Brand colors, font families, spacing, border-radius, animation timings.

---

## Phase 1: Foundation

### 1. Create `src/context/theme-provider.tsx`
- `ThemeProvider` component using `useState` + `useEffect` for localStorage and system preference
- `useTheme()` hook returning `{ theme, toggleTheme }`
- On theme change: remove `.dark`/`.light` from `<html>`, add new class, persist to localStorage

### 2. Update `src/app/layout.tsx`
- Wrap `<ClerkWrapper>` inside `<ThemeProvider>`
- Remove `dark` class from body `className`
- Replace `bg-[#101010]` with `bg-background`
- Remove `suppressHydrationWarning` from `<html>`

### 3. Update `src/styles/globals.css`
- Rename `:root` block → `.dark` block (current dark values)
- Add `.light` block with light-mode semantic tokens:
  - `--background: 220 20% 97%` (#f5f7fb)
  - `--foreground: 222 47% 11%` (#0d1527)
  - `--primary: 266 100% 55%` (#8b5cf6, deeper violet for contrast on light)
  - `--secondary: 187 100% 45%` (#00a8cc, deeper cyan)
  - `--muted: 220 15% 90%`, `--muted-foreground: 220 13% 45%`
  - `--border: 266 15% 80%`
  - `--input: 220 15% 90%`
  - `--card: 220 20% 97%`, `--card-foreground: 222 47% 11%`
- Add surface CSS variables for both themes:
  - Dark: `--surface: #0c1324`, `--surface-container: #191f31`, `--surface-container-lowest: #070d1f`, etc.
  - Light: `--surface: #f8f9fc`, `--surface-container: #ffffff`, `--surface-container-lowest: #e4e7f0`, etc.
- Add light mode glow utilities:
  ```css
  .light .glow-secondary { box-shadow: 0 0 15px rgba(0, 168, 204, 0.2); }
  .light .glow-primary { box-shadow: 0 0 15px rgba(139, 92, 246, 0.2); }
  .light .animate-glow { animation: pulse-glow-light 2s ease-in-out infinite; }
  ```
- Add light mode `::selection` and `::-webkit-scrollbar-track` overrides

### 4. Update `tailwind.config.ts`
- Change `surface` colors from hardcoded hex to `hsl(var(--surface-*))` — map to CSS variables
- Add light keyframe for `pulse-glow`:
  ```ts
  'pulse-glow-light': {
    '0%, 100%': { boxShadow: '0 0 5px rgba(0, 168, 204, 0.3), 0 0 20px rgba(0, 168, 204, 0.2)' },
    '50%': { boxShadow: '0 0 20px rgba(0, 168, 204, 0.5), 0 0 40px rgba(0, 168, 204, 0.3)' },
  }
  ```
- Add light `animate-glow-light` animation
- Add light box shadows:
  ```ts
  'glow-primary-light': '0 0 15px rgba(139, 92, 246, 0.2)',
  'glow-secondary-light': '0 0 15px rgba(0, 168, 204, 0.2)',
  ```

---

## Phase 2: Core Components

### 5. Add theme toggle to `src/components/navbar.tsx`
- Import `useTheme` from context
- Add toggle button with Sun icon (light) / Moon icon (dark) — placed between nav links and auth buttons
- Replace navbar background `rgba(5, 5, 5, 0.8)` with `rgba(var(--background) / 0.85)` via framer-motion
- Replace `border-white/10` with `border-border/40` (more visible in light mode)
- Replace `text-slate-400` → `text-muted-foreground`, `text-white` → `text-foreground`
- Add toggle to mobile menu as well

### 6. Update `src/components/hero.tsx`
- Grid background `rgba(255,255,255,0.03)` → theme-aware via CSS class targeting `.dark &` and `.light &`
- Gradient orbs (purple/cyan blobs) — keep brand colors, adjust opacity for light mode backdrop

### 7. Update `src/components/features.tsx`
- `bg-surface-container-lowest/60` → `bg-card/60`
- `border border-white/10` → `border border-border/40`
- `border-white/30` (gradient lines on top of cards) → `border-border/30`
- `bg-surface-container` → `bg-muted`
- `bg-surface-variant` → `bg-accent`
- Inline `bg-[#191f31]` styles → use CSS class `bg-surface-container`
- Hover glow shadows `shadow-[0_0_20px_rgba(160,120,255,0.3)]` → theme-aware version via CSS variable or `shadow-glow-primary-light`

### 8. Update `src/components/perks.tsx`
- Same surface/border replacements as features.tsx
- Terminal header `bg-surface-container` → `bg-muted`

---

## Phase 3: Remaining Components

### 9. Update `src/components/how-it-works.tsx`
- `bg-surface-container-lowest/40` → `bg-card/40`
- `border border-white/10` → `border border-border/40`

### 10. Update `src/components/testimonials.tsx`
- `bg-surface-container-lowest/60` → `bg-card/60`
- `border border-white/10` → `border border-border/40`

### 11. Update `src/components/pricing.tsx`
- `bg-surface-container-lowest/80` → `bg-card/80`
- `bg-surface-container` → `bg-muted`
- `border border-primary/30` → `border border-primary/40`
- `border-white/10` → `border border-border/40`
- Toggle switch `bg-surface-container p-1` → `bg-muted p-1`
- Select `bg-surface` → `bg-muted`

### 12. Update `src/components/cta.tsx`
- `bg-surface-container` → `bg-muted`
- `border-white/10` → `border border-border/40`
- `border-t border-white/20` on buttons → `border-t border-foreground/10`
- Radial gradient background stays (brand glow on surface)

### 13. Update `src/components/footer.tsx`
- `bg-[#050505]` → `bg-background`
- `border-white/5` → `border-border/30`
- `text-slate-500` → `text-muted-foreground`

### 14. Update `src/components/faq.tsx`
- `bg-surface-container-lowest/60` → `bg-card/60`
- Accordion trigger hover text → `text-foreground`

### 15. Update remaining component files
- `section-badge.tsx`: `bg-neutral-800` → `bg-muted`
- `platform-metrics.tsx`: `bg-surface-container-lowest/60` → `bg-card/60`
- `hexagon-background.tsx`: align existing dark/light classes with CSS variables

---

## Phase 4: Polish

### 16. Inline hardcoded hex cleanup
- Search all component files for `bg-[#` patterns — convert to theme-aware alternatives
- Replace `text-[#dce1fb]` with `text-foreground`, `text-[#050505]` with `text-foreground`
- Replace `rgba(255,255,255,` with theme-aware alternatives

### 17. Final verifications
- Clerk Toaster `theme="dark"` prop → make dynamic
- Check that `flickering-grid.tsx` `color` prop defaults correctly per theme
- Verify `particle-border` animation colors work on both backgrounds

---

## Verification Plan

1. **Dev server:** Run `npm run dev`, navigate to landing page
2. **Dark mode (default):** Visually verify no regression — hero grid, cards, buttons, glows all unchanged
3. **Toggle to light:** Click theme toggle in navbar — should switch immediately with no flash
4. **Per-section check:**
   - Hero: grid visible, gradient text readable, dashboard mockup contrast correct
   - Features: card borders visible, glow effects subtle but present, hover states work
   - Pricing: toggle switch has correct colors, card glow appropriate
   - CTA: button gradients have proper contrast, pill badges readable
   - Footer: text contrast sufficient, social icons visible
   - Mobile: hamburger menu glass effect works, all text readable
5. **Persistence:** Refresh in light mode — should stay light
6. **System preference:** Open in incognito / private window — should respect OS dark/light setting
7. **No hardcoded surfaces:** Search codebase for remaining `bg-[#070d1f]`, `bg-[#050505]`, `bg-[#101010]` patterns — should be zero
8. **WCAG AA:** All text passes 4.5:1 contrast ratio in both modes

---

## Critical Files

| File | Change |
|------|--------|
| `src/styles/globals.css` | CSS variables for both themes, surface vars, light glows, light scrollbar |
| `tailwind.config.ts` | Surface colors via CSS vars, light animations/shadows |
| `src/context/theme-provider.tsx` | NEW — React context + useTheme hook |
| `src/app/layout.tsx` | Wrap ThemeProvider, remove hardcoded `.dark` |
| `src/components/navbar.tsx` | Add theme toggle with Sun/Moon icons |
| `src/components/features.tsx` | Theme-aware surfaces, borders, glows |
| `src/components/hero.tsx` | Theme-aware grid background |
| `src/components/cta.tsx` | Theme-aware surfaces and borders |
| `src/components/pricing.tsx` | Theme-aware surfaces and toggle colors |
| `src/components/footer.tsx` | Theme-aware background and text |
| All other component files | Surface/border/text color mapping |