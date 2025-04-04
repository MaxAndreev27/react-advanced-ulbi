import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import i18Next from 'eslint-plugin-i18next';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';
import Index from 'eslint-plugin-future-slice';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: [
            '**/node_modules',
            '**/build',
            '**/storybook-static',
            '**/eslint.config.mjs',
            '**/jest.config.js',
        ],
    },
    ...compat.extends(
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:react-hooks/recommended',
    ),
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            react,
            '@typescript-eslint': typescriptEslint,
            i18next: i18Next,
            'react-hooks': reactHooks,
            'unused-imports': unusedImports,
            'future-slice': Index,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
                __IS_DEV__: true,
                __API__: true,
                __PROJECT__: true,
            },

            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        rules: {
            'unused-imports/no-unused-imports': 'error',
            'react/jsx-filename-extension': [
                2,
                {
                    extensions: ['.js', '.jsx', '.tsx'],
                },
            ],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'i18next/no-literal-string': [
                'warn',
                {
                    markupOnly: true,
                    ignoreAttribute: ['data-testid', 'to'],
                },
            ],
            'max-len': ['error', { ignoreComments: true, code: 100 }],
            'jsx-a11y/no-static-element-interactions': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
            'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
            'no-param-reassign': 'off',
            'no-undef': 'off',
            'future-slice/path-checker': ['error', { alias: '@' }],
            'future-slice/layer-imports': [
                'error',
                {
                    alias: '@',
                    ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
                },
            ],
            'future-slice/public-api-imports': [
                'error',
                {
                    alias: '@',
                    testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
                },
            ],
        },
    },
    {
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    },
    eslintConfigPrettier,
];
