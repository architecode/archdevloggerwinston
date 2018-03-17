const Winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

export const DefinedTransporters = {
  Console: "console",
  File: "file",
  Http: "http",
  DailyRotateFile: "daily-rotate-file",
};

export const Transporters = (() => {
  const TransportersMap = new Map<string, any>();

  TransportersMap.set(DefinedTransporters.Console, Winston.transports.Console);
  TransportersMap.set(DefinedTransporters.File, Winston.transports.File);
  TransportersMap.set(DefinedTransporters.Http, Winston.transports.Http);
  TransportersMap.set(DefinedTransporters.DailyRotateFile, (DailyRotateFile));

  return {
    get: (name: string) => TransportersMap.get(name.toLowerCase()),
    set: (name: string, transport: any) => TransportersMap.set(name.toLowerCase(), transport),
    clear: () => TransportersMap.clear()
  };
})();
