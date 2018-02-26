import { ILogTransporters } from "./ilog.transporters";
import { Transporters } from "../transporters";

export const TransportsFactory = (transporters: ILogTransporters[] = []) => transporters.map(each => {
  let Transporter;

  if (each.module) {
    Transporter = require(each.module);
  } else if (each.transport) {
    Transporter = Transporters.get(each.transport);
  } else {
    throw new Error("INVALIDTRANSPORT: Transport must have 'module' or 'transport' properties");
  }

  return new Transporter(each.properties);
});
