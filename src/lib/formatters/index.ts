import { IFormatter } from "../core/iformatter";
import { CommonLogFormatter } from "./common.log.formatter";

export {
  CommonLogFormatter
};

export const Formatters = (() => {
  const FormattersMap = new Map<string, IFormatter>();
  FormattersMap.set("CommonLog", CommonLogFormatter);

  return {
    get: (name: string) => FormattersMap.get(name.toLowerCase()),
    set: (name: string, formatter: any) => FormattersMap.set(name, formatter),
    clear: () => FormattersMap.clear()
  };
})();
