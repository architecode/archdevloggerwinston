import { ArchDevLoggerWinston } from "../archdevlogger.winston";

export interface ILogFormatter<OptsType = any> {
  format(logObj: any, opts: OptsType): void;
  opts(logger: ArchDevLoggerWinston): void;
}
