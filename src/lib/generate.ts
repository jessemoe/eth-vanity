import Web3 from "web3";

export const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
export const generate = (excepts: string[]) => {
    let generate = true
    while (generate) {
        const account = web3.eth.accounts.create();
        for (const except of excepts) {
            if (account.address.includes(except)) {
                generate = false
                console.log(account.address, account.privateKey)
                return account.address, account.privateKey
            }
        }
    }

}

export const test_generate = () => {
    generate(["222222", "111111", "333333"])
}
