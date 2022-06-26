const env = process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV

export const DEFAULT_EMPTY = "-"

export const ENV = Object.freeze({
  DEV: env === "development",
  STUB: env === "stub",
  PRD: env === "production",
  TEST: env === "test",
})

export const APP_VERSION = process.env.REACT_APP_VERSION || "1.0.0"

export const ENV_CONFIG_DEFAULT = Object.freeze({
  NODE_ENV: process.env.REACT_APP_NODE_ENV || "production",
  API_URL: process.env.REACT_APP_API_URL,
  API_TIME_OUT: 45000,
  LOG_LEVEL: process.env.REACT_APP_LOG_LEVEL || "error",
})
