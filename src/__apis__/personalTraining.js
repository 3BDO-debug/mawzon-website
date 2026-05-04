import axiosInstance from "./axios";

/* ----------------- */

export const personalTrainingRequester = async (requestData) =>
  axiosInstance
    .post(
      "personal-training-requests/personal-training-requests-handler",
      requestData
    )
    .then((response) => response.data);

export const createSubscriptionRequest = async (requestData) =>
  axiosInstance
    .post(
      "https://fitrithm-d86dd52d8dc9.herokuapp.com/sales/subscriptions/create-subscription/",
      requestData
    )
    .then((response) => response.data);
