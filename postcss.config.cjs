const postcssImport = require('postcss-import')
const postcssNesting = require('postcss-nesting')

module.exports = {
  plugins: [
    postcssImport({ path: ['src'] }),
    postcssNesting(),
    // require('autoprefixer'),
  ],
};
