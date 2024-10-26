import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import storybook from 'eslint-plugin-storybook';

console.log(storybook.configs.recommended);
export default tseslint.config(
  { ignores: ['dist', '.storybook'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      storybook,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      ...storybook.configs.recommended.rules,
      'prettier/prettier': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: storybook.configs.recommended.overrides[0].files,
    rules: {
      ...storybook.configs.recommended.overrides[0].rules,
    },
  },
  {
    files: storybook.configs.recommended.overrides[1].files,
    rules: {
      ...storybook.configs.recommended.overrides[1].rules,
    },
  }
);
