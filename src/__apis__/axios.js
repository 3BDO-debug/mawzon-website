import axios from "axios";

// http://127.0.0.1:8000 -33 https://mawzon-021171183f4b.herokuapp.com --- https://mawzon-admin-ee814557e2e0.herokuapp.com   https://mawzon-9f7210a84ee8.herokuapp.com

export const mainUrl = "https://mawzon-021171183f4b.herokuapp.com";

const axiosInstance = axios.create({
  baseURL: mainUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
