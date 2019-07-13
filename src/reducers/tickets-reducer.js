import { TICKETS } from "./default";

export default function (state = TICKETS.initialState(), action) {

    switch (action.type) {
        case "UPDATE_STORIES": {
            state = { ...state,
                stories: action.payload,
             }
             break;
        }
        case "UPDATE_ISSUES": {
            state = { ...state,
                issues: action.payload,
             }
             break;
        }
        case "UPDATE_BACKLOG": {
            state = { ...state,
                backlog: action.payload,
             }
             break;
        }

        // default:
        //     return action.payload;
    }

    return state;
}