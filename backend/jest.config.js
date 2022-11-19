/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    coverageProvider: 'v8',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.test.ts'],
    transform: {
        '^.+\\.ts?$': '<rootDir>/node_modules/ts-jest/dist',
    },
    moduleNameMapper: {
        '^@db/(.*)$': '<rootDir>/src/infra/db/$1',
        '^@models/(.*)$': '<rootDir>/src/domain/models/$1',
        '^@validators/(.*)$': '<rootDir>/src/domain/validators/$1',
        '^@helpers/(.*)$': '<rootDir>/src/domain/helpers/$1',
        '^@exceptions/(.*)$': '<rootDir>/src/domain/exceptions/$1',
        '^@controllers/(.*)$': '<rootDir>/src/presentation/controllers/$1',
        '^@middlewares/(.*)$': '<rootDir>/src/presentation/middlewares/$1',
        '^@routes/(.*)$': '<rootDir>/src/presentation/routes/$1',
        '^@services/(.*)$': '<rootDir>/src/presentation/services/$1',
    },
};
