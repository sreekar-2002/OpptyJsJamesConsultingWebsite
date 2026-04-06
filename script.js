// Hero Section Zoom
window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  let hero = document.querySelector(".hero");
  let zoom = 120 - scrollY * 0.05;

  if (zoom < 100) {
    zoom = 100;
  }

  hero.style.backgroundSize = zoom + "%";
});






// Info Section Animation

const infoBoxes = document.querySelectorAll(".info-box");

function revealInfo() {
  infoBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    const triggerPoint = window.innerHeight - 80;

    if (boxTop < triggerPoint) {
      box.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealInfo);

/* run once on load */
revealInfo();







document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".toggle-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const card = this.parentElement;

      card.classList.toggle("active");

      if (card.classList.contains("active")) {
        this.innerText = "Show less";
      } else {
        this.innerText = "Show more";
      }
    });
  });
});

const testimonials = [
  {
    text: `"I'm a testimonial. Click to edit me and add text that says something nice about you and your services."`,
    role: "Project Manager",
    name: "Dora Bridges",
  },

  {
    text: `"I'm a testimonial. Click to edit me and add text that says something nice about you and your services."`,
    role: "Operations Manager",
    name: "Sima Patel",
  },

  {
    text: `"I'm a testimonial. Click to edit me and add text that says something nice about you and your services."`,
    role: "Marketing Director",
    name: "Brad Stevens",
  },
];

let index = 0;

const text = document.querySelector(".testimonial-text");

const role = document.querySelector(".role");

const name = document.querySelector(".name");

const dots = document.querySelectorAll(".dot");





function showTestimonial(i) {
  text.style.animation = "none";
  text.offsetHeight;
  text.style.animation = "fade 0.5s ease";
  text.innerText = testimonials[i].text;
  role.innerText = testimonials[i].role;
  name.innerText = testimonials[i].name;

  dots.forEach((dot) => dot.classList.remove("active"));

  dots[i].classList.add("active");
}

document.querySelector(".right").onclick = () => {
  index = (index + 1) % testimonials.length;

  showTestimonial(index);
};

document.querySelector(".left").onclick = () => {
  index = (index - 1 + testimonials.length) % testimonials.length;

  showTestimonial(index);
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    index = i;

    showTestimonial(index);
  };
});




