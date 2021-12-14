import { combineReducers, createStore } from "redux";
import taskReducer from "./taskReducer";

/*Создаем Редьюсер для списка дел*/

let reducers=combineReducers(
    {
        taskPage:taskReducer
    }
);

let store=createStore(reducers);

export default store;