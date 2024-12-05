import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {backend_url} from '../api';

export const Otpsend = createAsyncThunk(
  'user/Otpsend',
  async (phoneNumber, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/send-otp`,
        phoneNumber,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

// Verifying OTP
export const OtpVerify = createAsyncThunk(
  'user/OtpVerify',
  async ({otp, phoneNumber}, {rejectWithValue}) => {
    try {
      const payload = {otp, phoneNumber};

      const response = await axios.post(
        `${backend_url}/api/verify-otp`,
        payload,
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({nickname, gender, phoneNumber}, {rejectWithValue}) => {
    try {
      const payload = {nickname, gender, phoneNumber};
      const response = await axios.post(
        `${backend_url}/api/register_user`,
        payload,
      );
      // Access `verifiedUser` from the response
      const verifiedUser = response.data?.verifiedUser;

      // Save `verifiedUser` in AsyncStorage
      if (verifiedUser !== undefined) {
        await AsyncStorage.setItem(
          'verifiedUser',
          JSON.stringify(verifiedUser),
        );
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);
const userSlice = createSlice({
  name: 'user',
  initialState: {
    Otpsend: {data: null, status: 'idle', error: null},
    OtpVerify: {data: null, status: 'idle', error: null},
    registerUser: {data: null, status: 'idle', error: null},
  },
  reducers: {},
  extraReducers: builder => {
    // OTP Send Cases
    builder
      .addCase(Otpsend.pending, state => {
        state.Otpsend.status = 'loading';
      })
      .addCase(Otpsend.fulfilled, (state, action) => {
        state.Otpsend.status = 'succeeded';
        state.Otpsend.data = action.payload;
      })
      .addCase(Otpsend.rejected, (state, action) => {
        state.Otpsend.status = 'failed';
        state.Otpsend.error = action.payload;
      });

    // OTP Verify Cases
    builder
      .addCase(OtpVerify.pending, state => {
        state.OtpVerify.status = 'loading';
      })
      .addCase(OtpVerify.fulfilled, (state, action) => {
        state.OtpVerify.status = 'succeeded';
        state.OtpVerify.data = action.payload;
      })
      .addCase(OtpVerify.rejected, (state, action) => {
        state.OtpVerify.status = 'failed';
        state.OtpVerify.error = action.payload;
      });

    //registeruser
    builder
      .addCase(registerUser.pending, state => {
        state.registerUser.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerUser.status = 'succeeded';
        state.registerUser.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerUser.status = 'failed';
        state.registerUser.error = action.payload;
      });
  },
});

export default userSlice.reducer;
