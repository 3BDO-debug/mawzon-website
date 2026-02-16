import axiosInstance from "./axios";

/* 33 */
const mainUrl = "https://fitrithm-d86dd52d8dc9.herokuapp.com";

export const packagesFetcher = async () =>
  axiosInstance
    .get(`${mainUrl}/sales/packages/package/?related_team=2`)
    .then((response) => response.data);

export const pricesFetcher = async (related_package) =>
  axiosInstance
    .get(`${mainUrl}/sales/packages/package-price`, {
      params: { related_package },
    })
    .then((response) => response.data);
