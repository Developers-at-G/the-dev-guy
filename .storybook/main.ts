import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  "stories": [
    "../src/stories/Welcome.stories.tsx",
    "../src/stories/PortfolioButton.stories.tsx",
    "../src/stories/DevGuyButton.stories.tsx",
    "../src/stories/DevGuyCard.stories.tsx",
    "../src/stories/DevGuyInput.stories.tsx"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  viteFinal: async (config) => {
    config.define = {
      ...config.define,
      global: 'globalThis',
      'process.env': {}
    };
    return config;
  }
};
export default config;