const getCode = (s: string) => '\x1b[' + s + 'm'

const COLORS = {
    Black: "Black",
    Red: "Red",
    Green: "Green",
    Yellow: "Yellow",
    Blue: "Blue",
    Magenta: "Magenta",
    Cyan: "Cyan",
    White: "White"
} as const

const BG_COLORS = {
    Black: getCode("40"),
    Red: getCode("41"),
    Green: getCode("42"),
    Yellow: getCode("43"),
    Blue: getCode("44"),
    Magenta: getCode("45"),
    Cyan: getCode("46"),
    White: getCode("47"),
} as const

const FG_COLORS = {
    Black: getCode("30"),
    Red: getCode("31"),
    Green: getCode("32"),
    Yellow: getCode("33"),
    Blue: getCode("34"),
    Magenta: getCode("35"),
    Cyan: getCode("36"),
    White: getCode("37"),
} as const


const CONTROL = {
    Reset: getCode('0'),
    Bright: getCode('1'),
    Dim: getCode('2'),
    Underscore: getCode('4'),
    Blink: getCode('5'),
    Reverse: getCode('7'),
    Hidden: getCode('8')
} as const

const CONSOLE_LOG = {
    "log": console.log,
    "error": console.error,
    "warn": console.warn,
    "info": console.info,
    "debug": console.debug,
} as const

function baseLogger(
    title: string,
    message: any[],
    bgColor: keyof typeof COLORS = "Black",
    fgColor: keyof typeof COLORS = "White",
    level: keyof typeof CONSOLE_LOG = "log") {
    CONSOLE_LOG[level](
        BG_COLORS[bgColor] + CONTROL.Bright,
        title, CONTROL.Reset,
        FG_COLORS[fgColor] + CONTROL.Dim,
        ...message, CONTROL.Reset)
}


const logger = {
    logger: baseLogger,
    error: function (...message: any) {
        baseLogger("Error:", message, "Red", "Red", "error")
    },
    warn: function (...message: any) {
        baseLogger("Warn:", message, "Yellow", "Yellow", "warn")
    },
    log: function (...message: any) {
        baseLogger("Log:", message, "Blue", "Blue", "log")
    },
    info: function (...message: any) {
        baseLogger("Info:", message, "Cyan", "Cyan", "info")
    },
    debug: function (...message: any) {
        baseLogger("Debug:", message, "Green", "Green", "debug")
    },
}

function global() {
    console.log = logger.log
    console.error = logger.error
    console.warn = logger.warn
    console.info = logger.info
    console.debug = logger.debug
}

export {
    global,
    logger,
    COLORS,
};
export default logger



