require('@nomiclabs/hardhat-waffle')

const fs = require('fs')
const privateKey = fs
  .readFileSync(require('path').resolve(__dirname, '.secret'))
  .toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://rpc-mumbai.matic.today',
      accounts: [privateKey],
    },
    mainnet: {
      url: 'https://polygon-rpc.com',
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
}
