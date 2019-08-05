import axiosService from "../Service/apiCaller";
import * as Config from "../constants/Config";

const url = "getData";
export const getPical = () => {
  return axiosService.get(`${Config.API_URL}/${url}`);
};
