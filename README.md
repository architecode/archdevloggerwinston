# ArchDevLoggerWinston

Logging Service with Extensible Logger Library using [Winston](https://github.com/winstonjs/winston)

## Overview

## Usage

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
  level: string,
  levels: {
    [level: string]: number
  },
  formatters: {
    formater: string;
    module: string;
  }[]
};
```
