const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.ts$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  collectCoverage: true,
  coverageReporters: ['json-summary'],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/test/_helpers_/",
  ],
  collectCoverageFrom: [
    "src/**/{!(ignore-me),}.ts"
  ]
};
