import { CommonLogFormatter } from "./lib/formatters";
import { Transporters } from "./lib/transporters";
import { ArchDevLoggerWinston, ArchDevLoggerWinstonProperties } from "./lib";

export { ArchDevLoggerWinstonProperties } from "./lib";
export { ICreateOptions, ILogFormatter, ILogTransporters } from "./lib/core";

module.exports = ArchDevLoggerWinston;
module.exports.Formatters = {
  CommonLogFormatter
};
module.exports.Transporters = Transporters;
