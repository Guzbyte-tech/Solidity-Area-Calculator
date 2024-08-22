require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { vars } = require("hardhat/config");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/RSx4ReFw5e70zKGDGQjf8y4WlLU_7sKj`,
      accounts: [`${process.env.SEPOLIA_PRIVATE_KEY}`],
    },
  },
};
