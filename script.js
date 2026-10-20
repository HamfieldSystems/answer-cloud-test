// Demo answers for the hero search box. A real deployment would call the answer API instead.
const answers = [
  {
    match: /password|login|sign ?in|reset/i,
    text: "Go to Settings → Security and choose \"Reset password\". We'll email you a link that's valid for 30 minutes. If you use SSO, reset it with your identity provider instead.",
    sources: ["Help Center · Account security", "Admin guide · SSO"],
  },
  {
    match: /refund|money back|cancel/i,
    text: "You can request a full refund within 30 days of purchase. After that, cancelling stops future renewals and you keep access until the end of your billing period.",
    sources: ["Policies · Refunds", "Billing FAQ"],
  },
  {
    match: /sso|saml|okta|enterprise/i,
    text: "SSO (SAML and OIDC) is included in the Enterprise plan, along with permissions sync so answers respect who can see what.",
    sources: ["Pricing · Plan comparison", "Docs · Configuring SSO"],
  },
  {
    match: /price|pricing|cost|plan/i,
    text: "Starter is free for 500 answers a month. Team is $49/month for 10,000 answers with analytics and API access. Enterprise is custom.",
    sources: ["Pricing"],
  },
];

const fallback = {
  text: "Great question. Once you connect your knowledge sources, answer.cloud will answer it here — with citations to the exact passages it used.",
  sources: ["Your docs", "Your help center"],
};

const form = document.getElementById("ask");
const input = document.getElementById("ask-input");
const card = document.getElementById("answer");
const textEl = document.getElementById("answer-text");
const sourcesEl = document.getElementById("answer-sources");
let typingTimer;

function respond(question) {
  const q = question.trim();
  if (!q) return;
  const hit = answers.find((a) => a.match.test(q)) || fallback;

  clearInterval(typingTimer);
  card.hidden = false;
  sourcesEl.replaceChildren();
  textEl.textContent = "";
  textEl.classList.add("typing");

  let i = 0;
  typingTimer = setInterval(() => {
    textEl.textContent = hit.text.slice(0, ++i);
    if (i >= hit.text.length) {
      clearInterval(typingTimer);
      textEl.classList.remove("typing");
      for (const s of hit.sources) {
        const tag = document.createElement("span");
        tag.className = "source";
        tag.textContent = "↗ " + s;
        sourcesEl.append(tag);
      }
    }
  }, 12);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  respond(input.value);
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    input.value = chip.textContent;
    respond(chip.textContent);
  });
});

// Waitlist form (no backend yet — just confirms locally)
const signup = document.getElementById("signup-form");
signup.addEventListener("submit", (e) => {
  e.preventDefault();
  signup.hidden = true;
  document.getElementById("signup-msg").hidden = false;
});

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
