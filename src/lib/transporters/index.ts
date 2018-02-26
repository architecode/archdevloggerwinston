const Winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

const TransportersMap = new Map<string, any>();

TransportersMap.set("console", Winston.transports.Console);
TransportersMap.set("file", Winston.transports.File);
TransportersMap.set("http", Winston.transports.Http);
TransportersMap.set("dailyrotatefile", (DailyRotateFile));

export const Transporters = {
  get: (name: string) => TransportersMap.get(name.toLowerCase()),
  set: (name: string, transport: any) => TransportersMap.set(name, transport)
};
