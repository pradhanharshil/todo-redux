import types from "../actions/Types";

let initState = {
    list: [],
    completed: []
}

function taskReducer(state = initState, action) {
    switch (action.type) {
        case types.ADD_TASK:
            return {
                ...state,
                list: [...state.list, action.task]
            }
        case types.MARK_COMPLETE:
            return {
                ...state,
                list: state.list.filter(task => task.id !== action.task.id),
                completed: [...state.completed, action.task]
            }
        case types.DELETE_TASK:
            return {
                ...state,
                list: state.list.filter(task => task.id !== action.id)
            }
        case types.REMOVE_FROM_COMPLETED:
            return {
                ...state,
                completed: state.completed.filter(task => task.title !== action.title)
            }
        default:
            return state;
    }
}

export default taskReducer;