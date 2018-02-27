import { ILogTransporter } from "../core/ilog.transporter";
import { Transporters } from "../transporters";

export const TransportsFactory = (transporters: ILogTransporter[] = []): any[] =>
  transporters.map(each => {
    let Transporter;

    if (each.module) {
      Transporter = require(each.module);
    } else if (each.transporter) {
      Transporter = Transporters.get(each.transporter);
    } else {
      throw new Error("INVALIDTRANSPORTER: Transporter must have 'module' or 'transporter' properties");
    }

    return new Transporter(each.properties);
  });
