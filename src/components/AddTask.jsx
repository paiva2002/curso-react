import React from 'react';
import "./AddTask.css";
import Button from './Button';
import {useState } from "react";
const AddTask = (handleTaskAddition) => {
    const [inputData, setInputData] = useState('');

    function handleInputChage(e) {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    };

    return ( 
        <div className="add-task-container">
            <input 
                onChange={handleInputChage} 
                value={inputData}
                className="add-task-input" 
                type="text" 
            />
            ;
            <div className="add-taks-button-containe">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
     );
};
 
export default AddTask;