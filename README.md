# ArchDevLoggerWinston

Logging Service with Extensible Logger Library using [Winston](https://github.com/winstonjs/winston)

## Overview



## Usages

#### Logger (using Winston)

```JavaScript
const Logger = require('archdevloggerwinston');

const properties = {...};

const logger = new Logger('name', 'type', 'logger', properties);
logger.log('info', 'message');
```

#### Logger Properties

```TypeScript
const LoggerProperties = {
  level: string;
  levels: {
    [level: string]: number;
  };
  metadata: any;
  formatters: {
    formatter?: string;
    module?: { type: string; resource: string; options?: any; };
  }[];
  transporters: {
    transporter?: string;
    module?: { type: string; resource: string; options?: any; };
    properties?: any;
  }[];
  createOptions: {
    level?: string;
    levels?: {
      [level: string]: number;
    };
    format?: any;
    transports?: any[];
    exitOnError?: boolean;
  };
};
```

+ **level** - defines **level** applied logger instance
+ **levels** - defines all **levels** of logger instance
+ **metadata** - defines **metadata** of logger instance
+ **formatters** - defines an array of **formatters** that create format in logger instance
+ **transporters** - defines an array of **transporters** that provide transports in logger instance
+ **createOptions** - defines **options** to create a logger instance
