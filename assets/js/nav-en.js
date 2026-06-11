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
                { slug: 'route-interceptors', label: 'Route Interceptors' },
                { slug: 'controllers', label: 'Controllers' },
                { slug: 'requests', label: 'Requests & Validation' },
                { slug: 'responses', label: 'Responses' },
                { slug: 'views', label: 'Views' },
                { slug: 'database', label: 'Database' }
            ]
        },
        {
            title: 'Security',
            items: [
                { slug: 'csrf', label: 'CSRF Protection' },
                { slug: 'data-masking', label: 'Data Masking' },
                { slug: 'safe-redirects', label: 'Safe Redirects' }
            ]
        },
        {
            title: 'Architecture',
            items: [
                { slug: 'service-container', label: 'Service Container' },
                { slug: 'service-providers', label: 'Service Providers' },
                { slug: 'telemetry', label: 'Telemetry' }
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
                { slug: 'components-overview', label: 'Component Concept' },
                { slug: 'creating-components', label: 'Creating a Component' },
                { slug: 'component-cli', label: 'CLI & Assets' }
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
        'middleware': { prev: 'routing', next: 'route-interceptors' },
        'route-interceptors': { prev: 'middleware', next: 'controllers' },
        'controllers': { prev: 'route-interceptors', next: 'requests' },
        'requests': { prev: 'controllers', next: 'responses' },
        'responses': { prev: 'requests', next: 'views' },
        'views': { prev: 'responses', next: 'database' },
        'database': { prev: 'views', next: 'csrf' },
        'csrf': { prev: 'database', next: 'data-masking' },
        'data-masking': { prev: 'csrf', next: 'safe-redirects' },
        'safe-redirects': { prev: 'data-masking', next: 'service-container' },
        'service-container': { prev: 'safe-redirects', next: 'service-providers' },
        'service-providers': { prev: 'service-container', next: 'telemetry' },
        'telemetry': { prev: 'service-providers', next: 'console' },
        'console': { prev: 'telemetry', next: 'console-commands' },
        'console-commands': { prev: 'console', next: 'components-overview' },
        'components-overview': { prev: 'console-commands', next: 'creating-components' },
        'creating-components': { prev: 'components-overview', next: 'component-cli' },
        'component-cli': { prev: 'creating-components' }
    }
};
