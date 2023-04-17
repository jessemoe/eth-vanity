import Web3 from "web3";

export const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

export interface Account {
    addr: string
    key: string
}

export async function generate(excepts: string[])   {
    let generate = true
    let result: Account = {
        addr: "",
        key: ""
    }
    while (generate) {
        const account = web3.eth.accounts.create();
        for (const except of excepts) {
            if (account.address.includes(except)) {
                result.addr = account.address
                result.key = account.privateKey
                console.log(result)
                return result
            }
        }
    }
    return result
}

export const test_generate = () => {
    generate(["222222", "111111", "333333"])
}
