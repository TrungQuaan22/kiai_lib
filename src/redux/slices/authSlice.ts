import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<{ name: string; email: string; password: string }>) => {
      state.loading = true;
    },
    registerUserSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    registerUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerUser, registerUserSuccess, registerUserFailure } = authSlice.actions;
export default authSlice.reducer;
