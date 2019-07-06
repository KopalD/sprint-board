
const initialState = {
    "completion": 60,
    "daysRemaining": 6,
    "codeFreeze" : {
        "enabled" : false
    },
    "lastValues": []
}

export default function(state = initialState, action) {

    switch(action.type) {

        case "UPDATE_DAYS": {
            state = { ...state,
                completion: action.payload.completion,
                daysRemaining: action.payload.daysRemaining
             }
             break;
        }
        case "CODE_FREEZE": {
            state = { ...state,
                codeFreeze: action.payload.codeFreeze
             }
             break;
        }
    }
    return state;
}