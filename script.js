
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".more-toggle");
  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      details.classList.toggle("hidden");
    });
  });

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
});
