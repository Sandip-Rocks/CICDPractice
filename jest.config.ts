import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src/app';
const baseTestDir = '<rootDir>/src/test';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    `${baseDir}/**/*.ts`,
    `${baseTestDir}/**/*.ts`
  ],
  testMatch: [
    `${baseTestDir}/**/*.test.ts`
  ]
};

export default config;