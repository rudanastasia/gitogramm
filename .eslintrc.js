module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard', 'plugin:storybook/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'no-multiple-empty-lines': [2, {"max": 99999, "maxEOF": 0}], 
    'semi': 0,
    'indent': 'off',
    "vue/no-parsing-error": [
      0, 
      {
      "x-invalid-end-tag": false,
      "end-tag-with-attributes": false,
      "unexpected-character-in-attribute-name": false,
      "space-before-function-paren": false,
      "vue/multi-word-component-names": false,
    }
  ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
