import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roles from "../data/roles.json";



const roleSlice = createSlice({
  name: "role",
  initialState: roles[0],
  reducers: {
    setRole: (state, action: PayloadAction<number>) => {
      return roles[action.payload];
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
