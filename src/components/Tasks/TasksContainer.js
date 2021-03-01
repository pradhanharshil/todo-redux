import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { deleteTask, completeTask, removeFromCompleted } from "../../actions/TaskActions";

function TasksContainer() {
    const tasks = useSelector(state => state.task.list);
    const completed = useSelector(state => state.task.completed);
    const dispatch = useDispatch();
    let key=0;
    return (
        <div className="tasks" key={key++}>
            {(tasks.length === 0)
            ?<h1>No Active Tasks</h1>
            :tasks.map(task =>
                <Task
                    key={key++}
                    title={task.title}
                    info={task.info} 
                    id={task.id}
                    deleteHandler={() => dispatch(deleteTask(task.id))} 
                    completeHandler={()  => dispatch(completeTask(task)) }/>
            )}
            {(completed.length > 0)
            ? <ul>{completed.map(task => <li>{task.title}</li>)}</ul>
            : <h1>No Completed Tasks</h1>}
        </div>
    );
}

export default TasksContainer;