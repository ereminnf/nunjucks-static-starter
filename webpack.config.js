const { createConfig } = require('nunjucks-static/lib/webpack')
const { resolvePath } = require('nunjucks-static/lib/webpack/utils')

module.exports = (env, arg) =>
    createConfig(env, arg, {
        /**
         * Paths for nunjucks-static, pass an object here if you need to override default paths
         */
        paths: {
            src: resolvePath('src'),
            public: resolvePath('public'),
            build: resolvePath('build'),
            templates: resolvePath('src'),
            pages: resolvePath('src', 'pages'),
            html: resolvePath('build/html'),
        },
        /**
         * Env variables that will be available in js.
         * By default, createConfig collects variables from .env at the root of the project
         */
        env: {
            ENV_IN_JS: 'ENV_IN_JS',
        },
        /**
         * Variables that will be available in nunjucks templates
         */
        data: {
            var_in_njk: 'var_in_njk',
        },
        /**
         * In the override property, override the webpack config
         */
        override: {
            entry: {
                layout: resolvePath('src/layout'),
                main: resolvePath('src/pages/main'),
                about: resolvePath('src/pages/about'),
                about_us: resolvePath('src/pages/about/pages/us'),
                error: resolvePath('src/pages/error'),
            },
        },
    })
