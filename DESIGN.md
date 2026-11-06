---
name: System 1984
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e2'
  on-secondary-container: '#646464'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels the iconic 1984 Macintosh System 1 graphical desktop interface through a modern, responsive lens. The identity marries 1-bit tactile nostalgia with functional web usability: strict monochrome palettes, simulated halftone dithering patterns, crisp 2px solid framing, vintage window title bars with control pips, and deliberate high-contrast hard drop shadows.

The aesthetic blends **Retro / 1-Bit Computing** with **Digital Brutalism**. It targets digital artisans, retro computing enthusiasts, developers, and creative portfolios seeking distinctive character over homogeneous corporate minimalism. The interface should feel immediate, punchy, tactile, and playful—evoking the whirr of a floppy drive, clicky beige mechanical keyboards, and crisp bitmap raster screens without compromising modern accessibility and layout fluidity.

## Colors

The color architecture is built strictly on high-contrast 1-bit and grayscale values:

- **Primary (`#000000`)**: Deep pitch black used for solid structural outlines, window headers, heavy typography, and hard drop-shadow offsets.
- **Secondary (`#555555`)**: Mid charcoal used for subtle borders, secondary labels, and dense stipple fills.
- **Tertiary (`#D1D1D1`)**: Platinum dither gray used for title bar stripes, neutral panel fills, and checkered background fills.
- **Neutral (`#FFFFFF`)**: Pure canvas paper white, delivering stark contrast against black borders and dithered desktop fields.

### Dither & Pattern Texture Tokenization
To capture genuine 1-bit aesthetics, subtle CSS background-image patterns recreate classic Mac OS desk accessories:
- **Checkerboard/Dither Texture**: A repeating 2×2 checkered bitmap (`#000000` at 12% opacity or alternating `#D1D1D1` and `#FFFFFF` pixels) is deployed on page backgrounds and inactive title bar strips.
- **Horizontal Pinstripes**: 2px alternating black-and-transparent scanlines applied to active window title bars flanking centered document labels.

## Typography

The typographic hierarchy channels Susan Kare's Chicago and Geneva fonts via contemporary web-safe pairings:
- **Headlines & Body (`Space Grotesk`)**: Provides punchy, geometric, low-contrast letterforms with proportional widths that match early graphic user interfaces while guaranteeing sharp legibility across high-DPI displays.
- **System Labels, Metadata, Window Titles (`JetBrains Mono`)**: Serves as the monospace counterpart for window handles, filenames, file extensions (`.pdf`, `.html`), and desk accessory menus.

All headline weights remain firmly committed to 700 (Bold) to echo the ink-heavy screen rendering of early CRT raster displays.

## Layout & Spacing

The layout is constructed upon a structured 12-column desktop grid (reflowing to 6 columns on tablet and 4 columns on mobile), wrapped within a constrained maximum viewport width of 1120px to emulate standard CRT monitor aspect ratios.

Outer canvases leverage repeating halftone dither backgrounds, while core content sections are segmented into explicit modular blocks framed by 2px solid outlines. Elements stack with tactile vertical cadence using an 8px base rhythm (`space-sm: 8px`, `space-md: 16px`, `space-lg: 24px`, `space-xl: 40px`). Gutters remain strict and non-collapsing to preserve window panel isolation.

## Elevation & Depth

Visual hierarchy rejects soft ambient blurs and semi-transparencies. Instead, physical elevation is created using:
- **Hard Drop Shadows**: Solid black offsets (`box-shadow: 4px 4px 0px #000000` for standard cards; `6px 6px 0px #000000` for stacked modal windows).
- **Physical Inset States**: Interactive presses depress directly along the Z-axis, reducing shadow offsets to `0px 0px 0px #000000` and translating elements by `+4px` on both X and Y.
- **Window Stacking**: Active windows sit atop a white background with 2px solid outer borders and dark drop shadows; inactive windows feature full dither striping across title bars and reduced contrast borders.
- **Structural Outlines**: Every surface container, image enclosure, and segmented button is explicitly delineated by a `2px solid #000000` outline.

## Shapes

The design system adopts a strict `0` (Sharp) geometry for standard architecture, framing, buttons, and dialogue windows. To pay homage to the original 1984 Macintosh window chrome, decorative window header control buttons (close boxes, window pips) utilize circular 1-bit icons or 1px inset pill dots, while all outer containers remain resolute at sharp 90-degree corners.

## Components

### Window Containers & Cards
- **Architecture**: Enclosed by a `2px solid #000000` outer border with a `5px 5px 0px #000000` hard shadow and pure white (`#FFFFFF`) surface fill.
- **Title Bar**: A top header bar (height: 32px) bounded by a bottom `2px solid #000000` border and filled with 50% dither gray (`#D1D1D1`) or alternating horizontal lines. It includes two rounded control pips (radius: 50%, size: 8px, border: `1.5px solid #000000`) anchored to the top-left, followed by a monospace file name or window title (`label-md`).
- **Media Containers**: Embedded images display sharp borders with optional grayscale halftone/dither filter shaders.

### Buttons & CTAs
- **Primary Button**: Solid white surface, `2px solid #000000` border, `3px 3px 0px #000000` hard shadow, bold monospace or sans label, padded at `8px 16px`.
- **Hover/Active**: On hover, invert to solid `#000000` background with `#FFFFFF` text. On active click, translate `transform: translate(3px, 3px)` with `box-shadow: none`.
- **Segmented / Quick Links Bar**: Contiguous full-width button rows joined by shared `2px` interior dividing rules, each presenting an arrow prompt (`↗`) aligned right.

### Input Fields & Controls
- **Text Inputs**: Crisp `#FFFFFF` surface, `2px solid #000000` border, zero border-radius. Inset text set in `JetBrains Mono`. Focus state displays an inverted 1px dotted outline or a 2px outer outline offset.
- **Checkboxes**: 16×16px sharp square with a `2px solid #000000` border. Checked state renders a bold, solid black square interior or vintage pixelated "X".
- **Radio Buttons**: 16×16px circular shape with `2px solid #000000` border; selected state fills a centered 8×8px solid black disk.

### Lists & Dropdowns
- **Menu Bar**: Fixed or sticky top bar styled after the classic 1984 system menu bar. Pure `#D1D1D1` or `#FFFFFF` fill with a bottom `2px solid #000000` rule. Menu items highlight upon selection via full color inversion (black box with inverted white typography).