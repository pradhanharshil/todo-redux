import {combineReducers} from "redux";
import taskReducer from "./TaskReducer";

const reducers = {
    task: taskReducer
};

export default combineReducers(reducers);