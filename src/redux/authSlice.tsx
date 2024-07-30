import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  password: string;
}

interface AuthState {
  msg: string;
  user: string;
  token: string;
  loading: boolean;
  error: string;
  users: User[];
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  msg: '',
  user: '',
  token: '',
  loading: false,
  error: '',
  users: [],
  isAuthenticated: false,
};

interface SignUpUserResponse {
  error?: string;
  msg?: string;
}

export const signUpUser = createAsyncThunk<SignUpUserResponse, User>(
  'auth/signUpUser',
  async (body) => {
    const res = await fetch("https://run.mocky.io/v3/4d519172-af3d-43da-ade6-ce7452b53ad2", {
      method: "post",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(body)
    });
    return await res.json();
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    clearUsers: (state) => {
      state.users = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action: PayloadAction<SignUpUserResponse>) => {
        state.loading = false;
        const { error, msg } = action.payload;
        if (error) {
          state.error = error;
        } else {
          state.msg = msg || "";
        }
      })
      .addCase(signUpUser.rejected, (state) => {
        state.loading = true;
      });
  }
});

export const { login, logout, addUser, setUsers, clearUsers } = authSlice.actions;
export default authSlice.reducer;
