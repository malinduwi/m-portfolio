/* =========================================================
   Portfolio Website Script
   =========================================================
   1. HERO TYPING EFFECT
   ========================================================= */
const roles = [
  "Cybersecurity Enthusiast",
  "Aspiring Security Analyst",
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const typingTarget = document.querySelector(".typing-text");

function typeLoop() {
  if (!typingTarget) return;

  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingTarget.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    typingTarget.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 45 : 85);
}

if (typingTarget) {
  typeLoop();
}

/* =========================================================
   2. CURSOR + MOUSE-FOLLOW EFFECTS
   ========================================================= */
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");
const pageGlow = document.querySelector(".page-glow");
const mouseLight = document.querySelector(".cyber-mouse-light");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let outlineX = mouseX;
let outlineY = mouseY;
let lightX = mouseX;
let lightY = mouseY;

/**
 * Single mousemove listener for all cursor / mouse-follow effects.
 */
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (dot) {
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  }

  if (pageGlow) {
    pageGlow.style.left = `${mouseX}px`;
    pageGlow.style.top = `${mouseY}px`;
  }

  // Polygon parallax
  const x = (e.clientX / window.innerWidth - 0.5) * 34;
  const y = (e.clientY / window.innerHeight - 0.5) * 34;

  polygons.forEach((poly, index) => {
    const speed = (index + 1) * 0.14;
    const rotation = (x + y) * 0.04 * (index % 2 === 0 ? 1 : -1);
    const scale = 1 + index * 0.01;

    poly.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${rotation}deg) scale(${scale})`;
  });
});

/**
 * Smooth trailing cursor outline.
 */
function animateOutline() {
  outlineX += (mouseX - outlineX) * 0.14;
  outlineY += (mouseY - outlineY) * 0.14;

  if (outline) {
    outline.style.left = `${outlineX}px`;
    outline.style.top = `${outlineY}px`;
  }

  requestAnimationFrame(animateOutline);
}

if (outline) {
  animateOutline();
}

/**
 * Smooth cyber mouse-light follow.
 */
function animateMouseLight() {
  lightX += (mouseX - lightX) * 0.08;
  lightY += (mouseY - lightY) * 0.08;

  if (mouseLight) {
    mouseLight.style.left = `${lightX}px`;
    mouseLight.style.top = `${lightY}px`;
  }

  requestAnimationFrame(animateMouseLight);
}

if (mouseLight) {
  animateMouseLight();
}

/**
 * Enlarge cursor outline when hovering interactive elements.
 */
const interactiveItems = document.querySelectorAll("a, button, .card, .avatar");

interactiveItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (outline) {
      outline.style.transform = "translate(-50%, -50%) scale(1.5)";
    }
  });

  item.addEventListener("mouseleave", () => {
    if (outline) {
      outline.style.transform = "translate(-50%, -50%) scale(1)";
    }
  });
});

/* =========================================================
   3. BACKGROUND / POLYGON MOTION
   ========================================================= */
const polygons = document.querySelectorAll(".poly");

/* =========================================================
   4. NAVBAR ACTIVE LINK ON SCROLL
   ========================================================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const navbar = document.querySelector(".navbar");
const navRight = document.querySelector(".nav-right");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");

function closeMobileMenu() {
  if (!navRight || !mobileMenuToggle) return;

  navRight.classList.remove("nav-open");
  document.body.classList.remove("menu-open");
  mobileMenuToggle.setAttribute("aria-expanded", "false");
}

function openMobileMenu() {
  if (!navRight || !mobileMenuToggle) return;

  navRight.classList.add("nav-open");
  document.body.classList.add("menu-open");
  mobileMenuToggle.setAttribute("aria-expanded", "true");
}

if (mobileMenuToggle && navRight) {
  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = navRight.classList.contains("nav-open");

    if (isOpen) {
      closeMobileMenu();
      return;
    }

    openMobileMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth > 768 || !navRight.classList.contains("nav-open")) return;

    if (!navRight.contains(event.target)) {
      closeMobileMenu();
    }
  });
}

function updateActiveNavLink() {
  let current = "";

  if (navbar) {
    navbar.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (current && link.getAttribute("href")?.includes(current)) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink);
window.addEventListener("load", updateActiveNavLink);

/* =========================================================
   5. GENERIC REVEAL-ON-SCROLL
   ========================================================= */

/**
 * Initial generic reveal for main page blocks.
 * These elements use inline opacity/transform transitions.
 */
const basicRevealItems = document.querySelectorAll(".section, .card, .hero-text, .hero-image");

const basicRevealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

basicRevealItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(30px)";
  item.style.transition = "all 0.8s ease";
  basicRevealObserver.observe(item);
});

/**
 * Class-based reveal for elements using .reveal-up
 */
const revealUpItems = document.querySelectorAll(".reveal-up");

const revealUpObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealUpItems.forEach((item, index) => {
  item.style.setProperty("--reveal-delay", `${Math.min(index * 0.06, 0.3)}s`);
  revealUpObserver.observe(item);
});

/* =========================================================
   6. TIMELINE PROGRESS ANIMATION
   ---------------------------------------------------------
   Reusable function for Education / Experience timelines.
   ========================================================= */
function setupTimeline({
  timelineSelector,
  progressSelector,
  dotSelector,
  rowSelector,
}) {
  const timeline = document.querySelector(timelineSelector);
  const progress = document.querySelector(progressSelector);
  const dots = document.querySelectorAll(dotSelector);
  const rows = document.querySelectorAll(rowSelector);

  if (!timeline || !progress || !dots.length || !rows.length) return;

  function updateTimeline() {
    const timelineRect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const timelineHeight = timeline.offsetHeight;

    let fillProgress =
      (windowHeight * 0.75 - timelineRect.top) /
      (timelineRect.height + windowHeight * 0.15);

    fillProgress = Math.max(0, Math.min(1, fillProgress));

    const currentHeight = fillProgress * timelineHeight;
    progress.style.height = `${currentHeight}px`;

    dots.forEach((dot, index) => {
      const dotRect = dot.getBoundingClientRect();
      const dotTopInsideTimeline =
        dotRect.top - timelineRect.top + dotRect.height / 2;

      if (currentHeight >= dotTopInsideTimeline) {
        dot.classList.add("active");
        rows[index]?.classList.add("active");
      } else {
        dot.classList.remove("active");
        rows[index]?.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", updateTimeline);
  window.addEventListener("resize", updateTimeline);
  window.addEventListener("load", updateTimeline);
}

// Education timeline
setupTimeline({
  timelineSelector: ".education-timeline",
  progressSelector: ".timeline-progress",
  dotSelector: ".timeline-dot",
  rowSelector: ".timeline-row",
});

// Experience timeline
setupTimeline({
  timelineSelector: ".experience-timeline",
  progressSelector: ".experience-progress",
  dotSelector: ".experience-dot",
  rowSelector: ".experience-row",
});

/* =========================================================
   7. SKILL CARD REVEAL
   ========================================================= */
const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

skillCards.forEach((card) => skillObserver.observe(card));

/* =========================================================
   8. AVATAR HOVER TILT
   ========================================================= */
const avatarWrap = document.querySelector(".avatar-wrap");

if (avatarWrap) {
  avatarWrap.addEventListener("mousemove", (e) => {
    const rect = avatarWrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    avatarWrap.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  avatarWrap.addEventListener("mouseleave", () => {
    avatarWrap.style.transform = "";
  });
}

/* =========================================================
   9. PROJECT CARD TILT
   ========================================================= */
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth <= 768) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 6;
    const rotateX = ((y / rect.height) - 0.5) * -6;

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.setProperty("--spot-x", `${x}px`);
    card.style.setProperty("--spot-y", `${y}px`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
    card.style.setProperty("--spot-x", "50%");
    card.style.setProperty("--spot-y", "50%");
  });
});
