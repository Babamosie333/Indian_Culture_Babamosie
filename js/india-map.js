document.addEventListener("DOMContentLoaded", function () {
  // Scroll-to-top button (vanilla JS, works regardless of jQuery load state)
  var arrowBtn = document.getElementById("arrow");
  if (arrowBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        arrowBtn.classList.add("show-arrow");
      } else {
        arrowBtn.classList.remove("show-arrow");
      }
    });

    arrowBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var siteData = {
    "redfort": {
      title: "Red Fort, Delhi",
      desc: "A 17th-century Mughal fortress and India's most iconic symbol of freedom, where the tricolour is hoisted every Independence Day.",
      img: "images/recipe_slides/i4.jpg"
    },
    "sun-temple": {
      title: "Modhera Sun Temple, Gujarat",
      desc: "An 11th-century temple built to align perfectly with the sun on the equinoxes, dedicated to the Hindu sun god Surya.",
      img: "images/recipe_slides/i1.jpg"
    },
    "ganga-aarti": {
      title: "Ganga Aarti, Varanasi",
      desc: "A mesmerising evening ritual on the ghats of the Ganges, where fire, chants and diyas honour the sacred river.",
      img: "images/recipe_slides/i7.jpg"
    },
    "cst": {
      title: "Chhatrapati Shivaji Terminus, Mumbai",
      desc: "A UNESCO World Heritage railway station blending Victorian Gothic and traditional Indian architecture.",
      img: "images/recipe_slides/i5.jpg"
    },
    "western-ghats": {
      title: "Western Ghats",
      desc: "A UNESCO World Heritage mountain range and biodiversity hotspot running along India's western coastline.",
      img: "images/recipe_slides/i3.jpg"
    },
    "bandipur": {
      title: "Bandipur National Park",
      desc: "One of India's premier tiger reserves, home to elephants, tigers and dense deciduous forests in Karnataka.",
      img: "images/recipe_slides/i6.jpg"
    },
    "annamalai": {
      title: "Adi Annamalai Temple",
      desc: "An ancient Shiva temple in Thiruvannamalai, Tamil Nadu, one of the largest temple complexes in India.",
      img: "images/recipe_slides/i2.jpg"
    }
  };

  var pins = document.querySelectorAll(".map-pin");
  var titleEl = document.getElementById("mapInfoTitle");
  var descEl = document.getElementById("mapInfoDesc");
  var imgEl = document.getElementById("mapInfoImg");
  var card = document.getElementById("mapInfoCard");

  pins.forEach(function (pin) {
    pin.addEventListener("click", function () {
      pins.forEach(function (p) { p.classList.remove("active-pin"); });
      pin.classList.add("active-pin");

      var key = pin.getAttribute("data-site");
      var site = siteData[key];
      if (!site) return;

      card.classList.add("card-fade");
      setTimeout(function () {
        titleEl.textContent = site.title;
        descEl.textContent = site.desc;
        imgEl.src = site.img;
        card.classList.remove("card-fade");
      }, 150);
    });
  });
});

// Scroll-reveal animations (Option A)
document.addEventListener("DOMContentLoaded", function () {
  var revealSelectors = [
    "#welcome_Sec h2",
    "#welcome_Sec p",
    "#slides_parent .slide_1",
    ".india-map-wrap",
    ".map-info-card",
    ".gallery_product",
    "#fiji-holyday .card",
    "#blog .blog-content"
  ];

  var revealEls = document.querySelectorAll(revealSelectors.join(","));

  revealEls.forEach(function (el, i) {
    el.classList.add("reveal-init");
    el.style.transitionDelay = (i % 6) * 0.08 + "s";
  });

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("reveal-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  revealEls.forEach(function (el) { observer.observe(el); });
});

// Tricolor trail cursor
(function () {
  if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
    return; // skip on touch devices
  }

  var colors = ["#ff9933", "#ffffff", "#138808"];
  var lastTime = 0;
  var throttleMs = 40;

  window.addEventListener("mousemove", function (e) {
    var now = Date.now();
    if (now - lastTime < throttleMs) return;
    lastTime = now;

    var dot = document.createElement("div");
    dot.className = "trail-dot";
    dot.style.background = colors[Math.floor(Math.random() * colors.length)];
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    document.body.appendChild(dot);

    requestAnimationFrame(function () {
      dot.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      dot.style.opacity = "0";
      dot.style.transform = "translate(-50%, -50%) scale(0.3)";
    });

    setTimeout(function () {
      dot.remove();
    }, 550);
  });
})();
