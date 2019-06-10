import { combineReducers } from 'redux';

import BuildReducer from './build-reducer';

const reducers = combineReducers({
    builds: BuildReducer
})

export default reducers;