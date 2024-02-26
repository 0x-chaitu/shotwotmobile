import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getAppliedBriefsAPI } from '../../services/Brief';

export const fetchAppliedBriefs = createAsyncThunk(
    'users/fetchAppliedBriefs',
    // @ts-ignore
    async () => {
      const response = await getAppliedBriefsAPI();
      return response;
    },
  );

const initialState = {
  briefs: [],
  isLoading: true,
};

const slice = createSlice({
  name: 'briefs',
  initialState,
  reducers: {
    setBriefs: (state, action) => {
      state.briefs = action.payload;
      state.isLoading = false;
    },
    resetState: state => {
      state.briefs = [];
      state.isLoading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAppliedBriefs.fulfilled, (state, action) => {
        const data = action?.payload?.data;
        console.log(data);
        state.isLoading = false;
        state.briefs = data;
      })
      .addCase(fetchAppliedBriefs.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAppliedBriefs.rejected, state => {
        state.isLoading = false;
      })
  },
});

// Reducer
export default slice.reducer;


// Reducer


// Actions
export const {setBriefs, resetState} = slice.actions;
