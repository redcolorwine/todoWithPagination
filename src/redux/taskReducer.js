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
    errorMessage: false
}
/*Инициализируем редьюсер*/
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Добавление задачи */
        case 'ADD_TASK':
            let tasklength = state.tasks.length + 1; /* Получаем длину массива чтобы определить ID добавляемого элемента */
            return {
                ...state, /* Спред-оператор для глубокой копии */
                tasks: [...state.tasks, { message: action.task, id: tasklength }],
                arealabel: ''
            };
        /* Изменение поля ввода */
        case 'CHANGE_TASK_AREA':
            return {
                ...state,
                arealabel: action.arealabel
            };
        /* Удаление задачи */
        case 'DELETE_TASK':
            /* Применяем фильтр к массимву, чтобы отсеять удаляемый по ID элемент и возращаем отфильтрованный массив */
            let copyTask = state.tasks.filter(item => item.id !== action.delId);
            /* Обновляем ID элементов после удаления, чтобы избежать дублирования */
            for (let i = 0; i < copyTask.length; i++) {
                copyTask[i].id = i + 1;
            }
            return {
                ...state,
                tasks: copyTask
            };
        
        case 'ERROR_MESSAGE':
            return{
                ...state,
                errorMessage: action.errorToggle
            }
        default: return state;
    }
}

export default taskReducer;