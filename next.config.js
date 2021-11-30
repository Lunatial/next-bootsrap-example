const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        runtimeCaching,
    },
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en', 'hu'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'hu',
    },
    reactStrictMode: true,
})
