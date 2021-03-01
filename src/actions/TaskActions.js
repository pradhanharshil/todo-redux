import types from "./Types";

export function addTask(task) {
    return {
        type: types.ADD_TASK,
        task
    }
}

export function deleteTask(id) {
    return {
        type: types.DELETE_TASK,
        id
    }
}

export function completeTask(task) {
    return {
        type: types.MARK_COMPLETE,
        task
    }
}

export function removeFromCompleted(id) {
    return {
        type: types.REMOVE_FROM_COMPLETED,
        id
    }
}