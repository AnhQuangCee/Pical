var redux = require('redux');
const axios = require('axios');

const getProductData = () => {
    return(
    axios.get('http://localhost:4000/getData')
      .then((res) => console.log(res.data)
    )
)}
//Create store
const picalInitialState = {
    testConnect: 'test',
    data: null
}

const allReducer = (state = picalInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            JSON.stringify(getProductData());
            return state
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

export default store;