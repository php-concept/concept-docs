# Concept Core Documentation

Static HTML documentation for `php-concept/core`, styled similarly to [Laravel Docs](https://laravel.com/docs/13.x).

## Structure

```
docs/
├── index.html          # Language picker (EN / UK)
├── assets/
│   ├── vendor/
│   │   ├── bootstrap/      # Bootstrap CSS/JS
│   │   ├── bootstrap-icons/
│   │   ├── highlight/      # Syntax highlighting
│   │   └── clipboard/      # Copy-to-clipboard for code blocks
│   ├── css/docs.css        # Documentation layout & theme
│   └── js/
│       ├── docs.js     # Sidebar, TOC, highlight init
│       ├── nav-en.js   # English navigation structure
│       └── nav-uk.js   # Ukrainian navigation structure
├── en/                 # English pages
└── uk/                 # Ukrainian pages
```

## Adding a new page

1. Add the page slug and label to `assets/js/nav-en.js` and `assets/js/nav-uk.js` (and update `nextPrev` if needed).
2. Create `en/{slug}.html` and `uk/{slug}.html` using an existing page as a template.
3. Set `data-page="{slug}"` on `<body>` so the sidebar highlights the active item.

To regenerate placeholder pages for all sections except `index` and `installation`:

```bash
./_generate-stubs.sh
```

## Layout

Pages use Bootstrap 5 (`container-xxl`, grid columns, `offcanvas-lg` sidebar, `data-bs-theme="dark"`).
The header and content share the same centered `container-xxl`, like the [Bootstrap documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/).

## Conventions

- Prefer Bootstrap utilities; keep custom CSS in `assets/css/docs.css` minimal (accent color, active nav link).
- Code samples use `<pre><code class="language-...">` for Highlight.js.
- Mirror content between `en/` and `uk/` when writing documentation.
