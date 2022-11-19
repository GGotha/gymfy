require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { API_URL } = process.env;
const { GOERLI_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
