import axiosInstance from "./axios";

export const personalTrainingRequester = async (requestData) =>
  axiosInstance
    .post(
      "personal-training-requests/personal-training-requests-handler",
      requestData
    )
    .then((response) => response.data);
