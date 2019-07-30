//Create Reducers
const picalInitialState = {
    testConnect: false
}

const allReducer = (state = picalInitialState, action) => {
    switch (action.type) {
        case "REQUEST_POSTS":
            state.testConnect = !state.testConnect
            return state
        default:
            return state
    }
}

export default allReducer;