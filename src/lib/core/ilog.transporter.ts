export interface ILogTransporter {
  transporter?: string;
  module?: { type: string; resource: string; options?: any; };
  properties?: any;
}
