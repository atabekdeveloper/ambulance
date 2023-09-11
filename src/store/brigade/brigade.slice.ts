import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBrigadeState } from './brigade.types';

const initialState: IBrigadeState = {
  location: [42.474037, 59.617937],
  location2: [],
};

const brigadeSlice = createSlice({
  name: 'brigade',
  initialState,
  reducers: {
    setBrigadeLocation(state, { payload }: PayloadAction<number[]>) {
      if (payload.length) state.location = payload;
      else state.location = [42.474037, 59.617937];
    },
    setBrigadeLocation2(state, { payload }: PayloadAction<number[]>) {
      if (payload.length) state.location2 = payload;
      else state.location = [42.474037, 59.617937];
    },
  },
});
export const { reducer, actions } = brigadeSlice;
