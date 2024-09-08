import axios from "axios";
import Cookies from "js-cookie";

axios.interceptors.request.use(
  async (config) => {
    const accessToken = Cookies.get("access_token");
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";

    config.withCredentials = true;
    return Promise.resolve(config);
  },
  (err) => {
    return Promise.reject(err);
  }
);
const post = (url, data, config) => {
  return axios.post(url, data, config);
};
const get = (url, data) => {
  return axios.get(url, data);
};
export default { post, get };
