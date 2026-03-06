# Design System

Consistent spacing, typography, and motion across the portfolio.

## Spacing (4px base)

Use Tailwind classes or CSS variables:

| Token        | Value  | Tailwind (spacing)   | Usage example      |
|-------------|--------|----------------------|--------------------|
| `--space-2` | 8px    | `p-2`, `gap-2`       | Tight gaps         |
| `--space-4` | 16px   | `p-4`, `gap-4`       | In-card padding    |
| `--space-6` | 24px   | `gap-block`          | Between blocks     |
| `--space-8` | 32px   | `gap-section`        | Section inner gap  |
| `--space-12`| 48px   | `section-sm`         | Compact sections   |
| `--space-16`| 64px   | `section`            | Default section py |
| `--space-24`| 96px   | `section-lg`         | Large section py   |

**Classes:** `mb-gap-section`, `gap-gap-block`, `py-section`, `py-section-lg`

## Typography

| Token         | Size   | Tailwind   | Use case           |
|---------------|--------|------------|--------------------|
| `--text-xs`   | 12px   | `text-ds-xs`  | Captions, hints   |
| `--text-sm`   | 14px   | `text-ds-sm`  | Body secondary    |
| `--text-base` | 16px   | `text-ds-base`| Body              |
| `--text-lg`   | 18px   | `text-ds-lg`  | Lead / emphasis   |
| `--text-xl`   | 20px   | `text-ds-xl`  | Card titles       |
| `--text-2xl`  | 24px   | `text-ds-2xl` | Section subtitles |
| `--text-3xl`  | 30px   | `text-ds-3xl` | Section titles (mobile) |
| `--text-4xl`  | 36px   | `text-ds-4xl` | Hero / large      |
| `--text-5xl`  | 48px   | `text-ds-5xl` | Section titles (desktop) |

**Line height:** `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed` (from Tailwind).

## Motion

- **Easing:** `transition-out-expo` or `transition-out-smooth` (CSS: `--ease-out-expo`, `--ease-out-smooth`)
- **Duration:** `duration-fast` (200ms), `duration-normal` (350ms), `duration-slow` (500ms)

Use for consistent hover/scroll animations across sections.

## Section variants

- `default` — neutral background, standard padding
- `featured` — gradient tint, CTA-style sections (e.g. Contact)
- `muted` — `bg-muted/20` for contrast (e.g. Skills)
- `journey` — gradient + grid background for the Journey timeline

## Container

Use `<Container>` with optional `size="sm" | "md" | "lg" | "xl" | "full"`. Default padding: `px-4 sm:px-6 lg:px-8`.
