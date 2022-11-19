/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    coverageProvider: 'v8',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.test.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/dist',
    },
};
