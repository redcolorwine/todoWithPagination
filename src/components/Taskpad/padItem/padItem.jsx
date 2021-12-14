import React from "react";
import cmedia from './padItem.module.css'
/*  Компонента одной задачи
    Сообщение + кнопка удаления
*/
const PadItem = (props) => {
    return (
        <div className={cmedia.padItem}>
            <span>{props.item}</span>
            <button onClick={() => { props.deleteTask(props.id) }}>Завершить</button>
        </div>
    )
}

export default PadItem;