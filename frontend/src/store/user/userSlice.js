import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userData: {},
    userStatus: {
      connected: false,
    },
  },

  reducers: {
    updateUserData: (userSlice, action) => {
      userSlice.userData = action.payload;
      userSlice.userStatus = { connected: true };
    },
    disconnectUser: (userSlice) => {
      userSlice.userData = {};
      userSlice.userStatus = { connected: false };
    },
  },
});

const { updateUserData, disconnectUser } = userSlice.actions;

export { disconnectUser, updateUserData };
