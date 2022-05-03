module.exports = {
    images: {
      loader: 'imgix',
      path: 'https://akrawit.com/public/',
    },
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
      }
    },
  }