import React from 'react';

import Button from './Button';
import { useParams, useNavigate } from 'react-router-dom';
import "./TaskDetails.css";

//import {useNavigate} from 'react-router-dom';
//navigate('/about');

function TaskDetails() {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate.goBack();
    };
    return (
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, vel? Vel modi officiis,
                    in doloremque tenetur sit numquam iusto doloribus molestias unde nobis facilis ab porro
                    deleniti sed aperiam consequuntur?
                </p>
            </div>
        </>
    );
}
 
export default TaskDetails;