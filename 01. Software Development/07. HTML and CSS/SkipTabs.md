# Skip Tabs & Keyboard Navigation

## Browser Tab/Focus Basics

By default, Tab moves focus through interactive elements in DOM order:
- Links (`<a>`)
- Buttons (`<button>`)
- Form inputs (`<input>`, `<select>`, `<textarea>`)
- Anything with `tabindex`

### Key behaviors:
- `Tab` = forward, `Shift+Tab` = backward
- `tabindex="0"` — makes any element focusable in natural DOM order
- `tabindex="-1"` — focusable via JS (`.focus()`) but skipped by Tab
- `tabindex="1+"` — forces order (generally discouraged, creates maintenance headaches)

### In a web app:
- Focus is often managed programmatically — modals trap focus, dynamic content gets `.focus()` called on it
- `aria-` attributes help screen readers but don't change tab behavior
- CSS `:focus` and `:focus-visible` style the focused element
- iframes have their own tab order — Tab enters the iframe, cycles through its focusable elements, then exits back to the parent

### Common patterns:
- "Focus trap" in modals — Tab cycles within the modal only
- "Roving tabindex" in toolbars/menus — one item has `tabindex="0"`, siblings have `-1`, arrow keys move focus
- Skip links — hidden link at top that jumps focus to main content

### macOS note:
By default, Safari and Firefox on Mac only Tab to form fields unless you enable "Use keyboard navigation" in System Settings > Keyboard (or the browser's own preference).

---

## Plan: Centralized Focus Commands

### Goal
- First Tab from address bar should skip browser chrome and jump into the app (skip link)
- All focus/keyboard commands defined in a single file for easy management
- Imported by both the UI (`app.js`) and the template (iframe content)

### File location options:
1. `src/public/frontend/Scripts/focusCommands.js`
2. `src/public/frontend/focus-config.js`
3. `src/shared/focus-config.js`

### Example shape:
```js
export const FOCUS_COMMANDS = {
  skipToMain: { key: 'Enter', target: '#main-content' },
  nextField: { key: 'Tab', target: null },
  saveForm:  { key: 'ctrl+s', target: null, action: 'save' },
  // ...
};
```

### TODO
- [ ] Decide file location
- [ ] Define initial set of commands
- [ ] Implement skip link as first focusable element in DOM
- [ ] Wire up focus config in UI and template
