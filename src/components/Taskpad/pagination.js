import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cmedia from './pagination.module.css';
const Pagination = (props) => {
    const pageNumbers = [];
    const [activeId, setActiveId] = useState();
    for (let i = 1; i <= Math.ceil(props.totalTasks / props.tasksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={cmedia.pagination}>
            <ul>
                {pageNumbers.map(number => {
                    return (<li key={number} className={cmedia.pageItem} >
                        <NavLink id={number} className={activeId === number ? cmedia.active : cmedia.pageLink} onClick={(event) => {
                            setActiveId(number)
                            event.preventDefault();
                            props.paginate(number)
                        }} to='!#' >
                            {number}
                        </NavLink>
                    </li>)
                })}
            </ul>
        </nav>
    )
}
// className={({ isActive }) => `${isActive ? cmedia.active : cmedia.pageLink}`} 
export default Pagination