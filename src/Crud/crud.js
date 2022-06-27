import { axiosClient } from "../Axios/axios";

export const getProducts = () => {
  return axiosClient.get("/products");
};
