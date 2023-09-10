import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBrigadeState } from './brigade.types';

const initialState: IBrigadeState = {
  location: [42.474037, 59.617937],
};

const brigadeSlice = createSlice({
  name: 'brigade',
  initialState,
  reducers: {
    setBrigadeLocation(state, { payload }: PayloadAction<number[]>) {
      state.location = payload;
    },
  },
});
export const { reducer, actions } = brigadeSlice;
