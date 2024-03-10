import path from "path";

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
export function replace<T>(modulePath: string, exports: T): void {
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

/**
 * Replaces am ESModule with a given `exports` value or another module path.
 *
 * @param modulePath the path to the ESModule
 * @param defaultExport the default export to replace
 */
export function replaceEsm<T>(modulePath: string, defaultExport: T): void {
  replace(modulePath, { __esModule: true, default: defaultExport });
}

function resolveId(modulePath: string): string {
  try {
    return require.resolve(modulePath);
  } catch (error) {
    const hastePath = require.resolve(`${modulePath}.ios`);
    return hastePath.slice(0, -4);
  }
}
