import love from 'eslint-config-love';
import prettier from 'eslint-config-prettier';

export default [
  {
    ...love,
    ...prettier,
    files: ['**/*.js', '**/*.ts'],
  },
];
