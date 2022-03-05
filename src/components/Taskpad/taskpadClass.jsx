import React from "react";
import ErrorMessage from "./errorMessage";
import PadItem from "./padItem/padItem";
import cmedia from './taskpad.module.css'
import * as axios from 'axios';


class TaskpadClass extends React.Component {
    areaRef = React.createRef();
    onChangeArea = () => {
        /* Извлекаем значения поля по ссылке */
        let areatext = this.areaRef.current.value;
        this.props.changeTaskArea(areatext);
    }
    onAddBut = () => {
        /* Удаляем пробелы с помощью trim(), чтобы избежать добавление пустых значений */
        if (this.props.arealabel.trim() !== '') {
            this.props.addTask(this.props.arealabel);
        } else { this.props.setError(true) }
        console.log(this.props.tasks)
    }
    items = this.props.tasks.map((task) => {
        return (<PadItem deleteTask={this.props.deleteTask} key={task.id} item={task.message} id={task.id} />)
    })
    countItems = this.items.length;
    /* Склонение заголовка */
    declOfNum = (number, words) => {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    }
    taskheader = this.declOfNum(this.countItems, ['Задача', 'Задачи', 'Задач']);
    render() {
        return (
            <>
                {this.props.errorMessage ? <ErrorMessage setError={this.props.setError} /> :
                    <div className={cmedia.Taskpad}>
                        <h1>{this.countItems} {this.taskheader}</h1>
                        {this.items}
                        <div className={cmedia.addPad}>
                            <input id={cmedia.inputText} type="text" ref={this.areaRef} onChange={this.onChangeArea} value={this.props.arealabel} />
                            <input id={cmedia.addBut} type="button" value="Добавить" onClick={this.onAddBut} />
                        </div>
                    </div>}
            </>
        )
    }
}


export default TaskpadClass;