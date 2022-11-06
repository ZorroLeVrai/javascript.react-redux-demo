import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: "uniqueCounter",
  initialState: { counter: 0 },
  reducers: {
    updateCounter: (state, action) => {
      state.counter += action.payload.addNumber;
    }
  }
});

export function modifyCounter(nb) {
  return ({
    type: slice.actions.updateCounter.type,
    payload: { addNumber: nb }
  });
}

export const { updateCounter } = slice.actions;
export default slice.reducer;