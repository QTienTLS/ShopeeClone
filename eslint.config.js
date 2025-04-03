import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier' // Thêm plugin prettier
import prettierConfig from 'eslint-config-prettier' // Thêm config prettier

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierConfig // Thêm prettierConfig vào extends.  QUAN TRỌNG: Phải đặt cuối cùng.
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Hoặc phiên bản ECMAScript bạn đang sử dụng
      globals: globals.browser,
      parserOptions: {
        // Thêm parserOptions để chỉ định sourceType và ecmaFeatures
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier // Thêm plugin prettier vào danh sách plugins
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error' // Bật quy tắc prettier/prettier.  Báo lỗi nếu code không đúng format Prettier.
      // Bạn có thể tắt các quy tắc ESLint mà bạn thấy không cần thiết, hoặc xung đột với Prettier (nếu có).
      // Ví dụ:
      // 'no-unused-vars': 'off',
    }
  }
)
