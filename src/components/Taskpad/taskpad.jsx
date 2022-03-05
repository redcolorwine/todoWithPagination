import React, { useEffect, useState } from "react";
import ErrorMessage from "./errorMessage";
import PadItem from "./padItem/padItem";
import cmedia from './taskpad.module.css'
import * as axios from 'axios';
import Pagination from "./pagination";

let areaRef = React.createRef();

const Taskpad = (props) => {
    //хуки для отображения загрузки, для текущей страницы и количества задач на странице
    const [isLoading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(12);
    //хук для загрузки данных API, чтобы отрисовка не произошла раньше загрузки данных
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
            props.setTasks(response.data);
            setLoading(false);
        })
    }, [])

    //если данные не получены, отображаем загрузку
    if (isLoading) {
        return (
            <div>
                LOADING.....
            </div>
        )
    }
    //переменные для пагинации
    const indexOfLastPost = currentPage * tasksPerPage;
    const indexOfFirstPost = indexOfLastPost - tasksPerPage;
    const currentTasks = props.tasksServer.slice(indexOfFirstPost, indexOfLastPost);

    //функция для выбора текущей страницы
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

        /* Удаляем пробелы с помощью trim(), чтобы избежать добавление пустых значений */
        if (props.arealabel.trim() !== '') {
            props.addTask(props.arealabel);
        } else { props.setError(true) }

    }
    /* Получаем массив задач и при помощи map() создаем массив компонент PadItem передавая значения массива как параметры*/
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