import React, { useEffect, useState } from "react";
import ErrorMessage from "./errorMessage";
import PadItem from "./padItem/padItem";
import cmedia from './taskpad.module.css'
import * as axios from 'axios';
import Pagination from "./pagination";

let areaRef = React.createRef();

const Taskpad = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(12);
    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
            // for (let i = 0; i < 10; i++) {
            //     props.setTasks(response.data[i]);
            // }

            props.setTasks(response.data);
            setLoading(false);
        })
    }, [])


    if (isLoading) {
        return (
            <div>
                LOADING.....
            </div>
        )
    }
    
    const indexOfLastPost = currentPage * tasksPerPage;
    const indexOfFirstPost = indexOfLastPost - tasksPerPage;
    const currentTasks = props.tasksServer.slice(indexOfFirstPost, indexOfLastPost);
    console.log(props.tasksServer)
    console.log(currentTasks)
    console.log(indexOfLastPost)
    console.log(indexOfFirstPost)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    /* Обработка изменения поля ввода */
    let onChangeArea = () => {
        /* Извлекаем значения поля по ссылке */
        let areatext = areaRef.current.value;
        props.changeTaskArea(areatext);
    }
    /* Обработка кнопки добавления задачи */
    let onAddBut = () => {
        console.log(props.tasksServer);

        /* Удаляем пробелы с помощью trim(), чтобы избежать добавление пустых значений */
        if (props.arealabel.trim() !== '') {
            props.addTask(props.arealabel);
        } else { props.setError(true) }

    }
    /* Получаем массив задач из state и при помощи map() создаем массив компонент PadItem передавая значения массива как параметры*/
    // let items = props.tasks.map((task) => {
    //     return (<PadItem deleteTask={props.deleteTask} key={task.id} item={task.message} id={task.id} />)
    // })
    // let items = props.tasksServer.map((task) => {
    //     return (<PadItem completeTask={props.completeTask} deleteTask={props.deleteTask} key={task.id} item={task.title} id={task.id} completed={task.completed} />)
    // })
    let items = currentTasks.map((task) => {
        return (<PadItem completeTask={props.completeTask} deleteTask={props.deleteTask} key={task.id} item={task.title} id={task.id} completed={task.completed} />)
    })
    /* Получаем количество текущих задач для передачи в функцию, которая занимается склонением слов */
    let countItems = props.tasksServer.length;
    /* Склонение заголовка */
    function declOfNum(number, words) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    }
    let taskheader = declOfNum(countItems, ['Задача', 'Задачи', 'Задач']);
    return (
        <>
            {props.errorMessage ? <ErrorMessage setError={props.setError} /> :
                <div className={cmedia.Taskpad}>
                    <h1>{countItems} {taskheader}</h1>
                    {items}
                    <div className={cmedia.addPad}>
                        <input id={cmedia.inputText} type="text" ref={areaRef} onChange={onChangeArea} value={props.arealabel} />
                        <input id={cmedia.addBut} type="button" value="Добавить" onClick={onAddBut} />
                    </div>
                    <Pagination paginate={paginate} tasksPerPage={tasksPerPage} totalTasks={props.tasksServer.length} />
                </div>}

        </>
    )
}

export default Taskpad;