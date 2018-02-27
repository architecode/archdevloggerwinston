import { IFormatter, ILogFormatter } from "../core";
import { Formatters } from "../formatters";

export const FormattersFactory = (formatters: ILogFormatter[] = []): IFormatter[] =>
  formatters.map(each => {
    let Formatter;

    if (each.module) {
      Formatter = require(each.module);
    } else if (each.formatter) {
      Formatter = Formatters.get(each.formatter);
    } else {
      throw new Error("INVALIDFORMATTER: Formatter must have 'module' or 'formatter' properties");
    }

    return Formatter;
  });
