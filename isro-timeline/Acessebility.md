
- Added `lang="en"` in `index.html`.
- Ensured high-contrast palette (AA) for light/dark themes.
- Visible focus ring via `:focus-visible`.
- Timeline markers are `<button>` elements, reachable by Tab and navigable by Arrow keys.
- Active marker exposes `aria-current="true"`.
- Modal implemented with native `<dialog>`:
  - `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`.
  