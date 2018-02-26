import { CommonLogFormatter } from "./lib/formatters";
import { ArchDevLoggerWinston, ArchDevLoggerWinstonProperties } from "./lib";

export { ArchDevLoggerWinstonProperties } from "./lib";
export { ILogFormatter } from "./lib/core";

module.exports = ArchDevLoggerWinston;
module.exports.Formatters = {
  CommonLogFormatter
};
