const initialState = {
    enabled : false
}

export default function(state = initialState, action) {

    switch(action.type) {
        case "CODE_FREEZE": {
            return action.payload;
            break;
        }
    }

    return state;
}