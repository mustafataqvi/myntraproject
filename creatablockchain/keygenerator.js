const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('privateKey:', privateKey);
console.log();
console.log('publicKey:', publicKey);
//privateKey: 6e615eb48601bfc68b21da5ff8480247aae5852b31b623c61b3b5e39a9f1599b

//publicKey: 041c0d14a3d394da22027a996f6079f174e7e014dbc6fba2104d42f037f935f0dd8472c2ffe1e37d18a72c2760a1e0880c236c9af6a881f91dc346b5b7b710dab9