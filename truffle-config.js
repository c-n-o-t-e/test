const fs = require('fs');
const HDWalletProvider = require("truffle-hdwallet-provider");
const secret = JSON.parse(
  fs.readFileSync(".secret").toString().trim()
);

module.exports = {
  networks: {
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          secret.seed,
          `https://ropsten.infura.io/v3/${secret.projectId}`
        ),
      network_id: 3 
    }
  },
  compilers: {
     solc: {
       version: "0.6.5"
     }
  }
}



