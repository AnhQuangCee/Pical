import { requestPosts } from "./actions";
import allReducer from "./reducers/rootReducers";

var redux = require("redux");
const axios = require("axios");

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
// console.log(store.dispatch(requestPosts()));
console.log(store.getState());

export default store;
