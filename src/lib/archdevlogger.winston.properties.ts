import { LogProperties } from "archdevlogger";
import { ICreateOptions, ILogFormatter, ILogTransporters } from "./core";

export interface ArchDevLoggerWinstonProperties extends LogProperties {
  level?: string;
  formatters?: ILogFormatter[];
  transporters?: ILogTransporters[];
  createOptions?: ICreateOptions;
}
