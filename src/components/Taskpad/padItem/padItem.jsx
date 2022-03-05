import React, { useState } from "react";
import cmedia from './padItem.module.css'
/*  Компонента одной задачи
    Сообщение + кнопка удаления
*/
const PadItem = (props) => {
    const [check, setCheck] = useState(false);
    const onBut = () => {
        if (props.completed) { props.completeTask(props.id,false) }
        else props.completeTask(props.id,true)
    }
    return (
        <div className={cmedia.padItem}>
            <span>{props.item}</span>
            <div className={cmedia.buts}>
                <button onClick={() => { props.deleteTask(props.id) }}>Удалить</button>
                <button onClick={onBut} className={props.completed !== false ? cmedia.checked : cmedia.nonchecked} />
            </div>
        </div>
    )
}

export default PadItem;