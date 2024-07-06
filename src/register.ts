import { createRequire } from "module";

import { logger } from "./helpers/logger";

const start = Date.now();
const require = createRequire(import.meta.url);

require("./load.cjs");

const end = Date.now();
const diff = (end - start) / 1000;

logger.register(`React Native testing mocks registered! (${diff}s)`);
