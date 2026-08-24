---
name: Silent Archive
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#5f5f59'
  on-secondary: '#ffffff'
  secondary-container: '#e1e0d9'
  on-secondary-container: '#63635e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#261900'
  on-tertiary-container: '#a17f3b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e4e2dc'
  secondary-fixed-dim: '#c8c7c0'
  on-secondary-fixed: '#1b1c18'
  on-secondary-fixed-variant: '#474742'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 128px
    fontWeight: '600'
    lineHeight: 110%
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 80px
    fontWeight: '600'
    lineHeight: 110%
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 120%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 120%
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 100%
    letterSpacing: 0.1em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 110%
    letterSpacing: -0.03em
spacing:
  section-gap-lg: 240px
  section-gap-md: 140px
  gutter: 32px
  margin-edge: 64px
  stack-sm: 12px
  stack-md: 24px
---

## Brand & Style

The design system embodies "Quiet Luxury"—a philosophy of restraint, precision, and high-value curation. It targets a discerning audience that values depth over noise and intelligence over trends. 

The visual style is a blend of **High-End Editorial Minimalism** and **Cinematic Modernism**. It rejects common digital affordances like heavy shadows or vibrant gradients in favor of structural integrity and architectural whitespace. The emotional response is one of calm authority, evoking the feeling of a private gallery or a premium printed monograph. Every element must feel intentional, spare, and permanent.

## Colors

The palette is anchored by a high-contrast foundation that mimics premium ink on heavy-stock paper.

- **Primary (#0a0a0a):** Deep charcoal used for text, heavy structural elements, and deep backgrounds. It is never pure black, maintaining a "carbon" quality.
- **Secondary (#fbf9f2):** Warm Ivory. This is the primary surface color, providing a softer, more sophisticated look than stark white.
- **Tertiary (#c5a059):** Champagne Bronze. Reserved for the "10% Rule"—only used for active states, singular highlights, or critical call-to-actions. It should feel like a metallic foil stamp.
- **Hairline Gray (#e0ddd5):** A functional neutral used exclusively for 0.5pt - 1pt dividers to define space without adding visual weight.

## Typography

Typography is the primary vehicle for the brand’s luxury positioning. It utilizes a neo-grotesk with tight tracking to create "text blocks" that feel like solid objects.

- **Contrast:** High-weight contrast is essential. Pair massive Display-XL headings with small, precise Mono labels.
- **Display Type:** Headlines should use negative letter-spacing to create a dense, cinematic feel.
- **Mono Accents:** Use monospaced type for metadata, captions, and navigation labels to introduce a layer of technical precision against the fluid neo-grotesk.
- **Scale:** On mobile, display sizes must scale aggressively to maintain legibility while preserving the "oversized" editorial aesthetic.

## Layout & Spacing

The layout philosophy is **Architectural & Asymmetric**. It treats the screen as a canvas where "nothingness" is as important as content.

- **The Grid:** A 12-column grid is used, but content frequently breaks the grid or is offset to one side to create tension.
- **Whitespace:** Use extreme vertical gaps (140px+) between major sections to force the user to slow down and consume content intentionally.
- **Margins:** Generous side margins (min 64px on desktop) keep content centered and focused.
- **Alignment:** Use "Swiss-style" alignment where text elements are often left-aligned to a specific column, leaving the right side of the screen entirely empty.

## Elevation & Depth

This design system rejects traditional depth markers like dropshadows or blurs. 

- **Tonal Layering:** Depth is achieved through the juxtaposition of the Ivory background and Charcoal containers. 
- **Hairline Dividers:** Use 0.5pt lines in Charcoal (#0a0a0a) at 10-15% opacity to separate content. These should feel like "scribed" lines on paper.
- **Flat Surface:** All elements sit on the same optical plane. Interaction is signaled through color shifts (Ivory to Champagne) or subtle scale transforms rather than "lifting" off the page.

## Shapes

The shape language is **Strictly Linear**. 

- **Sharp Edges:** All buttons, cards, and input fields must have 0px border radius. This conveys a sense of precision and architectural permanence.
- **Structural Lines:** Use vertical and horizontal hairlines to box in content or create "L-shape" frames around imagery.
- **Imagery:** Photos should always be hard-edged. If a frame is used, it should be a simple hairline stroke.

## Components

Components are stripped of all decorative "fluff," focusing on pure utility and typography.

- **Buttons:** Rectangular with 0px radius. Use Charcoal background with Ivory text for primary actions. Use a Champagne (#c5a059) underline or hairline border for secondary actions. Label text is always in the `label-caps` style.
- **Input Fields:** A single hairline at the bottom (underline style) rather than a full box. Labels sit above in small-caps Mono.
- **Cards:** No background or shadow. Cards are defined by their content and separated by generous whitespace or a top-edge hairline.
- **Progress Indicators:** Use the Champagne accent color for thin (2px) progress bars or minimal dot indicators.
- **Navigation:** Minimalist text-only navigation. Active states are indicated by a Champagne color shift or a small geometric glyph (e.g., a 4x4px square) next to the item.
- **Editorial Pull-quotes:** Use Display-LG type, left-aligned, spanning only 6 columns of the 12-column grid to create asymmetric white space.