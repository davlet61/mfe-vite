module.exports = {
  stories: ['../../../packages/ui/**/*.stories.mdx', '../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  // viteFinal: async (config) => {
  //   config.root = dirname(require.resolve('@storybook/builder-vite'));
  //   config.server.fsServe = undefined;
  //   return config;
  // },
};
