import myPackage from 'console-log-colorizer';

const output = [[
    "",      // Expected first empty string
    "",      // Expected second empty string
    "",
    "World",
    "",
]]     // Expected third empty string


describe('My Package', () => {
    let consoleLogSpy: jest.SpyInstance;

    beforeEach(() => {
        // Create a spy on console.log before each test
        consoleLogSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        // Restore the original console.log implementation after each test
        consoleLogSpy.mockRestore();
    });

    it('should do something with require', () => {
        const myPackageRequire = require('console-log-colorizer');
        // Write your test case here

        // Call the function that triggers the console.log statement
        myPackageRequire.log("Hello World");

        // Verify that console.log was called with the expected message
        expect(consoleLogSpy.mock.calls).toEqual(output);

    });

    it('should do something with import in JS file', () => {
        const myPackageImportJS = require('console-log-colorizer').default;
        // Call the function that triggers the console.log statement
        myPackageImportJS.log("Hello World");

        // Verify that console.log was called with the expected message
        expect(consoleLogSpy.mock.calls).toEqual(output);
    });

    it('should do something with import in TS file', () => {
        // Call the function that triggers the console.log statement
        myPackage.log("Hello World");

        // Verify that console.log was called with the expected message
        expect(consoleLogSpy.mock.calls).toEqual(output);
    });
});
