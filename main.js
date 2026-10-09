document.documentElement.classList.add("js");

const root = document.documentElement;
let ticking = false;

window.addEventListener(
  "pointermove",
  (event) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      root.style.setProperty("--mx", `${x.toFixed(2)}px`);
      root.style.setProperty("--my", `${y.toFixed(2)}px`);
      ticking = false;
    });
  },
  { passive: true }
);
