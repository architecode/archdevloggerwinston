import { ArchDevLogger } from "archdevlogger";

export class InvalidFormatterError extends ArchDevLogger.Errors.ArchDevLoggerError {
  constructor() {
    super("INVALIDFORMATTER: Formatter must have 'module' or 'formatter' properties");
  }
}

export class InvalidTransporterError extends ArchDevLogger.Errors.ArchDevLoggerError {
  constructor() {
    super("INVALIDTRANSPORTER: Transporter must have 'module' or 'transporter' properties");
  }
}
