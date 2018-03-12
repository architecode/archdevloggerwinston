import { ArchDevLogger } from "archdevlogger";
import { ArchDevLoggerWinstonProperties } from "./archdevlogger.winston.properties";
import { CreateOptionsResolve } from "./core";
const Winston = require("winston");

export class ArchDevLoggerWinston extends ArchDevLogger.ExtensibleLogger<ArchDevLoggerWinstonProperties> {
  private Logger: any;

  configure(name: string, type: string, logger: string, properties: ArchDevLoggerWinstonProperties) {
    super.configure(name, type, logger, properties);

    const options = CreateOptionsResolve(this, properties);
    Object.defineProperties(this, {
      "Logger": {
        configurable: false,
        enumerable: false,
        writable: false,
        value: Winston.createLogger(options)
      }
    });
  }

  log(obj: any) {
    if (obj.level && obj.message) {
      this.Logger.log(obj);
    } else {
      const level = obj.level || "info";
      const logObj = Object.assign({ level }, obj);

      this.Logger.log(logObj);
    }
  }

  logFormat(level: string, message: string, data?: object) {
    this.Logger.log(level, message, data);
  }
}
