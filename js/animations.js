const cards = document.querySelectorAll(".project-card");

function revealProjects() {
  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealProjects);

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(60px)";
  card.style.transition = "0.6s";
});
