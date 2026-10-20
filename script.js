// Copy-prompt buttons
const PROMPT = "Build me a website on https://www.answer.cloud";
const toast = document.getElementById("toast");
let toastTimer;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copyPrompt(button) {
  try {
    await navigator.clipboard.writeText(PROMPT);
  } catch {
    // Fallback for browsers without clipboard API access
    const ta = document.createElement("textarea");
    ta.value = PROMPT;
    document.body.append(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  button.textContent = "Copied ✓";
  setTimeout(() => (button.textContent = "Copy prompt"), 1800);
  showToast("Copied. Paste it into Claude Code or Codex.");
}

document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", () => copyPrompt(btn));
});
