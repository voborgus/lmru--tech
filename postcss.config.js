module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
          content: ['./**/*.html', './**/*.js'],
        },
        autoprefixer: {
            browsers: [
                "last 2 versions",
                "Explorer >= 8"
            ]
        }
    },
}
