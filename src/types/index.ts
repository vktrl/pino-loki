/**
 * Different log levels detected by loki
 */
export enum LokiLogLevel {
  Debug = 'debug',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
  Critical = 'critical',
}

/**
 * Shape for a Loki log entry
 */
export interface LokiLog {
  stream: {
    level: LokiLogLevel
    [key: string]: string
  }
  values: [string, string][]
}

/**
 * Shape for a Pino log entry
 */
export interface PinoLog {
  level: number
  [key: string]: any
}

/**
 * Options for the Pino-Loki transport
 */
export interface LokiOptions {
  /**
   * URL for Loki
   */
  host: string

  /**
   * Timeout for request to Loki
   */
  timeout?: number

  /**
   * If false, errors will be displayed in the console
   */
  silenceErrors?: boolean

  /**
   * Should logs be sent in batch mode
   */
  batching?: boolean

  /**
   * The interval at which batched logs are sent in seconds
   */
  interval?: number

  /**
   * Replace pino logs timestamps with Date.now()
   *
   * Be careful when using batch mode, that will cause all logs
   * to have the same timestamp
   */
  replaceTimestamp?: boolean

  /**
   * Additional labels to be added to all Loki logs
   */
  labels?: {
    [key: string]: string
  }

  /**
   * Custom pino to loki log level mapping, merged with the default one.
   * @default
   *    10: LokiLogLevel.Debug,
        20: LokiLogLevel.Debug,
        30: LokiLogLevel.Info,
        40: LokiLogLevel.Warning,
        50: LokiLogLevel.Error,
        60: LokiLogLevel.Critical
   */

  levelMap?: {
    [key: number]: LokiLogLevel
  }

  /**
   * Basic auth credentials to be used when sending logs to Loki
   */
  basicAuth?: {
    username: string
    password: string
  }

  /**
   * Headers to be sent when pushing logs to Loki API
   */
  headers?: Record<string, string>

  /**
   * Select log message's props to set as Loki labels
   */
  propsToLabels?: string[]
}
