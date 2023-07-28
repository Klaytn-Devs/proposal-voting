const Web3 = require('web3')
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const abiToken = require('../artifacts/contracts/Token.sol/TokenVoting.json');
const abi = require('../artifacts/contracts/ProposalGreenEarthVoting.sol/ProposalGreenEarthVoting.json');

// for producting
const privateKeys = [
    process.env.ACCOUNT
]
let provider = new HDWalletProvider(
    privateKeys,
    `https://klaytn-baobab.blockpi.network/v1/rpc/public`,
    0,
    1
);
const web3 = new Web3(provider);

async function mint() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0x5de6CA1f91fB0d92dd0aaf34CDe761d9540CFEC7",
        )
        // 0xB13332f8d4E81df0709d9Ffa15CB42D8dC0839c3
        // 0xf503bCfF9528F592A5b1644C0932BE10cE4991A9
        const tx = await contract.methods.mint("0xB13332f8d4E81df0709d9Ffa15CB42D8dC0839c3", "999999999999999999999999999");
        await tx.estimateGas({
            from: "0xd5871483DB3be9390586e80f879faF8848BDD422"
        });
        await tx.send({
            from: '0xd5871483DB3be9390586e80f879faF8848BDD422'
        })
    } catch (e) {
        console.log(e);
    }
}

async function checkBlance() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0x5de6CA1f91fB0d92dd0aaf34CDe761d9540CFEC7",
        )
        const tx = await contract.methods.balanceOf("0xd5871483DB3be9390586e80f879faF8848BDD422").call();
        console.log(tx);
    } catch (e) {
        console.log(e);
    }
}

async function getStatus() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0xcaAE66979034a790662542A61D286D48d5C3f277",
        )
        const tx = await contract.methods.imageId("2").call();
        console.log(tx);
    } catch (e) {
        console.log(e);
    }
}

async function approve() {
    try {
        const contract = new web3.eth.Contract(
            abiToken.abi,
            "0x5de6CA1f91fB0d92dd0aaf34CDe761d9540CFEC7",
        )
        const tx = await contract.methods.approve("0xcaAE66979034a790662542A61D286D48d5C3f277", "999999999999999999999999999999");
        await tx.estimateGas({
            from: "0xd5871483DB3be9390586e80f879faF8848BDD422",
        });
        await tx.send({
            from: '0xd5871483DB3be9390586e80f879faF8848BDD422'
        })
    } catch (e) {
        console.log(e);
    }
}


async function updateTimeVoting() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0xcaAE66979034a790662542A61D286D48d5C3f277",
        )
        const tx = await contract.methods.updateTimeVoting("", "");
        await tx.estimateGas({
            from: "0xd5871483DB3be9390586e80f879faF8848BDD422",
        });
        await tx.send({
            from: '0xd5871483DB3be9390586e80f879faF8848BDD422'
        })
    } catch (e) {
        console.log(e);
    }
}

async function vote() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0xcaAE66979034a790662542A61D286D48d5C3f277",
        )
        const tx = await contract.methods.vote("100000000000000000", "2");
        await tx.estimateGas({
            from: "0xd5871483DB3be9390586e80f879faF8848BDD422",
        });
        await tx.send({
            from: '0xd5871483DB3be9390586e80f879faF8848BDD422'
        })
    } catch (e) {
        console.log(e);
    }
}

async function withdraw() {
    try {
        const contract = new web3.eth.Contract(
            abi.abi,
            "0xcaAE66979034a790662542A61D286D48d5C3f277",
        )
        const tx = await contract.methods.withdraw();
        await tx.estimateGas({
            from: "0xd5871483DB3be9390586e80f879faF8848BDD422",
        });
        await tx.send({
            from: '0xd5871483DB3be9390586e80f879faF8848BDD422'
        })
    } catch (e) {
        console.log(e);
    }
}

// mint()
// checkBlance()
// approve()
// vote()
// updateTimeVoting()
// withdraw()
getStatus()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })