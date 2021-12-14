// const postcssJitProps = require('postcss-jit-props')
// const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')
const postcssNesting = require('postcss-nesting')
// const postcssCustomMedia = require('postcss-custom-media')
// const postcssMediaRanges = require('postcss-media-minmax')
const OpenProps = require('open-props')

module.exports = {
  plugins: [
    postcssImport({ path: ['src'] }),
    // postcssPresetEnv({
    //   stage: 0,
    //   autoprefixer: false,
    //   features: {
    //     'logical-properties-and-values': false, 
    //     'prefers-color-scheme-query': false, 
    //     'gap-properties': false,
    //     'custom-properties': false,
    //     'place-properties': false,
    //     'not-pseudo-class': false,
    //     'focus-visible-pseudo-class': false,
    //     'focus-within-pseudo-class': false,
    //     'color-functional-notation': false,
    //   }
    // }),
    // postcssCustomMedia(),
    // postcssMediaRanges(),
    // postcssJitProps(OpenProps),
    postcssNesting(),
    // require('autoprefixer'),
  ],
};
