const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',

  // Add or extend the moduleNameMapper field
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@headlessui/react': '<rootDir>/node_modules/@headlessui/react',
  },
};

module.exports = createJestConfig(config);
