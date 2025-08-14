// src/accessibilityFix.js
export function applyAccessibilityFixes() {
  // Fix for hidden "open-side-panel" button missing labels
  const btn = document.getElementById("open-side-panel");
  if (btn && !btn.getAttribute("aria-label")) {
    btn.setAttribute("aria-label", "Open side panel");
    btn.setAttribute("title", "Open side panel");
  }

  // Generic fix for any <button> without text, aria-label, or title
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    const hasText = button.textContent && button.textContent.trim().length > 0;
    const hasLabel = button.hasAttribute("aria-label");
    const hasTitle = button.hasAttribute("title");

    if (!hasText && !hasLabel && !hasTitle) {
      button.setAttribute("aria-label", "Button");
    }
  });
}
