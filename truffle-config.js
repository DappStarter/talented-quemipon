require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind concert grace hero foster tenant'; 
let testAccounts = [
"0xffd8e78aee922d8f884ed27530a7609874a2ba7ed136bf9cc7d33813527d6408",
"0x220f2974b0dca4b8832fe03930f9e25cc75197654ac12db837f1f00ea36bf050",
"0xfaed38d157daaad9e0e971784442080a8d742a59c1938909b415a822d5a73206",
"0x0fe94d3cdd8af7e0c936046791979f54b6ba7bef6ca75828484f5ea1c3b8b891",
"0x03b91ee9e87e50b7d046e90867298b7d00c0bede9856cbba3fe91f82ab5fa52d",
"0x840b18bb097755f2c5a5fb1c655a54ba09161a74c1b18ebd882e6c7f964675e3",
"0x080a210ab59806fc9f393de25da3ac6778de5accff0adc6a5a9b43e31f44e601",
"0x76cf4e34d4a18fd24eca158a74948396f980ade20dc25d6ab2c6d8da03d75159",
"0x333c67feb564f5484a0d9d5ace5e1229f523a4aad656f112713df611a738fe3e",
"0xa64cc9396f9d0b99488942b82c2e5adacc88a40d9e5091364f63efc837eec1ac"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
