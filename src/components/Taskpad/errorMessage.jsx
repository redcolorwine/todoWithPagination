import cmedia from './taskpad.module.css'

const ErrorMessage=(props)=>{
    return(
        <div className={cmedia.ErrorMessage}>
            <h1>Введите в пустое поле задачу!</h1>
            <button onClick={()=>{props.setError(false)}}>Повторить</button>
        </div>
    )
}

export default ErrorMessage;