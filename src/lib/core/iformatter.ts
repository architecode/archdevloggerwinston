import { ArchDevLoggerWinston } from "../archdevlogger.winston";

export interface IFormatter<OptsType = any, LogObj = any> {
  format(logObj: LogObj, opts: OptsType): LogObj;
  opts(logger: ArchDevLoggerWinston): void;
}
