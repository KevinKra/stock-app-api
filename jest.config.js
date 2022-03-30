module.exports = {
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/src/tests/config.ts'],
    verbose: true,
    globals: {
        'ts-jest': {
            tsconfig: './.tsconfig.json',
            // set global config for ts-jest
        },
    },
};
