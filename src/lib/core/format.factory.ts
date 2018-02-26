import { ArchDevLoggerWinston } from "../archdevlogger.winston";
import { ILogFormatter } from "./ilog.formatter";
const Winston = require("winston");

export const FormatFactory = (logger: ArchDevLoggerWinston, formatters: ILogFormatter[] = []) => {
  const formats = formatters.map(formatter =>
    Winston.format(formatter.format)(formatter.opts(logger)));

  return Winston.format.combine(...formats, Winston.format.json());
};
