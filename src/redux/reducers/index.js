import { combineReducers } from 'redux';
import tabReducer from "./tabReducer";
import modalReducer from './modalReducer';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
    tabReducer,
    modal: modalReducer,
    country: countryReducer
});

export default rootReducer;