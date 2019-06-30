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
    return initialState;
}