/** @type {import('next').NextConfig} */
// const { i18n } = require('./I18n.config');


const nextConfig = {
  reactStrictMode: true,
    i18n: {
      locales: ['ru-RU', 'en-US', 'es-ES', 'pt-BR'],
      defaultLocale: 'en-US',
    
  }

}

module.exports = nextConfig
