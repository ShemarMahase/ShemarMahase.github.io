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
  entries.forEach(entry => {
    const rect = entry.boundingClientRect;
    const centerTrigger = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;

    if (entry.isIntersecting && centerTrigger) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, {
  threshold: 0.1
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
