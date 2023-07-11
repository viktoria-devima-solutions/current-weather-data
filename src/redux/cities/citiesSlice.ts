import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from '../store';

// Type for our state
export interface CitiesState {
  citiesState: string[];
}

// Initial state
const initialState: CitiesState = {
  citiesState: [],
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCitiesState(state, action) {
      state.citiesState = action.payload;
    },
  },
});

export const { setCitiesState } = citiesSlice.actions;

export const selectCitiesState = (state: AppState) => state.cities.citiesState;

export default citiesSlice.reducer;
