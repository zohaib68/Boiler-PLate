import axios from "axios";

export const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://fakestoreapi.com";

axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
axiosClient.interceptors.response.use(
  function (response) {
    alert("success");
    return response;
  },
  function (error) {
    if (error?.name === "CanceledError") {
      return null;
    } else {
      alert("error");
    }

    return Promise.reject(error);
  }
);
// axiosClient.defaults.withCredentials = true;
