/* eslint-disable @typescript-eslint/no-var-requires */
import path from "path";

/**
 * A simple no-operation function
 */
export function noop(): void {
  // do nothing...
}

/**
 * Replaces a module with a given `exports` value or another module path.
 *
 * @param modulePath the path to the module
 * @param other the exports to replace or another module path
 */
export function replace<T>(modulePath: string, other: T | string): void {
  const exports = typeof other === "string"
    ? require(other) as T
    : other;
  const id = resolveId(modulePath);

  require.cache[id] = {
    children: [],
    exports,
    filename: id,
    id,
    isPreloading: false,
    loaded: true,
    parent: require.main,
    path: path.dirname(id),
    paths: [],
    require,
  };
}

function resolveId(modulePath: string): string {
  try {
    return require.resolve(modulePath);
  } catch (error) {
    const hastePath = require.resolve(`${modulePath}.ios`);
    return hastePath.slice(0, -4);
  }
}
