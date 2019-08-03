import * as types from '../constants/actionsTypes';
//Create Reducers
const picalInitialState = {
    testConnect: false
}

const allReducer = (state = picalInitialState, action) => {
    switch (action.type) {
        case types.PICAL_IMAGES:
            state.testConnect = !state.testConnect;
            return state
        default:
            return state
    }
}
export default allReducer;