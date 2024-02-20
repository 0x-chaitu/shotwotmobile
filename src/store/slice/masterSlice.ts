import {createSlice} from '@reduxjs/toolkit';
import {SplashProps} from '../../utlis/TypeScriptProps';

const initialState: {
  userHasViewdSplash: boolean;
  splashList: SplashProps[];
} = {
  userHasViewdSplash: false,
  splashList: [
    {
      id: 1,
      value:
        'Capturing Moments, Creating Stories Your Visual Odyssey Starts Here Step1',
    },
    {
      id: 2,
      value:
        'Capturing Moments, Creating Stories Your Visual Odyssey Starts Here Step2',
    },
    {
      id: 3,
      value:
        'Capturing Moments, Creating Stories Your Visual Odyssey Starts Here Step3',
    },
  ],
};

const slice = createSlice({
  name: 'Master',
  initialState,
  reducers: {
    setUserHasViewdSplash: (state, action) => {
      state.userHasViewdSplash = action.payload;
    },

    resetAiImagesState: () => {
      return initialState;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {setUserHasViewdSplash, resetAiImagesState} = slice.actions;
