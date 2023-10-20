import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, onHandleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task 
                    Key={task.id}
                    task = {task}
                    handleTaskClick={onHandleTaskClick}
                    handleDeletion={handleTaskDeletion}
                />
            ))}
        </>
    );
};

export default Tasks;