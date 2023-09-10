import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as auth } from './auth/auth.slice';
import { reducer as brigade } from './brigade/brigade.slice';
import { reducer as shared } from './shared/shared.slice';

const reducers = combineReducers({ shared, auth, brigade });

export const store = configureStore({
  reducer: reducers,
  devTools: import.meta.env.MODE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
