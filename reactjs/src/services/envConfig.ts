import axios from "axios"
import { ENV_CONFIG_DEFAULT } from "constants/app"
import { logDev } from "utils/logs"
import { REACT_ENVS_PATH } from "constants/api"

export interface EnvConfigResponse {
  nodeEnv: string
  apiUrl?: string
  apiTimeout: number
  logLevel: string
}

export const EnvConfig: EnvConfigResponse = {
  nodeEnv: ENV_CONFIG_DEFAULT.NODE_ENV,
  apiUrl: ENV_CONFIG_DEFAULT.API_URL,
  apiTimeout: ENV_CONFIG_DEFAULT.API_TIME_OUT,
  logLevel: ENV_CONFIG_DEFAULT.LOG_LEVEL,
}

export const getEnvConfig = async () => {
  try {
    const env = (await axios.get(REACT_ENVS_PATH)).data as EnvConfigResponse

    if (env) {
      EnvConfig.nodeEnv = env.nodeEnv || ENV_CONFIG_DEFAULT.NODE_ENV
      EnvConfig.apiTimeout =
        isNaN(env.apiTimeout) || env.apiTimeout < 0
          ? ENV_CONFIG_DEFAULT.API_TIME_OUT
          : +env.apiTimeout
      EnvConfig.apiUrl = env.apiUrl || ENV_CONFIG_DEFAULT.API_URL
      EnvConfig.logLevel = env.logLevel || ENV_CONFIG_DEFAULT.LOG_LEVEL
    }
  } catch (error) {
    logDev("getEnvConfig error", error)
  }
  logDev("EnvConfig", EnvConfig)
}
