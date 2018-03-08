import { ArchDevLogger } from "archdevlogger";
import { IFormatter, ILogFormatter } from "../core";
import { Formatters } from "../formatters";
import { InvalidFormatterError } from "../errors";

export const FormattersFactory = (formatters: ILogFormatter[] = []): IFormatter[] =>
  formatters.map(each => {
    let Formatter;

    if (each.module) {
      Formatter = ArchDevLogger.Core.Loader.loadLoggerModule(each.module);
    } else if (each.formatter) {
      Formatter = Formatters.get(each.formatter);
    } else {
      throw new InvalidFormatterError();
    }

    return Formatter;
  });
