// @ts-check
import { createRequire } from "module";

import pino from "pino";
import pinoPretty from "pino-pretty";

const start = Date.now();
const logger = pino(pinoPretty({ colorize: true }));
const require = createRequire(import.meta.url);

require("./dist/register.cjs");

const end = Date.now();
const diff = (end - start) / 1000;

logger.info(`React Native testing mocks registered! (${diff}s)`);
