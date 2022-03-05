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
                    return (<li key={number} className={cmedia.pageItem}>
                        <a onClick={() => props.paginate(number)} href='!#' className={cmedia.pageLink}>
                            {number}
                        </a>
                    </li>)
                })}
            </ul>
        </nav>
    )
}

export default Pagination