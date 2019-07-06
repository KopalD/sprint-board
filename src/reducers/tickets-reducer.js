const initialState = {
    "stories" : {
        "count": 10,
        "status": {
            "todo": 3,
            "progress": 4,
            "testing": 2,
            "done": 1
        },
        "items" : [] 

    }
}

export default function (state = initialState, action) {

    switch (action.type) {
        case "UPDATE_STORIES": {
            state = { ...state,
                stories: action.payload.stories,
             }
             break;
        }
        case "UPDATE_ISSUES": {
            state = { ...state,
                issues: action.payload.issues,
             }
             break;
        }

        // default:
        //     return action.payload;
    }

    return state;
}