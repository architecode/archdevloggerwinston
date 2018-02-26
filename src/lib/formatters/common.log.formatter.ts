import { ILogFormatter } from "../core";

export type CommonLogOptsType = {
  name: string;
  hostname: string;
  pid: string;
  time: string;
};

export const CommonLogFormatter: ILogFormatter<CommonLogOptsType> = {
  format: (logObj, opts) => {
    logObj.name = opts.name;
    logObj.hostname = opts.hostname;
    logObj.pid = opts.pid;
    logObj.time = opts.time;

    return logObj;
  },
  opts: (logger) => ({
    name: logger.Headers.Author,
    hostname: logger.Headers.hostname(),
    pid: logger.Headers.pid(),
    time: logger.Headers.timestamp()
  })
};
