module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-html"
  ],
  rules: {
    "scss/no-global-function-names": null,
    "no-descending-specificity": null,
    "custom-property-empty-line-before": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": [
          "global"
        ]
      }
    ]
  },
  overrides: [
    {
      "files": [
        "**/*.astro"
      ],
      "customSyntax": "postcss-html"
    }
  ],
  ignoreFiles: [
    "dist/**/*",
    "node_modules/**/*"
  ]
};
