import React from 'react';
import "./AddTask.css";
import Button from './Button';
import {useState } from "react";

// um componente nada mais é que uma função que retorna um html com algumas logicas em js e essa função recebe somente um parametro "props".
// const NomeDoComponente = (props) => {}
// as props permitem receber dados e enviar dados para os componentes que vao utilizar esse componente
// se voce comparar com o componente AddTask a baixo voce vera que esta diferente. O componente AddTask esta recebendo { handleTaskAddition } ao inves de props.
// isso acontece porque props é muito generico, entao se um outro engenheiro acessar seu componente ele nao sabe exatamente quais props seu componente aceita.
// entao pra resolver esse problema nos desestruturamos o objeto props e para que fique mais claro quais metodos e valores esse objeto pode receber. essa sintaxe tambem
// nos permite definir valores padroes caso um valor da props nao ser obrigatorio. por exemplo:
// const NomeDoComponente = ({ valor1, valor2 = "teste", metodo1 }) => {}
// aqui nesse exemplo nos definimos os valores e metodos que o componente NomeDoComponente pode receber como props e definimos que a prop valor2 não é obrigatoria pois atribuimos um valor padrao pra ela.
// entao caso o usuario nao passe a prop valor2 quando utilizar esse componente, o valor teste sera atribuido pra ela. ja as props valor1 e metodo1 sao obrigatorias, entao se nao forem passadas, resultara em um erro.
const AddTask = ({ handleTaskAddition }) => {
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
            <div className="add-taks-button-containe">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
     );
};
 
export default AddTask;