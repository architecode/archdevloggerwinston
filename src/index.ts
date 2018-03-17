import { ArchDevLoggerWinston } from "./lib";
import { InvalidFormatterError, InvalidTransporterError } from "./lib/errors";
import { FormattersFactory, TransportsFactory } from "./lib/factories";
import { Formatters, DefinedFormatters } from "./lib/formatters";
import { Transporters, DefinedTransporters } from "./lib/transporters";

export { ICreateOptions, IFormatter, ILogFormatter, ILogTransporter } from "./lib/core";
export { ArchDevLoggerWinstonProperties } from "./lib";

module.exports = ArchDevLoggerWinston;
module.exports.Errors = {
  InvalidFormatterError,
  InvalidTransporterError,
};
module.exports.Factories = {
  FormattersFactory,
  TransportsFactory,
};
module.exports.Formatters = Formatters;
module.exports.DefinedFormatters = DefinedFormatters;
module.exports.Transporters = Transporters;
module.exports.DefinedTransporters = DefinedTransporters;
