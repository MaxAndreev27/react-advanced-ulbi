import type { StorybookConfig } from '@storybook/react-webpack5';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            builder: {
                useSWC: true,
            },
        },
    },
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
    ],
    webpackFinal: async (config) => {
        const paths: BuildPaths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
            favicon: '',
            buildFavicon: '',
        };
        config!.resolve!.modules!.push(paths.src);
        config!.resolve!.extensions!.push('.ts', '.tsx');

        // eslint-disable-next-line no-param-reassign
        //@ts-ignore
        config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });

        config!.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config!.module!.rules.push(buildCssLoader(true));

        config!.plugins!.push(
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('https://testapi.com'),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        );

        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions,
                }),
            ];
        }
        return config;
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
};

export default config;
