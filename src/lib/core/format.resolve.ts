import { ArchDevLoggerWinston } from "../archdevlogger.winston";
import { IFormatter } from "./iformatter";
const Winston = require("winston");

export const FormatResolve = (logger: ArchDevLoggerWinston, formatters: IFormatter[] = []) => {
  const formats = formatters.map(each =>
    Winston.format(each.format)(each.opts(logger)));

  return Winston.format.combine(...formats, Winston.format.json());
};
