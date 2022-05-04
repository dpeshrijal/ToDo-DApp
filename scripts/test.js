
const main = async () => {
    const getContractFactory = await hre.ethers.getContractFactory("ToDo");
    const todoContract = await getContractFactory.deploy();
    await todoContract.deployed();

    console.log("ToDo Dapp has been deployed to address: ", todoContract.address);

    let run = await todoContract.setTask("run");
    await run.wait();
    console.log("First task added!");

    let dance = await todoContract.setTask("dance");
    await dance.wait();
    console.log("Second task added!");

    let sing = await todoContract.setTask("sing");
    await sing.wait();
    console.log("Third task added!");


    let getTodo = await todoContract.getTask();
    console.log("Your Todo list is: ", getTodo);


    let changeStatus = await todoContract.updateTask(0, true);
    await changeStatus.wait();
    console.log("Task Status has been changed");

    let deleteTask = await todoContract.deleteTask(0);
    await deleteTask.wait();
    console.log("Task has been Deleted!");

    getTodo = await todoContract.getTask();
    console.log("Your Updated Tasks are: ", getTodo);


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

