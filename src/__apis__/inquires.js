import axiosInstance from "./axios";

export const inquiryRequester = async (requestData) =>
  axiosInstance
    .post("inquiries/create-inquiry-handler", requestData)
    .then((response) => response.data);
