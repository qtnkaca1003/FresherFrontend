// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};

module.exports = config;

// Or async function

