import type { StorybookConfig } from '@storybook/react-webpack5';
import type { RuleSetRule, RuleSetUseItem } from 'webpack';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    const rules: RuleSetRule[] = config.module?.rules as RuleSetRule[] || [];

    const cssRule = rules.find(
      (rule) =>
        rule.test instanceof RegExp && rule.test.toString().includes('css')
    );

    if (cssRule) {
      if (Array.isArray(cssRule.use)) {
        (cssRule.use as RuleSetUseItem[]).push('postcss-loader');
      } else if (typeof cssRule.use === 'string') {
        cssRule.use = [cssRule.use, 'postcss-loader'];
      } else if (typeof cssRule.use === 'function') {
        console.warn('Skipping cssRule.use because it is a function');
      }
    }

    return config;
  },
};

export default config;
