# RevRa Landing Page Design System

## Overview
A dark-themed, futuristic SaaS landing page with glassmorphism UI, gradient accents, and subtle animations. Designed for a high-tech AI-native CRM product.

---

## Color Palette

### Core Colors
```css
/* Backgrounds */
--background: #101010 (main page background)
--surface: #0c1324 (card backgrounds)
--surface-dim: #0c1324
--surface-bright: #33394c
--surface-container: #191f31
--surface-container-low: #151b2d
--surface-container-lowest: #070d1f
--surface-container-high: #23293c
--surface-container-highest: #2e3447
--surface-variant: #2e3447

/* Primary Brand (Purple) */
--primary: #a078ff
--primary-container: #a078ff
--primary-fixed: #e9ddff
--primary-fixed-dim: #d0bcff
--on-primary: #3c0091
--on-primary-fixed: #23005c
--on-primary-fixed-variant: #5516be
--inverse-primary: #6d3bd7

/* Secondary Brand (Cyan) */
--secondary: #00cbe6
--secondary-container: #00cbe6
--secondary-fixed: #a2eeff
--secondary-fixed-dim: #2fd9f4
--on-secondary: #00363e
--on-secondary-fixed: #001f25
--on-secondary-fixed-variant: #004e5a

/* Text Colors */
--on-surface: #dce1fb (primary text)
--on-surface-variant: #cbc3d7
--muted-foreground: #94a3b8
--foreground: #dce1fb

/* Borders & Dividers */
--border: rgba(255, 255, 255, 0.1)
--outline-variant: #494454
```

### Gradient Definitions
```css
/* Primary Text Gradient */
background: linear-gradient(to right, #a078ff, #00cbe6);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Button Gradient */
background: linear-gradient(to right, from-primary to-secondary)

/* Glow Effects */
box-shadow: 0 0 15px rgba(160, 120, 255, 0.3);  /* Primary glow */
box-shadow: 0 0 15px rgba(93, 230, 255, 0.3); /* Secondary glow */
```

---

## Typography

### Font Families
```css
font-display: 'Space Grotesk', sans-serif;  /* Headings, labels, CTAs */
font-body: 'Inter', sans-serif;            /* Body text, descriptions */
font-mono: 'monospace';                     /* Code, technical labels */
```

### Type Scale
```css
/* Display / Hero */
text-6xl: 3.75rem (60px)
text-5xl: 3rem (48px)
text-4xl: 2.25rem (36px)
text-3xl: 1.875rem (30px)

/* Section Headings */
text-2xl: 1.5rem (24px)
text-xl: 1.25rem (20px)
text-lg: 1.125rem (18px)

/* Body */
text-base: 1rem (16px)
text-sm: 0.875rem (14px)
text-xs: 0.75rem (12px)
text-[9px]: 0.5625rem (9px)
text-[10px]: 0.625rem (10px)
text-[8px]: 0.5rem (8px)
```

---

## Component Patterns

### 1. Section Wrapper
```tsx
<Wrapper className="py-24 lg:py-32">
  {/* Section content */}
</Wrapper>

// CSS:
max-w-screen-xl mx-auto px-4 lg:px-20
```

### 2. Glassmorphism Card
```tsx
<div className="flex flex-col items-start gap-4 p-6 rounded-2xl
  bg-surface-container-lowest/40
  backdrop-blur-xl
  border border-white/10
  hover:border-primary/30
  transition-all duration-500
  group relative overflow-hidden"
>
```
**States:**
- Default: `border-white/10`, subtle background
- Hover: `border-primary/30`, increased background opacity, 500ms transition

### 3. Section Badge (Pill Badge)
```tsx
<div className="px-2.5 py-1 rounded-full bg-neutral-800 flex items-center justify-center gap-2">
  <div className="relative flex items-center justify-center">
    <div className="absolute w-3 h-3 rounded-full bg-primary/30 animate-ping"></div>
    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
  </div>
  <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
    {title}
  </span>
</div>
```

### 4. Animated Icon Container
```tsx
<div className="w-14 h-14 rounded-xl
  bg-gradient-to-br from-primary/20 to-secondary/20
  flex items-center justify-center
  group-hover:shadow-[0_0_20px_rgba(160,120,255,0.3)]
  transition-all duration-300"
>
  <Icon className="w-7 h-7 text-primary" />
</div>
```

### 5. Background Glow Effect
```tsx
<div className="absolute -top-10 -right-10 w-32 h-32
  bg-primary/10 rounded-full blur-2xl
  group-hover:bg-primary/20
  transition-all duration-500"
/>
```

### 6. Gradient Border Line
```tsx
<div className="absolute top-0 w-full h-[1px]
  bg-gradient-to-r from-transparent via-primary to-transparent"
/>
```

