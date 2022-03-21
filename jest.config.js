const esModules = ['@agm', 'ngx-bootstrap', 'lodash-es'].join('|');

const config = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePaths: ['src'],
  setupFilesAfterEnv: ['./scripts/setupTest.ts'],
  globalSetup: './scripts/setupGlobalJest.ts',
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  modulePathIgnorePatterns: ['/core'],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jest-environment-jsdom-fifteen',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'text-summary', 'html'],
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/components/css-utilities/**',
    '!src/utils/**',
    '!**/dist/**/*',
    '!**/__stories__/**/*',
    '!**/*.story.tsx',
  ],
  globals: {
    window: true,
    timers: 'fake',
    'ts-jest': {
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = config;
