import { LogProperties } from "archdevlogger";
import { ICreateOptions, ILogFormatter } from "./core";

export interface ArchDevLoggerWinstonProperties extends LogProperties {
  formatters?: ILogFormatter[];
  createOptions?: ICreateOptions;
}
