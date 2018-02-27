import { ArchDevLoggerWinston } from "../archdevlogger.winston";
import { IFormatter } from "./iformatter";
const Winston = require("winston");

export const FormatResolve = (logger: ArchDevLoggerWinston, formatters: IFormatter[] = []) => {
  const formats = formatters.map(formatter =>
    Winston.format(formatter.format)(formatter.opts(logger)));

  return Winston.format.combine(...formats, Winston.format.json());
};
