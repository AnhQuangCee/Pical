import axiosService from "../Service/apiCaller";
import * as Config from "../constants/Config";

const url = "getData";
const urlAccount = "getDataLogin";
const urlAddUser = "addUser";

export const getPical = () => {
  return axiosService.get(`${Config.API_URL}/${url}`);
};

export const getAccount = () => {
  return axiosService.get(`${Config.API_URL}/${urlAccount}`);
};

// ADD_USER
export const addUser = data => {
  // console.log(data);
  return axiosService
    .post(`${Config.API_URL}/${urlAddUser}`, { data })
    .then(resp => resp.data);
};
