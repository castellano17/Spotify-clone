import axios from "axios";

export const axiosSP = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

export const getConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("userSP"))?.token
      }`,
    },
  };
};
