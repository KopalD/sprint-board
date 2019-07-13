import { SPRINT } from "./default";

export default function(state = SPRINT.initialState(), action) {

    switch(action.type) {

        case "UPDATE_DAYS": {
            state = { ...state,
                completion: action.payload.completion,
                daysRemaining: action.payload.daysRemaining
             }
             break;
        }
        case "CODE_FREEZE": {
            console.log('t',action.payload)
            state = { ...state,
                codeFreeze: action.payload
             }
             break;
        }
    }
    return state;
}