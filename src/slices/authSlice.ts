import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api/auth/';

interface User {
    id: string;
    name: string;
    email: string;
    routeId: string;
}

interface RegisterResponse {
    success: boolean;
    message: string;
    user: User;
}

interface RegisterError {
    message: string;
}

interface UserState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    isLoading: false,
    error: null,
};

export const registerUser = createAsyncThunk<
    RegisterResponse,
    { name: string; email: string; password: string },
    { rejectValue: RegisterError } 
>(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/register`, userData);
            return response.data;
        } catch (error: any) {
            console.error('Error SignUp:', error);
            return rejectWithValue({
                message: error.response?.data?.message || 'Error SignUp',
            });
        }
    }
);

export const loginUser = createAsyncThunk<
  { user: User },
  { email: string; password: string },
  { rejectValue: string }
>(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, userData);
      return response.data;
    } catch (error: any) {
      console.error("Error Login:", error);
      return rejectWithValue(error.response?.data?.message || "Error Login");
    }
  }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<RegisterResponse>) => {
                state.isLoading = false;
                state.user = action.payload.user;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message || 'An unexpected error occurred';
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
              })
              .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
              })
        
              .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
              })
    },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
