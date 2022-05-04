//SPDX-License-Identfier:MIT

pragma solidity ^0.8.0;

contract ToDo {
    address public currentUser;

    struct Task {
        string task;
        bool isCompleted;
    }

    mapping(address => Task[]) private Users;

    constructor() {
        currentUser = payable(msg.sender);
    }

    function setTask(string memory _task) public {
        Users[currentUser].push(Task({task: _task, isCompleted: false}));
    }

    function getTask() public view returns (Task[] memory) {
        return Users[currentUser];
    }

    function updateTask(uint256 _taskId, bool _status) public {
        Users[currentUser][_taskId].isCompleted = _status;
    }

    function deleteTask(uint256 _taskId) public {
        delete Users[currentUser][_taskId];
    }
}
