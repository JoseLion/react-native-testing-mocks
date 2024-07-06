import { debug } from "debug";

import { name } from "../../package.json";

export const logger = Object.freeze({
  register: debug(`${name}:register`),
  replace: debug(`${name}:replace`),
});
