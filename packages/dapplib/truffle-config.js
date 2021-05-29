require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth spice coast harvest help equal genius'; 
let testAccounts = [
"0x6c7f3180d04274db81f6a01cbc1210648d0318cfe06feaa23ab299d7ca8ea39b",
"0xe30c83b427146dd302bd98eecdb58bc8f5d6334d4c5e25e0c13eae135ed08e8c",
"0x400e5a0dd57afc491710f9d9d44d6a21ce2f4f9deca93471a27b3ed57712483d",
"0x247fa6c285758346ecdbb65cb7852ef4634b0868bfca5251777aa6e70cb9efd0",
"0x436a298bc0f69f2c153ac0397371a79245701e600c29b89d57ffdfb520b9b4fd",
"0x829f48989091b22c466c04a3fa845bfb8de51cc39d114b9a0030e0b84a7f7b9a",
"0x134ecaf1703acf28b84850bdf72291c4960f92d5f18472cbf70573500be92f08",
"0xd54d25494ec3bcd93c61ab04d4a5115b1aa6d25accc041355dc1961ec57c66c7",
"0x30e1ca2f1ea2d2c2278fe8583e11f05b183693f09dea13344d800f462ed58d5b",
"0x30c843cd10d3384212004b09be30edc9d99b78648b834024ea18c28ea6921963"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


