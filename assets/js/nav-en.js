window.DOCS_NAV = {
    lang: 'en',
    version: '1.x',
    sections: [
        {
            title: 'Prologue',
            items: [
                { slug: 'index', label: 'Introduction' },
                { slug: 'release-notes', label: 'Release Notes' },
                { slug: 'upgrade-guide', label: 'Upgrade Guide' },
                { slug: 'contributing', label: 'Contributing' }
            ]
        },
        {
            title: 'Getting Started',
            items: [
                { slug: 'installation', label: 'Installation' },
                { slug: 'setup', label: 'Setup' },
                { slug: 'configuration', label: 'Configuration' },
                { slug: 'directory-structure', label: 'Directory Structure' },
                { slug: 'request-lifecycle', label: 'Request Lifecycle' }
            ]
        },
        {
            title: 'The Basics',
            items: [
                { slug: 'routing', label: 'Routing' },
                { slug: 'middleware', label: 'Middleware' },
                { slug: 'controllers', label: 'Controllers' },
                { slug: 'requests', label: 'Requests & Validation' },
                { slug: 'responses', label: 'Responses' },
                { slug: 'views', label: 'Views' },
                { slug: 'database', label: 'Database' }
            ]
        },
        {
            title: 'Architecture',
            items: [
                { slug: 'service-container', label: 'Service Container' },
                { slug: 'service-providers', label: 'Service Providers' },
                { slug: 'events', label: 'Events' }
            ]
        },
        {
            title: 'Console',
            items: [
                { slug: 'console', label: 'Using the Console' },
                { slug: 'console-commands', label: 'Creating Commands' }
            ]
        },
        {
            title: 'Components',
            items: [
                { slug: 'config', label: 'Configuration' },
                { slug: 'logger', label: 'Logger' },
                { slug: 'validator', label: 'Validator' },
                { slug: 'csrf', label: 'CSRF Protection' }
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
