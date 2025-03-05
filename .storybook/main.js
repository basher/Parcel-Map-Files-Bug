/* Github Flavoured Markdown */
/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: false,
                backgrounds: false,
            }
        },
    ],
    framework: {
        name: '@storybook/html-vite',
        options: {},
    },
    docs: {
        autodocs: true,
    },
};
export default config;
