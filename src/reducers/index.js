import { combineReducers } from "redux";
import NotesReducer from  './NotesReducers';

export default combineReducers ({
    notes: NotesReducer
});
