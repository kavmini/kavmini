document.addEventListener("DOMContentLoaded", function () {

  /* ---- particles.js ---- */
  particlesJS("particles-js", {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "polygon",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 }
      },
      opacity: {
        value: 0.5, random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3, random: true,
        anim: { enable: false, speed: 19.18, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true, distance: 150,
        color: "#ffffff", opacity: 0.4, width: 1
      },
      move: {
        enable: true, speed: 4, direction: "none",
        random: true, straight: false, out_mode: "out", bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  /* ---- Smooth scroll for nav links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ---- Contact form feedback ---- */
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      /* If using Netlify Forms this submits normally.
         For GitHub Pages + Formspree, replace action in contact.html
         with your Formspree endpoint and remove data-netlify. */
      var btn = form.querySelector(".cf-submit");
      btn.textContent = "Sending…";
      btn.disabled = true;
    });
  }

});
