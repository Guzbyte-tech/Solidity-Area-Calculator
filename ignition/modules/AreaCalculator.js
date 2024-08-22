const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {
  const AreaCalculator = m.contract("AreaCalculator");

  return { AreaCalculator };
});
