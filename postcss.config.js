module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
          content: ['**/*.html', '**/*.js'],
          whitelist: ['td-cover-block--height-max', 'td-cover-block--height-min']
        },
        autoprefixer: {
            browsers: [
                "last 2 versions",
                "Explorer >= 8"
            ]
        }
    },
}
