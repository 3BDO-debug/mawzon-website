import axiosInstance from "./axios";

const mainUrl = "https://fitrithm-1535b180c063.herokuapp.com";

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
