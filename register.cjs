// @ts-check
const pino = require("pino").default;
const pinoPretty = require("pino-pretty").default;

const start = Date.now();
const logger = pino(pinoPretty({ colorize: true }));

require("./dist/register.cjs");

const end = Date.now();
const diff = (end - start) / 1000;

logger.info(`React Native testing mocks registered! (${diff}s)`);
