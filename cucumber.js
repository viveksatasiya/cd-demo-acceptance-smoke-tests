module.exports = {
  default: `
    --require-module ts-node/register
    --require src/tests/acceptance/step_definitions/*.steps.ts
    src/tests/acceptance/features/*.feature
  `
};
