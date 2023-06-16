// const { logger, global } = 

require('console-log-colorizer').global()
const {logger, COLORS} = require('console-log-colorizer')
// Logger.log("Hello World", "Testing", { a:1235, abc: "zxy" })
// Logger.info("Hello World")
// Logger.warn("Hello World")
// Logger.debug("Hello World")
// logger.error("Hello World")

// console.error("Hello World")

console.log('Welcome to the application!');
console.error('An unexpected error occurred.');
console.warn('Warning: This operation may be deprecated.');
console.info('Information: Please note the following details.');
console.debug('Debugging: Here is some detailed debug information.');

// Custom log with specific colors
logger.logger('Custom', ['This is a custom log message'], COLORS.Magenta, COLORS.Yellow);
