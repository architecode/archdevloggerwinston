import { ILoggerProperties } from "archdevlogger";
import { ICreateOptions, ILogFormatter, ILogTransporter } from "./core";

export interface ArchDevLoggerWinstonProperties extends ILoggerProperties {
  level?: string;
  formatters?: ILogFormatter[];
  transporters?: ILogTransporter[];
  createOptions?: ICreateOptions;
}
