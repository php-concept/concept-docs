window.DOCS_NAV = {
    lang: 'uk',
    version: '1.x',
    sections: [
        {
            title: 'Пролог',
            items: [
                { slug: 'index', label: 'Вступ' },
                { slug: 'release-notes', label: 'Примітки до релізу' },
                { slug: 'upgrade-guide', label: 'Оновлення' },
                { slug: 'contributing', label: 'Участь у розробці' }
            ]
        },
        {
            title: 'Початок роботи',
            items: [
                { slug: 'installation', label: 'Встановлення' },
                { slug: 'setup', label: 'Налаштування' },
                { slug: 'configuration', label: 'Конфігурація' },
                { slug: 'directory-structure', label: 'Структура каталогів' },
                { slug: 'request-lifecycle', label: 'Життєвий цикл запиту' }
            ]
        },
        {
            title: 'Основи',
            items: [
                { slug: 'routing', label: 'Маршрутизація' },
                { slug: 'middleware', label: 'Middleware' },
                { slug: 'controllers', label: 'Контролери' },
                { slug: 'requests', label: 'Запити та валідація' },
                { slug: 'responses', label: 'Відповіді' },
                { slug: 'views', label: 'Представлення' },
                { slug: 'database', label: 'База даних' }
            ]
        },
        {
            title: 'Архітектура',
            items: [
                { slug: 'service-container', label: 'Контейнер сервісів' },
                { slug: 'service-providers', label: 'Провайдери сервісів' },
                { slug: 'events', label: 'Події' }
            ]
        },
        {
            title: 'Консоль',
            items: [
                { slug: 'console', label: 'Робота з консоллю' },
                { slug: 'console-commands', label: 'Створення команд' }
            ]
        },
        {
            title: 'Компоненти',
            items: [
                { slug: 'config', label: 'Конфігурація' },
                { slug: 'logger', label: 'Логування' },
                { slug: 'validator', label: 'Валідатор' },
                { slug: 'csrf', label: 'Захист CSRF' }
            ]
        }
    ],
    nextPrev: {
        'index': { next: 'release-notes' },
        'release-notes': { prev: 'index', next: 'upgrade-guide' },
        'upgrade-guide': { prev: 'release-notes', next: 'contributing' },
        'contributing': { prev: 'upgrade-guide', next: 'installation' },
        'installation': { prev: 'contributing', next: 'setup' },
        'setup': { prev: 'installation', next: 'configuration' },
        'configuration': { prev: 'setup', next: 'directory-structure' },
        'directory-structure': { prev: 'configuration', next: 'request-lifecycle' },
        'request-lifecycle': { prev: 'directory-structure', next: 'routing' },
        'routing': { prev: 'request-lifecycle', next: 'middleware' },
        'middleware': { prev: 'routing', next: 'controllers' },
        'controllers': { prev: 'middleware', next: 'requests' },
        'requests': { prev: 'controllers', next: 'responses' },
        'responses': { prev: 'requests', next: 'views' },
        'views': { prev: 'responses', next: 'database' },
        'database': { prev: 'views', next: 'service-container' },
        'service-container': { prev: 'database', next: 'service-providers' },
        'service-providers': { prev: 'service-container', next: 'events' },
        'events': { prev: 'service-providers', next: 'console' },
        'console': { prev: 'events', next: 'console-commands' },
        'console-commands': { prev: 'console', next: 'config' },
        'config': { prev: 'console-commands', next: 'logger' },
        'logger': { prev: 'config', next: 'validator' },
        'validator': { prev: 'logger', next: 'csrf' },
        'csrf': { prev: 'validator' }
    }
};
