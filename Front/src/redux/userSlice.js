import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: 'client',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAdminRole: (state) => {
      state.role = 'admin';
    },
  },
});

export const { setAdminRole } = userSlice.actions;

export default userSlice.reducer;