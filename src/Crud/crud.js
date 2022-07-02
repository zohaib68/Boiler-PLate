import axios from "axios";
import { axiosClient } from "../Axios/axios";
export let cancelApiCall = {
  products: null,
  productById: null,
};
export const simpleGetRequest = (url) => {
  var CancelToken = axios.CancelToken;
  return axiosClient.get(url, {
    cancelToken: new CancelToken(function executor(c) {
      cancelApiCall.products = c;
    }),
  });
};
export const getProductbyId = (id) => {
  var CancelToken = axios.CancelToken;
  return axiosClient.get(`/product/${id}`, {
    cancelToken: new CancelToken(function executor(c) {
      cancelApiCall.productById = c;
    }),
  });
};
