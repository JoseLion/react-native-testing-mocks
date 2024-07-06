import { createRequire } from "module";

import pino from "pino";
import pinoPretty from "pino-pretty";

import { name } from "../package.json";

const start = Date.now();
const logger = pino({ name }, pinoPretty({ colorize: true }));
const require = createRequire(import.meta.url);

require("./load.cjs");

const end = Date.now();
const diff = (end - start) / 1000;

logger.info(`React Native testing mocks registered! (${diff}s)`);
