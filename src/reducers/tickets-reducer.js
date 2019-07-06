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

    },
    "issues" : {
        "count": 5,
        "status": {
            "todo": 3,
            "progress": 4,
            "testing": 2,
            "done": 1
        },
        "items" : [],
        "assignee" : [
            {   "username": "nit",
                "displayName": "Nitesh Kumar",
                "userType": "DEVELOPER",
                "count": 5,
            },
            {   "username": "nit",
                "displayName": "Gaurav Gupta",
                "userType": "DEVELOPER",
                "count": 12,
            },
            {   "username": "nit",
                "displayName": "Mangesh Padhri",
                "userType": "DEVELOPER",
                "count": 2,
            },
            {   "username": "nit",
                "displayName": "Kopal Darbari",
                "userType": "DEVELOPER",
                "count": 2,
            },
            {   "username": "nit",
                "displayName": "Pushkar Kinkar",
                "userType": "DEVELOPER",
                "count": 0,
            },
            {   "username": "nit",
                "displayName": "Zubair Khan",
                "userType": "DEVELOPER",
                "count": 1,
            },
            {   "username": "nit",
                "displayName": "Anu Singla",
                "userType": "TESTER",
                "count": 2,
            },
            {   "username": "nit",
                "displayName": "Vikas Giri",
                "userType": "TESTER",
                "count": 1,
            },
            {   "username": "nit",
                "displayName": "Ajendra Singh",
                "userType": "TESTER",
                "count": 0,
            }
        ]
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