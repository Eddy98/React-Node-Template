import chalk from 'chalk';

type LoggerMethod = (message: string) => void;

export interface ServerSideLogger {
  name: string;
  info: LoggerMethod;
  debug: LoggerMethod;
  error: LoggerMethod;
  warn: LoggerMethod;
}

class Logger implements ServerSideLogger {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  error(message: string) {
    console.error(chalk.red(`${this.name}_LOGGER_ERROR: ${message}`));
  }

  warn(message: string) {
    console.warn(chalk.yellow(`${this.name}_LOGGER_WARN: ${message}`));
  }

  info(message: string) {
    console.log(chalk.white(`${this.name}_LOGGER_INFO: ${message}`));
  }

  debug(message: string) {
    console.log(chalk.blue(`${this.name}_LOGGER_DEBUG: ${message}`));
  }
}

export const logger = new Logger('API');
