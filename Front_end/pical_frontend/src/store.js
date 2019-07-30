import {requestPosts} from './actions/index';
import allReducer from './reducers/picalReducers';

var redux = require('redux');
const axios = require('axios');

//get data from Database
// const getProductData = () => {
//     return(
//     axios.get('http://localhost:4000/getData')
//       .then((res) => console.log(res.data)
//     )
// )}

//Create store
var store = redux.createStore(allReducer);
store.dispatch(requestPosts());
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;