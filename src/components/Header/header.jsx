import cmedia from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={cmedia.header}>
            <ul>
                <li><NavLink to='/'>Главная</NavLink></li>
                <li><NavLink to='/todo'>Список дел</NavLink></li>
            </ul>
        </div>
    )
}
export default Header;