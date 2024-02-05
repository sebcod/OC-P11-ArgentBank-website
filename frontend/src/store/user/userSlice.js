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
    updateStoreUserName: (userSlice, action) => {
      userSlice.userData.userName = action.payload;
    },
    disconnectUser: (userSlice) => {
      userSlice.userData = {};
      userSlice.userStatus = { connected: false };
    },
  },
});

export const { updateUserData, updateStoreUserName, disconnectUser } =
  userSlice.actions;
