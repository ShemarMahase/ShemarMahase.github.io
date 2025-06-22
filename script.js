// === Toggle Project Details ===
document.querySelectorAll(".more-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    details.classList.toggle("hidden");
  });
});

// === GIF Preview ===
document.querySelectorAll("img[data-gif]").forEach(img => {
  const original = img.src;
  const gif = img.dataset.gif;

  img.addEventListener("mouseenter", () => img.src = gif);
  img.addEventListener("mouseleave", () => img.src = original);
});

// === Intersection Observer for Projects ===
const hint = document.querySelector(".scroll-hint");
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    const el = entry.target;
    const rect = el.getBoundingClientRect();
    const inCenter = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;

    if (entry.isIntersecting && inCenter) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}, {
  threshold: Array.from({ length: 101 }, (_, i) => i / 100)
});

projects.forEach(project => observer.observe(project));

// === Scroll Handler: Hint + Parallax ===
window.addEventListener("scroll", () => {
  if (hint) {
    if (window.scrollY > 10) {
      hint.classList.add("hidden");
    } else {
      hint.classList.remove("hidden");
    }
  }

  const bg = document.getElementById("bg-image");
  if (bg) {
    bg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
});
