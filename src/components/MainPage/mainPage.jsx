import cmedia from './mainPage.module.css';

const MainPage = (props) => {
    return (
        <div className={cmedia.mainPage}>
            <h1>TODO с загрузкой данных с API и постраничной пагинацией</h1>
            <p>Тестовый проект реализован при помощи фреймворка React JS
                , библиотеки Redux(state management). Переход между страницами реализован при помощи React Router
                , загрузка данных с API выполнена с помощью библиотеки Axios.
            </p>
        </div>
    )
}

export default MainPage;