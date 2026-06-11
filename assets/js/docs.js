(function () {
    'use strict';

    var body = document.body;
    var pageSlug = body.getAttribute('data-page') || 'index';
    var nav = window.DOCS_NAV;
    var lang = (nav && nav.lang) || document.documentElement.lang || 'en';

    var copyLabels = {
        en: { hint: 'Copy to clipboard', copied: 'Copied!' },
        uk: { hint: 'Копіювати в буфер обміну', copied: 'Скопійовано!' }
    };

    function pageHref(slug) {
        return slug === 'index' ? 'index.html' : slug + '.html';
    }

    function findLabel(slug) {
        var i, j, section, items;
        if (!nav) {
            return slug;
        }
        for (i = 0; i < nav.sections.length; i++) {
            section = nav.sections[i];
            items = section.items;
            for (j = 0; j < items.length; j++) {
                if (items[j].slug === slug) {
                    return items[j].label;
                }
            }
        }
        return slug;
    }

    function renderSidebar() {
        var container = document.getElementById('docs-sidebar');
        if (!container || !nav) {
            return;
        }

        var html = '';
        var i, j, section, items, item, href, active;

        for (i = 0; i < nav.sections.length; i++) {
            section = nav.sections[i];
            html += '<div class="mb-3">';
            html += '<div class="text-body-secondary text-uppercase small fw-semibold px-3 mb-1">' + section.title + '</div>';
            items = section.items;
            for (j = 0; j < items.length; j++) {
                item = items[j];
                href = pageHref(item.slug);
                active = item.slug === pageSlug ? ' active' : '';
                html += '<a class="nav-link py-1 px-3' + active + '" href="' + href + '">' + item.label + '</a>';
            }
            html += '</div>';
        }

        container.innerHTML = html;
    }

    function renderToc() {
        var container = document.getElementById('docs-toc');
        var main = document.getElementById('docs-content');
        if (!container || !main || !nav) {
            return;
        }

        var headings = main.querySelectorAll('h2, h3');
        if (!headings.length) {
            container.closest('.docs-toc-wrap').classList.add('d-none');
            return;
        }

        var title = nav.lang === 'uk' ? 'На цій сторінці' : 'On this page';
        var html = '<div class="text-body-secondary text-uppercase small fw-semibold mb-2">' + title + '</div>';
        var i, el, id, cls;

        for (i = 0; i < headings.length; i++) {
            el = headings[i];
            if (!el.id) {
                el.id = 'section-' + i;
            }
            id = el.id;
            cls = el.tagName === 'H3' ? ' ps-3' : '';
            html += '<a class="nav-link py-1 px-0' + cls + '" href="#' + id + '">' + el.textContent + '</a>';
        }

        container.innerHTML = html;
    }

    function renderNextPrev() {
        var container = document.getElementById('docs-next-prev');
        if (!container || !nav || !nav.nextPrev) {
            return;
        }

        var chain = nav.nextPrev[pageSlug];
        if (!chain) {
            return;
        }

        var prevLabel = nav.lang === 'uk' ? 'Попередня' : 'Previous';
        var nextLabel = nav.lang === 'uk' ? 'Наступна' : 'Next';
        var html = '';

        if (chain.prev) {
            html += '<a class="text-decoration-none col docs-next-prev-link" href="' + pageHref(chain.prev) + '" aria-label="' + prevLabel + ': ' + findLabel(chain.prev) + '">';
            html += '<div class="docs-next-prev-icon text-body-secondary" aria-hidden="true"><i class="bi bi-chevron-left"></i></div>';
            html += '<div class="fw-semibold text-body-emphasis">' + findLabel(chain.prev) + '</div>';
            html += '</a>';
        } else {
            html += '<div class="col"></div>';
        }

        if (chain.next) {
            html += '<a class="text-decoration-none col text-end docs-next-prev-link" href="' + pageHref(chain.next) + '" aria-label="' + nextLabel + ': ' + findLabel(chain.next) + '">';
            html += '<div class="docs-next-prev-icon text-body-secondary" aria-hidden="true"><i class="bi bi-chevron-right"></i></div>';
            html += '<div class="fw-semibold text-body-emphasis">' + findLabel(chain.next) + '</div>';
            html += '</a>';
        }

        container.innerHTML = html;
        container.classList.add('row', 'g-3', 'border-top', 'pt-4', 'mt-5');
    }

    function initHighlight() {
        if (typeof hljs !== 'undefined') {
            hljs.highlightAll();
        }
    }

    function initCopyButtons() {
        if (typeof ClipboardJS === 'undefined') {
            return;
        }

        var main = document.getElementById('docs-content');
        if (!main) {
            return;
        }

        var labels = copyLabels[lang === 'uk' ? 'uk' : 'en'];
        var pres = main.querySelectorAll('pre');
        var index = 0;
        var clipboard;

        pres.forEach(function (pre) {
            var code;
            var wrap;
            var btn;
            var codeId;

            if (pre.closest('.docs-code-wrap')) {
                return;
            }

            code = pre.querySelector('code');
            if (!code) {
                return;
            }

            codeId = 'docs-code-' + pageSlug + '-' + index;
            index += 1;

            if (!code.id) {
                code.id = codeId;
            }

            wrap = document.createElement('div');
            wrap.className = 'docs-code-wrap mb-4';

            btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'btn btn-sm btn-outline-secondary docs-copy-btn';
            btn.setAttribute('data-clipboard-target', '#' + code.id);
            btn.setAttribute('title', labels.hint);
            btn.setAttribute('aria-label', labels.hint);
            btn.innerHTML = '<i class="bi bi-clipboard" aria-hidden="true"></i>';

            pre.parentNode.insertBefore(wrap, pre);
            wrap.appendChild(pre);
            wrap.appendChild(btn);
            pre.classList.remove('mb-4');
            pre.classList.add('mb-0');
        });

        clipboard = new ClipboardJS('.docs-copy-btn');

        clipboard.on('success', function (e) {
            var icon = e.trigger.querySelector('i');
            var originalHint = labels.hint;

            e.trigger.setAttribute('title', labels.copied);
            e.trigger.setAttribute('aria-label', labels.copied);

            if (icon) {
                icon.className = 'bi bi-clipboard-check';
            }

            setTimeout(function () {
                e.trigger.setAttribute('title', originalHint);
                e.trigger.setAttribute('aria-label', originalHint);
                if (icon) {
                    icon.className = 'bi bi-clipboard';
                }
            }, 2000);

            e.clearSelection();
        });
    }

    if (nav) {
        renderSidebar();
        renderToc();
        renderNextPrev();
    }

    initHighlight();
    initCopyButtons();
})();
