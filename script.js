/* ==================================
   INSIDE THE ALGORITHM
   INTERACTIVE EFFECTS
================================== */
/* ==================================
   LOADING SCREEN
================================== */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 3200);
});
/* -----------------------------
   Influence Meter
----------------------------- */

const percentage = document.getElementById("percentage");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const progress = Math.min(Math.round((scrollTop / docHeight) * 100), 100);

  percentage.textContent = progress + "%";
});

/* -----------------------------
   Fade In Animations
----------------------------- */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document
  .querySelectorAll(
    ".section, .theory-card, .stat-card, .sdg-card, .solution-card"
  )
  .forEach((el) => {
    el.classList.add("hidden");

    observer.observe(el);
  });

/* -----------------------------
   Animated Statistics
----------------------------- */

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const stat = entry.target;

      const target = parseInt(stat.getAttribute("data-target"));

      let count = 0;

      const increment = target / 60;

      const updateCounter = () => {
        count += increment;

        if (count < target) {
          stat.textContent = Math.floor(count);

          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target;
        }
      };

      updateCounter();

      statObserver.unobserve(stat);
    });
  },
  {
    threshold: 0.5,
  }
);

document.querySelectorAll(".stat-number").forEach((stat) => {
  statObserver.observe(stat);
});

/* -----------------------------
   Hero Reveal Animation
----------------------------- */

window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-content");

  hero.classList.add("hero-visible");
});

/* -----------------------------
   Mouse Glow Effect
----------------------------- */

document.addEventListener("mousemove", (e) => {
  let glow = document.getElementById("cursor-glow");

  if (!glow) {
    glow = document.createElement("div");

    glow.id = "cursor-glow";

    document.body.appendChild(glow);
  }

  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";
});

/* -----------------------------
   Floating Particles
----------------------------- */

function createParticle() {
  const particle = document.createElement("div");

  particle.classList.add("particle");

  particle.style.left = Math.random() * window.innerWidth + "px";

  particle.style.animationDuration = Math.random() * 8 + 6 + "s";

  particle.style.opacity = Math.random() * 0.5;

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 14000);
}

setInterval(createParticle, 350);

/* -----------------------------
   Feed Card Hover Effects
----------------------------- */

const cards = document.querySelectorAll(".post-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

/* -----------------------------
   Typing Effect
----------------------------- */

const introText = document.querySelector(".intro-text");

if (introText) {
  const original = introText.textContent;

  introText.textContent = "";

  let i = 0;

  const type = () => {
    if (i < original.length) {
      introText.textContent += original.charAt(i);

      i++;

      setTimeout(type, 80);
    }
  };

  setTimeout(type, 400);
}

/* -----------------------------
   Random Glitch Effect
----------------------------- */

const title = document.querySelector(".hero h1");

setInterval(() => {
  title.classList.add("glitch");

  setTimeout(() => {
    title.classList.remove("glitch");
  }, 200);
}, 6000);

/* -----------------------------
   CTA Pulse
----------------------------- */

const cta = document.querySelector(".final-section h2");

setInterval(() => {
  cta.classList.add("pulse");

  setTimeout(() => {
    cta.classList.remove("pulse");
  }, 1500);
}, 4000);

/* ==================================
   FEED ANIMATION
================================== */

const feedPosts = document.querySelectorAll(".social-post");

const feedObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

feedPosts.forEach((post) => {
  feedObserver.observe(post);
});

/* ==================================
   ALGORITHM EVOLUTION
================================== */

const stages = document.querySelectorAll(".feed-post");

const stageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const stage = entry.target.classList;

        if (stage.contains("stage1")) {
          percentage.textContent = "10%";
        }

        if (stage.contains("stage2")) {
          percentage.textContent = "25%";
        }

        if (stage.contains("stage3")) {
          percentage.textContent = "50%";
        }

        if (stage.contains("stage4")) {
          percentage.textContent = "75%";
        }

        if (stage.contains("stage5")) {
          percentage.textContent = "100%";
        }
      }
    });
  },

  {
    threshold: 0.6,
  }
);

stages.forEach((stage) => {
  stageObserver.observe(stage);
});
