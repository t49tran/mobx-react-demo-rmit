import axios from "axios";

const axiosInstance = () => {
  let instance;

  instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
      Accept: "application/json",
    },
  });

  return instance;
};

export const axiosInstances = Object.freeze({
  public: () => axiosInstance(),
});
