import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import next from 'eslint-config-next'

export default [
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    next(),
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json'
            }
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'react/react-in-jsx-scope': 'off'
        }
    }
]
