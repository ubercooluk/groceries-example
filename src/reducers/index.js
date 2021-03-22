import {combineReducers} from 'redux';
import fruitsReducer from './fruitsReducer';
import vegetablesReducer from './vegetablesReducer';

const rootReducers = combineReducers({    
    fruitsData : fruitsReducer,
    vegetablesData: vegetablesReducer,      
});
export default rootReducers;