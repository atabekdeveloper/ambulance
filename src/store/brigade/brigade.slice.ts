import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBrigadeState } from './brigade.types';

const initialState: IBrigadeState = {
  location: [42.474037, 59.617937],
  location2: [42.474037, 59.617937],
  markerIncomig: false,
};

const brigadeSlice = createSlice({
  name: 'brigade',
  initialState,
  reducers: {
    setBrigadeLocation(state, { payload }: PayloadAction<number[]>) {
      if (payload[0]) {
        state.location = payload;
        state.markerIncomig = true;
      } else {
        state.location = [42.474037, 59.617937];
        state.markerIncomig = false;
      }
    },
    setBrigadeLocation2(state, { payload }: PayloadAction<number[]>) {
      if (payload[0]) state.location2 = payload;
      else state.location2 = [42.474037, 59.617937];
    },
    setMarkerIncoming(state, { payload }: PayloadAction<boolean>) {
      state.markerIncomig = payload;
    },
  },
});
export const { reducer, actions } = brigadeSlice;
