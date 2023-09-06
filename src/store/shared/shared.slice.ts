import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISharedType } from './shared.types';

const initialState: ISharedType = {
  id: 0,
  isModal: false,
  isMenu: false,
  paramsItem: null,
};

const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModal = !state.isModal;
    },
    toggleMenu(state) {
      state.isMenu = !state.isMenu;
    },
    setId(state, { payload }: PayloadAction<number>) {
      state.id = payload;
    },
    setParamsItem(state, { payload }: PayloadAction<any>) {
      state.paramsItem = payload;
    },
    setParamsItemForm(state, { payload }: PayloadAction<any>) {
      state.paramsItem = payload;
      state.isModal = true;
    },
  },
});
export const { reducer, actions } = sharedSlice;