### 7. Tech Panel (Control Panel Style)
```tsx
<div className="relative bg-surface/50 rounded-lg border border-white/10 p-3 overflow-hidden">
  {/* Panel header */}
  <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/5">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      <span className="text-[9px] font-mono text-green-500">SYSTEM ONLINE</span>
    </div>
  </div>

  {/* Status bar with progress */}
  <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between">
    <div className="h-1 w-16 bg-surface-container rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-secondary to-primary animate-pulse" style={{ width: '75%' }} />
    </div>
  </div>

  {/* Decorative scan line */}
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
</div>
```

### 8. Feature List Item (with Check Icon)
```tsx
<li className="flex items-start gap-3">
  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
  <span className="text-sm text-on-surface">{feature}</span>
</li>
```

### 9. Call Interface Visualization
```tsx
<div className="bg-surface/80 rounded-lg border border-white/10 overflow-hidden">
  {/* Header */}
  <div className="flex items-center justify-between px-3 py-2 bg-green-500/10 border-b border-green-500/20">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      <span className="text-[10px] font-mono text-green-500">Call in Progress</span>
    </div>
    <span className="text-[10px] font-mono text-muted-foreground">02:34</span>
  </div>

  {/* Audio waveform */}
  <div className="h-12 flex items-center justify-center gap-0.5 px-4">
    {[8, 14, 11, 20, ...].map((height, i) => (
      <div
        key={i}
        className={cn(
          "w-1 rounded-full",
          i % 2 === 0 ? "bg-primary/60" : "bg-secondary/60",
          i > 8 && i < 16 && "animate-pulse"
        )}
        style={{ height: `${height}px`, animationDelay: `${i * 50}ms` }}
      />
    ))}
  </div>
</div>
```

### 10. Team Activity Feed
```tsx
<div className="bg-surface/80 rounded-lg border border-white/10">
  {/* Header */}
  <div className="flex items-center justify-between px-3 py-2 bg-surface-container border-b border-white/5">
    <span className="text-[10px] font-mono text-muted-foreground">Team Activity</span>
    <div className="flex items-center gap-1">
      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
      <span className="text-[9px] font-mono text-green-500">10 online</span>
    </div>
  </div>

  {/* Agent cards */}
  <div className="p-2 space-y-2">
    {agents.map((agent, i) => (
      <div key={i} className="flex items-center gap-2 p-2 bg-surface-container/50 rounded-lg">
        <div className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-mono",
          agent.status === 'active' ? "bg-primary/20 text-primary" : "bg-white/10 text-muted-foreground"
        )}>
          {agent.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-medium truncate">{agent.name}</div>
          <div className="text-[9px] text-muted-foreground truncate">{agent.action}</div>
        </div>
        <div className={cn(
          "w-1.5 h-1.5 rounded-full",
          agent.status === 'active' ? "bg-green-500" : "bg-white/30"
        )} />
      </div>
    ))}
  </div>
</div>
```

### 11. AI Terminal Visualization
```tsx
<div className="bg-surface/80 rounded-lg border border-white/10 overflow-hidden">
  {/* Terminal header */}
  <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-container border-b border-white/5">
    <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
    <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
    <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
    <span className="text-[10px] font-mono text-muted-foreground ml-2">revra-ai ~ terminal</span>
  </div>

  {/* Terminal content */}
  <div className="p-3 font-mono text-[10px] space-y-1.5">
    <div className="flex items-center gap-2">
      <span className="text-secondary">AI</span>
      <span className="text-muted-foreground">Drafting SMS response to Michael...</span>
    </div>
  </div>
</div>
```

---

## Animation Patterns

### Entry Animations
```tsx
// Container wraps content with staggered entry
<AnimationContainer animation="fadeUp" delay={0.2}>
  {/* Content */}
</AnimationContainer>

// Available animations:
// fadeUp, fadeDown, fadeLeft, fadeRight
```

### Hover Transitions
```css
transition-all duration-300    /* Standard hover transition */
transition-all duration-500  /* Slower, more dramatic transitions */

/* Border color change on hover */
border border-white/10 hover:border-primary/30

/* Scale effect */
transform hover:scale-105
```

### Pulse Animations
```tsx
// Status indicators
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

// Badge indicator
<div className="absolute w-3 h-3 rounded-full bg-primary/30 animate-ping"></div>
```

### Number Rolling Animation (for pricing)
```tsx
// Animated counter that rolls between values
const AnimatedNumber = ({ value, isYearly }) => {
  const [displayValue, setDisplayValue] = useState(initialValue);

  useEffect(() => {
    const duration = 500;
    const steps = 25;
    const stepDuration = duration / steps;
    const eased = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
    // ... interpolation logic
  }, [isYearly]);

  return (
    <span style={{
      background: 'linear-gradient(to right, #a078ff, #00cbe6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      {displayValue}
    </span>
  );
};
```

