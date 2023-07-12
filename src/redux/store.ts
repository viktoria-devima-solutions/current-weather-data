import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { citiesSlice } from './cities/citiesSlice';

import type { ThunkAction, Action } from '@reduxjs/toolkit';

const makeStore = () =>
  configureStore({
    reducer: {
      [citiesSlice.name]: citiesSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
