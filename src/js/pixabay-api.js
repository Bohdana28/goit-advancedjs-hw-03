import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";

const API_KEY = "44023316-0d50012e2ff9db94e7166d7a8";

export function getImagesByQuery(query) {
  return axios
    .get("", {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },

    })
    .then((response) => response.data);

}