---

## Layout Patterns

### Two-Column Layout (Mobile: 1 column, Desktop: 2 columns)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Left column - Text content */}
  {/* Right column - Visual/Image */}
</div>
```

### 2x2 Grid for Cards
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Cards in 2 columns, 2 rows */}
</div>
```

### Bento/Grid Layout (for tool integrations)
```tsx
<div className="grid grid-cols-3 gap-1.5">
  <div className="col-span-2 row-span-2"> {/* Large cell */} </div>
  <div> {/* Small cell */} </div>
  {/* ... */}
</div>
```

---

## Button Styles

### Primary CTA Button
```tsx
<Button size="lg" className="
  bg-gradient-to-r from-inverse-primary to-surface-container
  text-white
  border-t border-white/20
  hover:shadow-[0_0_40px_rgba(160,120,255,0.4)]
  transition-all duration-300
  transform hover:scale-105
  font-display
  px-10 py-5
">
  Start Your Free Trial
</Button>
```

### Secondary Button
```tsx
<Button size="lg" variant="secondary" className="font-display">
  See How It Works
</Button>
```

### Navbar Get Started Button
```tsx
<Button size="sm" className="
  bg-primary-container
  text-on-primary-container
  hover:bg-white/10 hover:text-primary
  font-display font-medium tracking-tight
  shadow-[0_0_15px_rgba(160,120,255,0.3)]
">
  Get Started
</Button>
```

### Outline Button (Enterprise)
```tsx
<Button variant="outline" className="w-full font-display">
  Talk to Sales
</Button>
```

---

## Visual Effects

### Background Grid Pattern
```tsx
<div className="absolute inset-0
  bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
  bg-[size:40px_40px]
  pointer-events-none"
/>
```

### Gradient Orb (Background Glow)
```tsx
<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px]
  bg-primary-container/20 rounded-full blur-[120px] pointer-events-none"
/>
```

### Card Glow Effect
```tsx
<div className="absolute inset-x-0 mx-auto -top-8 w-64 h-32
  bg-primary/20 rounded-full blur-[40px]"
/>
```

### Glassmorphism Overlay
```tsx
<div className="bg-surface-container-lowest/80 backdrop-blur-xl">
```

---

## Responsive Breakpoints

```css
/* Mobile first */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px (navbar changes, 2-column layouts) */
/* xl: 1280px */
/* 2xl: 1400px */

max-w-screen-xl         /* Max content width */
lg:max-w-screen-xl     /* Same on large screens */
px-4 lg:px-20          /* Padding: mobile 16px, desktop 80px */
```

---

## Common Utility Classes

### Text Utilities
```css
text-muted-foreground        /* Subtle text color */
text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary  /* Gradient text */
font-display                 /* Display font family */
font-mono                    /* Monospace for labels */
font-body                    /* Body font family */
tracking-tighter             /* Tight letter spacing for logos */
uppercase tracking-wider     /* Label style */
```

### Spacing
```css
gap-4                        /* 16px gap */
gap-6                        /* 24px gap */
p-6                          /* 24px padding */
py-24 lg:py-32              /* Vertical padding: mobile 96px, desktop 128px */
mt-6 mb-6                   /* Margins */
space-y-2                    /* Vertical spacing between items */
```

### Borders & Shadows
```css
border border-white/10        /* Subtle white border */
border border-outline-variant/30
rounded-2xl                  /* Rounded corners (16px) */
rounded-lg                   /* Rounded corners (8px) */
rounded-full                 /* Pill shape */
shadow-2xl                  /* Large shadow */
drop-shadow-[0_0_8px_rgba(160,120,255,0.5)]  /* Glow effect */
```

---

## Checklist for New Components

When creating a new component, ensure it has:

1. [ ] "use client" directive if using hooks/animations
2. [ ] AnimationContainer wrapper with appropriate delay
3. [ ] Glassmorphism background styling
4. [ ] Hover state with border color change
5. [ ] Background glow effect (positioned absolutely)
6. [ ] Icon with gradient background and glow on hover
7. [ ] Consistent padding (p-6)
8. [ ] Consistent gap (gap-4 or gap-6)
9. [ ] SectionBadge if it's a section header
10. [ ] Mobile-responsive layout (grid-cols-1 md:grid-cols-2)
11. [ ] Wrapper component for content container
12. [ ] Consistent typography (font-display for headings, font-body for descriptions)
13. [ ] Dark theme styling (bg-surface-container, text-muted-foreground, etc.)
