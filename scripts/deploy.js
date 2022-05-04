
const main = async () => {
    const getContractFactory = await hre.ethers.getContractFactory("ToDo");
    const todoContract = await getContractFactory.deploy();
    await todoContract.deployed();
    console.log("Your Todo List has been deployed address:", todoContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();