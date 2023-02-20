module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    },
    testMatch: [
      '**/@(*.)@(spec|test).(j|t)s?(x)',
      '**/specs/**/(spec|test).(j|t)s?(x)'
    ]
  };