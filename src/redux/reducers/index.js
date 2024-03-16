import { combineReducers } from 'redux';
import tabReducer from "./tabReducer";
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    tabReducer,
    modal: modalReducer
});

export default rootReducer;