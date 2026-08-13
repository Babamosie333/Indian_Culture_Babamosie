# 🇮🇳 Indian Culture

> A frontend web experience celebrating the heritage, art, and diversity of India — built for the college web development competition.

**by Babamosie**

[![GitHub](https://img.shields.io/badge/GitHub-Babamosie333-181717?style=for-the-badge&logo=github)](https://github.com/Babamosie333)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-orange?style=for-the-badge&logo=vercel)](https://vikramsingh.babamosie.workers.dev/port-folio)
[![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)]()

---

<p align="center">
  <video src="https://www.image2url.com/r2/default/videos/1786634791804-cc518e91-cf18-4162-92a5-59a3506d396b.mp4" width="100%" autoplay muted loop >
    Your browser does not support the video tag.
  </video>
</p>



## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Author](#-author)
- [License](#-license)

---

## 🪔 About the Project

**Indian Culture** is a single-page, visually rich website showcasing India's states, festivals, art forms, cuisines, and traditions. Built as a submission for a college-level frontend web development competition ("Code for the Nation" / VSICS), the project blends a custom SVG India map, scroll animations, a tricolor particle cursor trail, and a video hero section into one cohesive cultural showcase.

---

## ✨ Features

- 🗺️ **Interactive India Map** — custom SVG map (`india-map.js`) with clickable states revealing culture-specific info
- 🎬 **Video Hero Section** — `v1.mp4` background video for an immersive landing experience
- 🎨 **Tricolor Particle Cursor Trail** — custom cursor effect using India's flag colors
- ✍️ **Typewriter Effect** — animated text intro via legacy jQuery
- 🔍 **Content Filters** — filterable sections (festivals/recipes/regions) via `extrenaljq.js`
- 📱 **Fully Responsive** — optimized for mobile, tablet, and desktop
- 🖼️ **Rich Photo Galleries** — Fiji surprise, recipe slides, and image sliders
- 🔗 **Social Share Ready** — Open Graph image + self-hosted tricolor favicon

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (single `index.html`) |
| Styling | CSS3 (`style.css`) + Font Awesome icons |
| Interactivity (legacy) | jQuery 3.1.1 (`extrenaljq.js`) — nav toggle, typewriter, filters |
| Interactivity (modern) | Vanilla JS (`india-map.js`) — SVG map + custom features |
| Fonts | Self-hosted webfonts (`/fonts`) |
| Media | Self-hosted video, images, galleries (`/images`) |
| Deployment | Netlify |

---

## 📁 Folder Structure

```
Indian-Culture-main/
├── index.html                  → entire page markup
├── css/
│   ├── style.css                → all custom styling + theme
│   └── font-awesome.min.css     → icon library
├── js/
│   ├── jquery-3.1.1.min.js      → jQuery core
│   ├── extrenaljq.js            → legacy jQuery (nav toggle, typewriter, filters)
│   └── india-map.js             → all custom vanilla JS features
├── fonts/                       → self-hosted webfont files
└── images/
    ├── v1.mp4                    → hero background video
    ├── favicon.svg                → self-hosted tricolor favicon
    ├── og-image.jpg                → social share preview image
    ├── fiji-surprise/                → photo assets
    ├── recipe_slides/                → photo assets
    └── slider/                        → photo assets
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Babamosie333/Indian-Culture.git

# Move into the project folder
cd Indian-Culture-main

# Open with Live Server (VS Code) or simply open index.html in browser
```

No build step or package manager required — pure HTML/CSS/JS, ready to deploy as a static site (e.g. Netlify drag-and-drop).

---

## 📸 Screenshots

> _Add screenshots/GIFs here — hero video section, interactive map, filters, and mobile view work well._

| Home / Hero | Map Interaction | Mobile View |
|---|---|---|
| _coming soon_ | _coming soon_ | _coming soon_ |

---

## 🗺️ Roadmap

- [x] Base layout & video hero section
- [x] Custom SVG India map
- [x] Scroll-reveal animations
- [x] Tricolor cursor trail
- [x] Typewriter intro effect
- [x] Content filters (jQuery)
- [ ] Accessibility pass (ARIA, keyboard nav)
- [ ] Performance/Lighthouse optimization (video + image compression)
- [ ] Final Netlify deployment

---

## 👤 Author

**Babamosie**
- GitHub: [@Babamosie333](https://github.com/Babamosie333)
- Portfolio: [vikramsingh.babamosie.workers.dev/port-folio](https://vikramsingh.babamosie.workers.dev/port-folio)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ for India 🇮🇳</p>
