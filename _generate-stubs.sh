#!/usr/bin/env bash
# Generates stub documentation pages for en/ and uk/ locales.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"

declare -A EN_TITLES=(
    [release-notes]="Release Notes"
    [upgrade-guide]="Upgrade Guide"
    [contributing]="Contributing"
    [configuration]="Configuration"
    [directory-structure]="Directory Structure"
    [request-lifecycle]="Request Lifecycle"
    [service-container]="Service Container"
    [service-providers]="Service Providers"
    [telemetry]="Telemetry"
    [routing]="Routing"
    [middleware]="Middleware"
    [route-interceptors]="Route Interceptors"
    [controllers]="Controllers"
    [requests]="Requests & Validation"
    [responses]="Responses"
    [views]="Views"
    [components-overview]="Component Concept"
    [creating-components]="Creating a Component"
    [component-cli]="CLI & Assets"
    [database]="Database"
    [csrf]="CSRF Protection"
    [data-masking]="Data Masking"
    [safe-redirects]="Safe Redirects"
    [console]="Using the Console"
    [console-commands]="Creating Commands"
)

declare -A UK_TITLES=(
    [release-notes]="Примітки до релізу"
    [upgrade-guide]="Оновлення"
    [contributing]="Участь у розробці"
    [configuration]="Конфігурація"
    [directory-structure]="Структура каталогів"
    [request-lifecycle]="Життєвий цикл запиту"
    [service-container]="Контейнер сервісів"
    [service-providers]="Провайдери сервісів"
    [telemetry]="Телеметрія"
    [routing]="Маршрутизація"
    [middleware]="Middleware"
    [route-interceptors]="Route interceptors"
    [controllers]="Контролери"
    [requests]="Запити та валідація"
    [responses]="Відповіді"
    [views]="Представлення"
    [components-overview]="Концепція компонентів"
    [creating-components]="Створення компонента"
    [component-cli]="CLI та assets"
    [database]="База даних"
    [csrf]="Захист CSRF"
    [data-masking]="Маскування даних"
    [safe-redirects]="Безпечні редіректи"
    [console]="Робота з консоллю"
    [console-commands]="Створення команд"
)

generate_stub() {
    local lang="$1"
    local slug="$2"
    local title="$3"
    local nav_file="$4"
    local stub_text="$5"
    local html_lang="$6"
    local en_active="$7"
    local uk_active="$8"
    local menu_label="$9"
    local out="${ROOT}/${lang}/${slug}.html"

    cat > "$out" <<EOF
<!DOCTYPE html>
<html lang="${html_lang}" data-bs-theme="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${title} — Concept Core Documentation">
    <title>${title} - Concept Core Documentation</title>
    <link rel="stylesheet" href="../assets/vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/vendor/bootstrap-icons/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../assets/vendor/highlight/styles/github-dark.min.css">
    <link rel="stylesheet" href="../assets/css/docs.css">
</head>
<body data-page="${slug}">
    <header class="navbar navbar-dark bg-dark border-bottom sticky-top">
        <div class="container-xxl d-flex align-items-center">
            <button class="navbar-toggler d-lg-none me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#docsSidebar" aria-controls="docsSidebar" aria-label="${menu_label}">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand fw-semibold me-2" href="index.html">Concept <span class="text-primary">Core</span></a>
            <span class="badge text-bg-secondary d-none d-sm-inline">1.x</span>
            <ul class="navbar-nav flex-row docs-lang-nav ms-auto">
                <li class="nav-item"><a class="nav-link p-1${en_active}" href="../en/${slug}.html">EN</a></li>
                <li class="nav-item"><a class="nav-link p-1${uk_active}" href="../uk/${slug}.html">УКР</a></li>
                <li class="nav-item"><a class="nav-link p-1" href="../index.html" title="Home"><i class="bi bi-house"></i></a></li>
            </ul>
        </div>
    </header>

    <div class="container-xxl">
        <div class="row">
            <aside class="col-lg-3 col-xl-2">
                <div class="offcanvas-lg offcanvas-start text-bg-dark border-end" tabindex="-1" id="docsSidebar" aria-labelledby="docsSidebarLabel">
                    <div class="offcanvas-header border-bottom d-lg-none">
                        <h5 class="offcanvas-title" id="docsSidebarLabel">Menu</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" data-bs-target="#docsSidebar" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0 pt-lg-4">
                        <nav id="docs-sidebar" class="nav flex-column"></nav>
                    </div>
                </div>
            </aside>

            <main class="col-lg-9 col-xl-7 py-4 py-lg-5" id="docs-content">
                <h1 class="display-6 fw-bold mb-4">${title}</h1>
                <div class="border border-secondary-subtle rounded text-center text-body-secondary p-5">
                    <p class="mb-0">${stub_text}</p>
                </div>
                <nav id="docs-next-prev" class="mt-5" aria-label="Page navigation"></nav>
            </main>

            <aside class="col-xl-3 d-none d-xl-block docs-toc-wrap py-4 py-lg-5">
                <nav id="docs-toc" class="nav flex-column small position-sticky top-0 pt-1"></nav>
            </aside>
        </div>
    </div>

    <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/vendor/highlight/highlight.min.js"></script>
    <script src="../assets/vendor/clipboard/clipboard.min.js"></script>
    <script src="../assets/js/${nav_file}"></script>
    <script src="../assets/js/docs.js"></script>
</body>
</html>
EOF
}

for slug in "${!EN_TITLES[@]}"; do
    generate_stub "en" "$slug" "${EN_TITLES[$slug]}" "nav-en.js" \
        "This page is a placeholder. Content will be added in a future update." "en" " active" "" "Toggle navigation"
done

for slug in "${!UK_TITLES[@]}"; do
    generate_stub "uk" "$slug" "${UK_TITLES[$slug]}" "nav-uk.js" \
        "Ця сторінка є заглушкою. Зміст буде додано пізніше." "uk" "" " active" "Відкрити навігацію"
done

echo "Generated stub pages in en/ and uk/"
