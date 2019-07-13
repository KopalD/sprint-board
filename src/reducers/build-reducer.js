import { BUILD } from "./default";

export default function (state = BUILD.initialState(), action) {

    switch (action.type) {

        case "UPDATE_BUILDS": {
            state = action.payload
            break;
        }
        case "UPDATE_BUILD_STATUS": {
            state = {
                ...state,
                status: action.payload
            }
            break;
        }
    }
    return state;
}