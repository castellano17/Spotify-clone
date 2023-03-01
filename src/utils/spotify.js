import axios from "axios";
import qs from "qs";
import Buffer from "buffer/";

export const getAuth = async () => {
  try {
    const client_id = import.meta.env.VITE_SPOTIFY_API_ID; // Your client id
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET; // Your secret
    const auth_token = Buffer.Buffer.from(
      `${client_id}:${client_secret}`,
      "utf-8"
    ).toString("base64");
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = "https://accounts.spotify.com/api/token";
    const data = qs.stringify({ grant_type: "client_credentials" });

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${auth_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    //return access token
    return response.data.access_token;
    //console.log(response.data.access_token);
  } catch (error) {
    //on fail, log the error in console
    console.log(error);
  }
};
