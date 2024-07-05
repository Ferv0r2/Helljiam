import js from '@eslint/js'
import pluginImport from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import ts from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  {
    ignores: ['**/dist/*', '**/.yarn/*'],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  prettier,
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
        },
      ],
    },
  },
  {
    rules: {
      'vue/component-api-style': ['error', ['script-setup']], // Use script setup
      'vue/component-name-in-template-casing': ['error', 'PascalCase'], // PascalCase component names
      'vue/v-for-delimiter-style': ['error', 'in'], // Use 'in' delimiter for v-for
      'vue/multi-word-component-names': 'off',
      radix: ['error', 'always'], // Enforce radix when using parseInt()
      curly: 1, // Enforce curly braces for control statements
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': [2], // Disallow 'any' type
      '@typescript-eslint/prefer-ts-expect-error': [2], // Prefer @ts-expect-error over @ts-ignore
      '@typescript-eslint/ban-ts-comment': [0], // Allow @ts-comment
      'ordered-imports': [0], // Allow/disallow ordered imports
      'object-literal-sort-keys': [0], // Allow/disallow sorting of object literal keys
      'new-parens': 1, // Enforce parentheses with 'new'
      'no-bitwise': 1, // Disallow bitwise operators
      'no-cond-assign': 1, // Disallow assignment within conditionals
      'no-trailing-spaces': 0, // Allow/disallow trailing spaces
      'eol-last': 1, // Enforce newline at end of files
      'no-var': 2, // Disallow 'var' keyword
      'prettier/prettier': 'warn', // Integrate Prettier and warn about style discrepancies
      'no-void': ['error', { allowAsStatement: true }], // Disallow 'void' operator, except as a statement\
    },
  },
]
