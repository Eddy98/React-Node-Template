import chalk from 'chalk';

export class Logger {
  constructor(name) {
    this.name = name;
  }

  error(message) {
    console.error(`${this.name}_LOGGER_ERROR: ${message}`);
  }

  warn(message) {
    console.warn(`${this.name}_LOGGER_WARN: ${message}`);
  }

  info(message) {
    console.log(`${this.name}_LOGGER_INFO: ${message}`);
  }

  debug(message) {
    console.log(chalk.blue(`${this.name}_LOGGER_INFO: ${message}`));
  }
}
