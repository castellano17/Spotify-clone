import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "../../utils/spotify";

const initialState = {
  name: "",
  token: "",
  favoriteSongs: [],
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfoGlobal: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserInfoGlobal } = userInfoSlice.actions;

export const loginUser = (userName) => (dispatch) => {
  getAuth()
    .then((res) => {
      const newState = {
        name: userName,
        token: res,
        favoriteSongs: [],
      };
      localStorage.setItem("userSP", JSON.stringify(newState));
      dispatch(setUserInfoGlobal(newState));
    })
    .catch((err) => console.log(err));
};

export default userInfoSlice.reducer;
