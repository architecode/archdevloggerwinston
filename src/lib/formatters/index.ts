import { IFormatter } from "../core/iformatter";
import { CommonLogFormatter } from "./common.log.formatter";

export { CommonLogFormatter } from "./common.log.formatter";

export const Formatters = (() => {
  const FormattersMap = new Map<string, IFormatter>();

  const formatters = {
    get: (name: string) => FormattersMap.get(name.toLowerCase()),
    set: (name: string, formatter: any) => FormattersMap.set(name.toLowerCase(), formatter),
    clear: () => FormattersMap.clear()
  };

  formatters.set("CommonLog", CommonLogFormatter);

  return formatters;
})();
