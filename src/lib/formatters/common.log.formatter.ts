import { IFormatter } from "../core/iformatter";

export type CommonLogOptsType = {
  name: string;
  hostname: string;
  pid: string;
  time: string;
};

export const CommonLogFormatter: IFormatter<CommonLogOptsType> = {
  format: (logObj, opts) => {
    logObj.name = opts.name;
    logObj.hostname = opts.hostname;
    logObj.pid = opts.pid;
    logObj.time = opts.time;

    return logObj;
  },
  opts: (logger) => ({
    name: logger.Metadata.Logger,
    author: logger.Metadata.Author,
    hostname: logger.Metadata.hostname(),
    pid: logger.Metadata.pid(),
    time: logger.Metadata.timestamp()
  })
};
