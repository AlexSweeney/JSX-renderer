

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: async (config) => {
    // Find existing CSS rule and update it to include postcss-loader
    const cssRule = config.module.rules.find(rule =>
      rule.test && rule.test.toString().includes('css')
    );

    if (cssRule && cssRule.use) {
      // Add postcss-loader to existing CSS rule
      cssRule.use.push('postcss-loader');
    }

    return config;
  },
};
export default config;