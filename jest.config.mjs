export default {
  collectCoverageFrom: ["**/*.ts", "**/*.js"],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: [],
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  rootDir: "src",
  testEnvironment: "jsdom",
  testRegex: ".spec.ts$|.spec.js$",
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        isolatedModules: true,
      },
    ],
  },
};
