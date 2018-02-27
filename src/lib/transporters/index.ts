const Winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

export const Transporters = (() => {
  const TransportersMap = new Map<string, any>();

  TransportersMap.set("console", Winston.transports.Console);
  TransportersMap.set("file", Winston.transports.File);
  TransportersMap.set("http", Winston.transports.Http);
  TransportersMap.set("daily-rotate-file", (DailyRotateFile));

  return {
    get: (name: string) => TransportersMap.get(name.toLowerCase()),
    set: (name: string, transport: any) => TransportersMap.set(name, transport),
    clear: () => TransportersMap.clear()
  };
})();
