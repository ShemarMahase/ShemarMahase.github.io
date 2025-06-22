document.addEventListener("DOMContentLoaded", () => {
  // === Toggle Project Details ===
  const toggleButtons = document.querySelectorAll(".more-toggle");
  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      details.classList.toggle("hidden");
    });
  });

  // === GIF Preview on Hover ===
  const gifs = document.querySelectorAll("img[data-gif]");
  gifs.forEach(img => {
    const original = img.src;
    const gif = img.dataset.gif;

    img.addEventListener("mouseenter", () => {
      img.src = gif;
    });

    img.addEventListener("mouseleave", () => {
      img.src = original;
    });
  });

  // === Project Animations (enter/exit center of screen) ===
  const projects = document.querySelectorAll(".project");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        const el = entry.target;
        const rect = el.getBoundingClientRect();
        const centerZoneTop = window.innerHeight * 0.25;
        const centerZoneBottom = window.innerHeight * 0.75;
        const isCentered = rect.top > centerZoneTop && rect.bottom < centerZoneBottom;

        if (isCentered) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          }, index * 150);
        } else {
          el.style.opacity = "0";
          el.style.transform = "translateX(-100px)";
        }
      });
    },
    {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    }
  );

  projects.forEach((project) => observer.observe(project));
});

// === Global Scroll Handler (scroll hint + parallax) ===
window.addEventListener("scroll", () => {
  // 1. Hide scroll hint after any scroll
  const hint = document.querySelector(".scroll-hint");
  if (hint) {
    if (window.scrollY > 10) {
      hint.style.opacity = "0";
      hint.style.pointerEvents = "none";
    } else {
      hint.style.opacity = "0.6";
      hint.style.pointerEvents = "auto";
    }
  }

  // 2. Parallax Background
  const bg = document.getElementById("bg-image");
  if (bg) {
    bg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
});
