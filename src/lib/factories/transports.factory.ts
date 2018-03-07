import { ILogTransporter } from "../core/ilog.transporter";
import { Transporters } from "../transporters";
import { InvalidTransporterError } from "../errors";

export const TransportsFactory = (transporters: ILogTransporter[] = []): any[] =>
  transporters.map(each => {
    let Transporter;

    if (each.module) {
      Transporter = require(each.module);
    } else if (each.transporter) {
      Transporter = Transporters.get(each.transporter);
    } else {
      throw new InvalidTransporterError();
    }

    return new Transporter(each.properties);
  });
