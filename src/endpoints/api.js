import axios from "axios";

export const axiosWithAuth = () => {

  return axios.create({
    baseURL: "https://reqres.in/api/workintech",
  });
};

export let axiosInstance = axiosWithAuth();