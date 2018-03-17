import { IFormatter } from "../core/iformatter";
import { CommonLogFormatter } from "./common.log.formatter";

export { CommonLogFormatter } from "./common.log.formatter";

export const DefinedFormatters = {
  CommonLog: "commonlog",
};

export const Formatters = (() => {
  const FormattersMap = new Map<string, IFormatter>();

  FormattersMap.set(DefinedFormatters.CommonLog, CommonLogFormatter);

  return {
    get: (name: string) => FormattersMap.get(name.toLowerCase()),
    set: (name: string, formatter: any) => FormattersMap.set(name.toLowerCase(), formatter),
    clear: () => FormattersMap.clear()
  };
})();
