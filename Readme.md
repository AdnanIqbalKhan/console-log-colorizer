# color-log

color-log is a lightweight npm package that provides colorful and customizable logging functions for your Node.js applications. It allows you to add color and styling to your console output, making it easier to distinguish different log levels or highlight important information.

## Installation

You can install the color-log package via npm:

```shell
npm install color-log
```

## Usage

To use color-log in your Node.js application, follow these steps:

1. Import the package into your script:

```javascript
const logger = require("color-log");
OR;
import logger from "color-log";
```

2. Start using the provided logging functions, such as logger.log(), logger.error(), logger.warn(), logger.info(), and logger.debug(). You can pass any number of arguments to these functions, which will be displayed in the console with the specified color and styling.

```javascript
logger.log("This is a log message", "with", "multiple", "arguments");
logger.error("This is an error message");
logger.warn("This is a warning message");
logger.info("This is an info message");
logger.debug("This is a debug message");
```

3. You can also customize the appearance of the log messages by specifying different background colors, foreground colors, and log levels. Refer to the Colors section for available options.

```javascript
logger.logger(
  "Custom Log:",
  ["This is a custom log message"],
  "Magenta",
  "Cyan"
);
```

3. Optionally, you can set the global logging functions to the color-log functions, which will override the default console logging methods. This allows you to use the color-log functions without explicitly calling them.

```javascript
logger.global();
console.log("This is a log message"); // Uses color-log logger.log()
console.error("This is an error message"); // Uses color-log logger.error()
```

## Global Usage

To use color-log in your Node.js application, follow these steps:

1. Import the package into your script:

```javascript
const { global } = require("color-log");
OR;
import { global } from "color-log";
```

2. Enable package globally:

```javascript
global();
```

3. Use console functions as usual:

```javascript
console.log("This is a log message", "with", "multiple", "arguments");
console.error("This is an error message");
console.warn("This is a warning message");
console.info("This is an info message");
console.debug("This is a debug message");
```

## Colors

The following colors are available for styling your log messages:

- Black
- Red
- Green
- Yellow
- Blue
- Magenta
- Cyan
- White

## License

This project is licensed under the MIT License.

Feel free to modify the content as needed for your specific use case.
