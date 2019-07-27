
var redux = require('redux');

//Create store
const picalInitialState = {
    testConnect: 'test'
}
const allReducer = (state = picalInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("Ke noi thanh cong!");
            return state
        case ACTION_TYPE_2:
            return state
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

export default store;