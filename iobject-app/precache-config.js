var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
 
module.exports = {
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/],
  stripPrefix: 'dist',
  root: 'dist/',
 
  plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'iobjectapp',
        filename: 'service-worker.js',
        staticFileGlobs: [
          'dist/index.html',
          'dist/**.js',
          'dist/**.css',
        ],
        minify: true,
        stripPrefix: 'dist/assets/',
        mergeStaticsConfig: true
      }
    ),
  ],
}