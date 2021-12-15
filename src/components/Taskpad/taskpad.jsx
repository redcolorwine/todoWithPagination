import React from "react";
import ErrorMessage from "./errorMessage";
import PadItem from "./padItem/padItem";
import cmedia from './taskpad.module.css'

let areaRef = React.createRef();

const Taskpad = (props) => {

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
    /* Получаем массив задач из state и при помощи map() создаем массив компонент PadItem передавая значения массива как параметры*/
    let items = props.tasks.map((task) => {
        return (<PadItem deleteTask={props.deleteTask} key={task.id} item={task.message} id={task.id} />)
    })
    /* Получаем количество текущих задач для передачи в функцию, которая занимается склонением слов */
    let countItems = items.length;
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
                </div>}

        </>
    )
}

export default Taskpad;