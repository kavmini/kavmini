# victoriaperez.me

Personal website of Victoria Pérez — Spanish philologist, multiplatform developer, and content specialist in the STEAM field.

Built with [Jekyll](https://jekyllrb.com/) and deployed via [GitHub Pages](https://pages.github.com/).

## Stack

- Jekyll (static site generator)
- particles.js (hero animation)
- Inter (Google Fonts)
- Vanilla CSS & JS — no frameworks

## Structure

```
.
├── _includes/
│   ├── head.html
│   ├── header.html
│   ├── about.html
│   ├── teaching.html
│   ├── contact.html
│   └── footer.html
├── _layouts/
│   └── default.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── logo.png
├── _config.yml
├── index.html
└── CNAME
```

## Local development

```bash
gem install jekyll bundler
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

---

© Victoria Pérez
