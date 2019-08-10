import axiosService from "../Service/apiCaller";
import * as Config from "../constants/Config";

const url = "getData";
const urlAccount = "getDataLogin";

export const getPical = () => {
  return axiosService.get(`${Config.API_URL}/${url}`);
};

export const getAccount = () => {
  return axiosService.get(`${Config.API_URL}/${urlAccount}`);
};
