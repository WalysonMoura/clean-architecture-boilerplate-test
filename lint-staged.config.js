module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'pnpm lint',
    //  'pnpm format',
    // 'pnpm test'
  ],
  '**/*.ts?(x)': () => 'pnpm tsc',
  '*.{json,yaml}': ['prettier --write'],
}
