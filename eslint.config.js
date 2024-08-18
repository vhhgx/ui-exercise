import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    ignores: ['**/dist/**', '**/node_modules/**'] // 忽略的文件或目录
  },
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 2021
    },
    plugins: { prettier }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['home', 'loading']
        }
      ], // 检查所有未使用的变量
      'no-unused-vars': [
        'error', // 当规则不符合时，ESLint 会将其报告为错误
        {
          vars: 'all', // 检查所有的变量，如果为local，则只检查函数内变量
          args: 'after-used', // 控制对函数参数的检查，只检查在函数体内没有使用的参数
          ignoreRestSiblings: false // 对剩余参数的处理
        }
      ], // 将 Prettier 规则作为 ESLint 错误
      'prettier/prettier': [
        'error',
        {
          htmlWhitespaceSensitivity: 'ignore',
          printWidth: 140,
          tabWidth: 2,
          useTabs: false,
          singleQuote: true,
          trailingComma: 'none',
          bracketSameLine: false,
          bracketSpacing: true,
          arrowParens: 'avoid',
          proseWrap: 'preserve',
          semi: false,
          objectCurlyNewline: {
            consistent: true
          }
        }
      ]
    }
  }
]
