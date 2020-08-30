const withCSS = require('@zeit/next-css')
const withPWA = require('next-pwa')

module.exports = withCSS({/* my next config */}) 
module.exports = withPWA({
    pwa: {
        dest: 'public'
    }
})