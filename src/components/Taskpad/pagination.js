import { NavLink } from 'react-router-dom';
import cmedia from './pagination.module.css';
const Pagination = (props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalTasks / props.tasksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={cmedia.pagination}>
            <ul>
                {pageNumbers.map(number => {
                    return (<li key={number} className={cmedia.pageItem} >
                        <NavLink onClick={(event) => {
                            event.preventDefault();
                            props.paginate(number)
                        }} to='!#' className={({ isActive }) => `${isActive ? cmedia.active : cmedia.pageLink}`}>
                            {number}
                        </NavLink>
                    </li>)
                })}
            </ul>
        </nav>
    )
}

export default Pagination