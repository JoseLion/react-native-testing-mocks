const start = Date.now();
require("./dist/main");

const end = Date.now();
const diff = (end - start) / 1000;

// eslint-disable-next-line no-console
console.info(`React Native testing mocks registered! (${diff}s)`);
