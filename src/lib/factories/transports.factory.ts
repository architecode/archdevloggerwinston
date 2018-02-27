import { ILogTransporters } from "../core/ilog.transporters";
import { Transporters } from "../transporters";

export const TransportsFactory = (transporters: ILogTransporters[] = []) =>
  transporters.map(each => {
    let Transporter;

    if (each.module) {
      Transporter = require(each.module);
    } else if (each.transporter) {
      Transporter = Transporters.get(each.transporter);
    } else {
      throw new Error("INVALIDTRANSPORTER: Transporter must have 'module' or 'transport' properties");
    }

    return new Transporter(each.properties);
  });
