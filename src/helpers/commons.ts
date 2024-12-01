import { createRequire } from "module";
import path from "path";

import { logger } from "./logger";

type ExportsLike = object | { default?: unknown; };

const require = createRequire(import.meta.url);

/**
 * A simple no-operation function
 */
export function noop(): void {
  // do nothing...
}

/**
 * Replaces a Module with a given `exports` value or another module path.
 *
 * @param modulePath the path to the module
 * @param exports the exports to replace
 */
export function replace<T extends ExportsLike>(modulePath: string, factory: () => T): void {
  const id = resolveId(modulePath);
  const exports = factory();

  require.cache[id] = {
    children: [],
    exports: "default" in exports
      ? { __esModule: true, ...exports }
      : exports,
    filename: id,
    id,
    isPreloading: false,
    loaded: true,
    parent: require.main,
    path: path.dirname(id),
    paths: [],
    require,
  };

  logger.replace(`Module replaced: ${modulePath}`);
}

function resolveId(modulePath: string): string {
  try {
    return require.resolve(modulePath);
  } catch {
    const hastePath = require.resolve(`${modulePath}.ios`);
    return hastePath.slice(0, -3);
  }
}
