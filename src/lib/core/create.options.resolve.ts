import { ArchDevLoggerWinston } from "../archdevlogger.winston";
import { ArchDevLoggerWinstonProperties } from "../archdevlogger.winston.properties";
import { ICreateOptions } from "./icreate.options";
import { FormatResolve } from "./format.resolve";
import { FormattersFactory, TransportsFactory } from "../factories";

export const CreateOptionsResolve = (logger: ArchDevLoggerWinston, properties: ArchDevLoggerWinstonProperties): ICreateOptions => {
  const createOptions = properties.createOptions || {};
  const formatters = FormattersFactory(properties.formatters);

  return {
    level: createOptions.level || properties.level,
    levels: createOptions.levels || properties.levels,
    format: createOptions.format || FormatResolve(logger, formatters),
    transports: createOptions.transports || TransportsFactory(properties.transporters),
    exitOnError: createOptions.exitOnError,
  };
};
