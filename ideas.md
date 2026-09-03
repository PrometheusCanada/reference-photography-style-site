# Reference Photography Style System

## Ground-Truth Reference

The supplied **ZERO Foods** page is the sole visual reference for this redesign. Fidelity to its central rule takes priority over generic storefront patterns: each meaningful card should be composed as a **dominant solid-color field** paired with a **narrower, deliberately contrasting color band** that carries the card’s identifying text.

## Chosen Design Philosophy — Field & Signal

### Design Movement

Contemporary editorial food packaging translated into a tactile digital grocery interface: flat produce-inspired colour, oversized rounded forms, and compact label bands that make dense shopping information easy to scan.

### Core Principles

1. **Two-color discipline:** Each card uses one expansive colour field and one unmistakably different accent band; no same-tone gradients or decorative third colour compete with that relationship.
2. **Signal hierarchy:** The lower band acts as a shelf label. It holds the name, quantity, or action in a single confident, high-contrast line.
3. **Soft geometry:** Corners are rounded but purposeful; panels are compact, robust and individually recognisable from their silhouette and colour pairing.
4. **Grocery tactility:** Ingredients sit centrally in generous colour space, with small natural shadows and restrained illustrated details rather than sterile product photography.

### Color Philosophy

Use grounded produce hues—leaf green, butter yellow, tomato red, blueberry blue, aubergine and cream. The dominant field feels abundant and calm; the thinner counter-band delivers an energetic visual interruption. Pairings must be visibly distinct in hue and/or value while keeping text contrast accessible.

### Layout Paradigm

The page works as a **grocery shelf of uneven modules**, not a uniform dashboard. A strong sidebar or compact header anchors navigation while the content alternates between large editorial panels, smaller product tiles, and slim benefit strips. Product cards form the repeating unit that establishes rhythm.

### Signature Elements

- **Field + signal cards:** approximately four-fifths visual field above a one-fifth contrasting label band.
- **Offset label details:** compact circular marks, price lozenges, or plus actions overlap the seam between field and band.
- **Ingredient color families:** every category has a repeatable produce-derived pairing that users learn through use.

### Interaction Philosophy

Interaction should feel like selecting a well-labelled crate from a market shelf. Hover lifts a card a few pixels and brings its band edge into focus; button presses respond crisply without excessive animation. Filtering changes the visible set immediately and preserves colour recognition.

### Animation

Use brief 160–220 ms transform and opacity transitions with `cubic-bezier(0.23, 1, 0.32, 1)`. Card entrances cascade at 45 ms intervals; card hover may translate upward 4–6 px with a restrained shadow. Respect reduced-motion preferences and never animate layout-critical measurements.

### Typography System

Use **Fraunces** for editorial, warm display headings and **Manrope** for utility copy, prices and labels. Headlines have tight tracking and soft serifs; label-band text is bold, compact, sentence case or carefully paced uppercase. Avoid generic system display styling.

### Brand Essence

**A bright, ingredient-led grocery shelf that turns every product into an instantly legible colour signal.**

Personality: **straightforward, buoyant, tactile**.

### Brand Voice

Headlines are direct and ingredient-first; CTAs are short and specific. Avoid generic welcome language and exaggerated claims.

Examples: “Pick tonight’s colour.” and “Add the good stuff.”

### Wordmark & Logo

Use a compact, hand-cut circular produce mark with a simple offset leaf/notch, paired with a warm serif wordmark. The mark works independently at navigation scale and does not depend on text for recognition.

### Signature Brand Color

**Hatch Green `#4E8040`** is the recurring anchor colour for navigation, body backdrop, and high-confidence actions.

## Implementation Rules

1. All grocery cards, category tiles, service options, and content modules must inherit the dominant-field / contrasting-band construction.
2. The band must have enough contrast for its text without relying on an overlay.
3. Do not use purple gradients, generic all-white cards, repeated stock imagery, or a uniform grid that neutralises the colour rhythm.
4. Use the supplied reference as the visual benchmark when evaluating screenshots.
