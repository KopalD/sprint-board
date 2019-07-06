import { combineReducers } from 'redux';

import BuildReducer from './build-reducer';
import TicketsReducer from './tickets-reducer';
import sprintReducer from './sprint-reducer';

const reducers = combineReducers({
    tickets: TicketsReducer,
    sprint: sprintReducer,
    build: BuildReducer,
})

export default reducers;