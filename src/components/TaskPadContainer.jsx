import { connect } from "react-redux";
import Taskpad from "./Taskpad/taskpad";


/* Передаем нужный state в презентационную компоненту */
let mapStateToProps = (state) => {
    return {
        tasks: state.taskPage.tasks,
        arealabel: state.taskPage.arealabel,
        errorMessage: state.taskPage.errorMessage,
        tasksServer: state.taskPage.tasksServer
    }
}
/* Передаем функции для работы со state в презентационную компоненту */
let mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => {
            dispatch({
                type: 'ADD_TASK',
                task: task,
                id: 4
            })
        },
        changeTaskArea: (arealabel) => {
            dispatch({
                type: 'CHANGE_TASK_AREA',
                arealabel: arealabel
            })
        },
        deleteTask: (delId) => {
            dispatch({
                type: 'DELETE_TASK',
                delId: delId
            })
        },
        setError: (errorToggle) => {
            dispatch({
                type: 'ERROR_MESSAGE',
                errorToggle: errorToggle
            })
        },
        setTasks: (tasks) => {
            dispatch({
                type: 'SET_TASKS',
                tasks
            })
        },
        completeTask: (checkId, isChecked) => {
            dispatch({
                type: 'COMPLETE_TASK',
                checkId,
                isChecked
            })
        }
    }
}

const TaskPadContainer = connect(mapStateToProps, mapDispatchToProps)(Taskpad);


export default TaskPadContainer;