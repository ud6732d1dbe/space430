// scratch

const sum = (xs) => xs.reduce((a, b) => a + b, 0);

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
