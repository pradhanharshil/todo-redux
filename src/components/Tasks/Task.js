function Task({ id, title, info, deleteHandler, completeHandler }) {
    return (
        <div className="task">
            <p>{id}</p>
            <h1>{title}</h1>
            <p>{info}</p>
            <div className="actions">
                <button onClick={deleteHandler}>Delete</button>
                <button onClick={completeHandler}>Mark completed</button>
            </div>
        </div>
    );
}

export default Task;