/* Инициализируем начальный state
Создаем массив объектов для хранения задач
а также создаем переменную для поля ввода задач
*/
let initialState = {
    tasks: [
        { id: 1, message: 'Занятие по React' },
        { id: 2, message: 'Занятие по css' },
        { id: 3, message: 'Занятие по javascript' },
        { id: 4, message: 'Занятие по html' },
    ],
    arealabel: '',
    errorMessage: false,
    tasksServer: ''
    // tasksServer: [
    //      { id: 0, title: '', completed: false },

    // ]
}
/*Инициализируем редьюсер*/
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Добавление задачи */
        case 'ADD_TASK':
            let tasklength = state.tasksServer.length + 1; /* Получаем длину массива чтобы определить ID добавляемого элемента */
            return {
                ...state, /* Спред-оператор для глубокой копии */
                tasksServer: [...state.tasksServer, { title: action.task, id: tasklength }],
                arealabel: ''
            };

        case 'SET_TASKS':
            return {
                ...state, /* Спред-оператор для глубокой копии */
                // tasksServer: [...state.tasksServer, action.tasks],
                tasksServer: action.tasks

            };
        /* Изменение поля ввода */
        case 'CHANGE_TASK_AREA':
            return {
                ...state,
                arealabel: action.arealabel
            };
        /* Удаление задачи */
        case 'DELETE_TASK':
            /* Применяем фильтр к массиву, чтобы отсеять удаляемый по ID элемент и возращаем отфильтрованный массив */
            let copyTask = state.tasksServer.filter(item => item.id !== action.delId);
            /* Обновляем ID элементов после удаления, чтобы избежать дублирования */
            for (let i = 0; i < copyTask.length; i++) {
                copyTask[i].id = i + 1;
            }
            return {
                ...state,
                tasksServer: copyTask
            };
        /* Выполнение задачи */
        case 'COMPLETE_TASK':

            return {
                ...state,
                tasksServer: state.tasksServer.map(task => {
                    if (task.id === action.checkId) {
                        return { ...task, completed: action.isChecked }
                    } else {
                        return task;
                    }
                })
            };

        case 'ERROR_MESSAGE':
            return {
                ...state,
                errorMessage: action.errorToggle
            }
        default: return state;
    }
}

export default taskReducer;