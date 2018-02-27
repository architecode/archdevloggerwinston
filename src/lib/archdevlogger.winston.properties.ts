import { LogProperties } from "archdevlogger";
import { ICreateOptions, ILogFormatter, ILogTransporter } from "./core";

export interface ArchDevLoggerWinstonProperties extends LogProperties {
  level?: string;
  formatters?: ILogFormatter[];
  transporters?: ILogTransporter[];
  createOptions?: ICreateOptions;
}
