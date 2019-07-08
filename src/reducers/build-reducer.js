import { BUILD_STATUS } from "../constants/builds";

const initialState = {
    "status": BUILD_STATUS.OFFLINE,
    "builds" : [
        {
            "id": "",
            "name": "",
            "status": "",
            "buildNumber": "",
            "lastUpdated": "",
            "triggeredBy": "",
            "lastFailed": "",
            "history" : [{
                "status": "",
                "buildNumber": "",
                "lastUpdated": "",
                "triggeredBy": "",
            }]
        }
    ]
}

export default function(state = initialState, action) {

    switch(action.type) {

        case "UPDATE_BUILDS": {
            state = { ...state,
                builds: action.payload
             }
             break;
        }
    }
    return state;}