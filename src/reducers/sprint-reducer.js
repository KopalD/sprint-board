export default function(state = null, action) {

    switch(action.type) {
        case "UPDATE_SPRINT": 
            return action.payload;
            break;
    }

    return state;
}