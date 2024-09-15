const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Generate a keypair and derive the public key
const mykey = ec.keyFromPrivate('6e615eb48601bfc68b21da5ff8480247aae5852b31b623c61b3b5e39a9f1599b');
const mywalletAddress = mykey.getPublic('hex');

// Create new blockchain instance
let savjeeCoin = new Blockchain();

// Create a new transaction and sign it with the key
const tx1 = new Transaction(mywalletAddress, 'public key', 10);
tx1.signTransaction(mykey);

// Add the transaction to the blockchain
savjeeCoin.addTransaction(tx1);

// Mine block
console.log('\nStarting the miner...');
savjeeCoin.minePendingTransactions(mywalletAddress);

// Check balance
console.log('\nBalance of xavier:', savjeeCoin.getBalanceOfAddress(mywalletAddress));
console.log('is chain valid',savjeeCoin.isChainValid());