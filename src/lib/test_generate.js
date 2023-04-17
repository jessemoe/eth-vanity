"use strict";
exports.__esModule = true;
exports.generate = exports.web3 = void 0;
var Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
var generate = function (excepts) {
    console.log("start")
    var generate = true;
    while (generate) {
        var account = web3.eth.accounts.create();
        for (const except of excepts) {
            console.log(account.address)
            if (account.address.includes(except)) {
                generate = false;
                console.log(account.address, account.privateKey);
                return account.address, account.privateKey;
            }
        }
    }
};
exports.generate = generate;
generate(["1111"])
