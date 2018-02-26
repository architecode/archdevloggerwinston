import { ArchDevLoggerWinston } from "../archdevlogger.winston";
import { ArchDevLoggerWinstonProperties } from "../archdevlogger.winston.properties";
import { ICreateOptions } from "./icreate.options";
import { FormatFactory } from "./format.factory";
import { TransportsFactory } from "./transports.factory";

export const CreateOptionsResolve = (logger: ArchDevLoggerWinston, properties: ArchDevLoggerWinstonProperties): ICreateOptions => {
  const createOptions = properties.createOptions || {};

  return {
    level: createOptions.level || properties.level,
    levels: createOptions.levels || properties.levels,
    format: createOptions.format || FormatFactory(logger, properties.formatters),
    transports: createOptions.transports || TransportsFactory(properties.transporters),
    exitOnError: createOptions.exitOnError,
  };
};
