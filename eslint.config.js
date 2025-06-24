import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import { importX } from 'eslint-plugin-import-x'



export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    files: [
      '**/*.{ts,tsx,js,jsx}'
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic,
      'import-x': importX,
    },
    rules: {

      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      '@stylistic/indent': ['warn', 2],
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/jsx-quotes': ['warn', 'prefer-double'],
      '@stylistic/semi': ['warn', 'never'],
      '@stylistic/no-extra-semi': ['error'],
      '@stylistic/max-len': ['warn', { code: 100, ignoreStrings: true }],
      'import-x/newline-after-import': ['error', { count: 3 }],

    },
  },
)
