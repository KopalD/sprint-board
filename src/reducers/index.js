import { combineReducers } from 'redux';

import BuildReducer from './build-reducer';
import SprintReducer from './sprint-reducer';
import codeFreezeReducer from './code-freeze-reducer';

const reducers = combineReducers({
    sprint: SprintReducer,
    codeFreeze: codeFreezeReducer,
    build: BuildReducer,
})

export default reducers;