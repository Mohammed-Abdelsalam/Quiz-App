import { createSlice } from "@reduxjs/toolkit";

interface scoreState {
  finalScore: number;
  rank: number;
}

const initialState: scoreState = {
  finalScore: 0,
  rank: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incrementFinalScore: (state, action) => {
      state.finalScore += action.payload;
    },
    updateRank: (state, action) => {
      state.rank = action.payload;
    },
  },
});

export const { incrementFinalScore, updateRank } = scoreSlice.actions;
export default scoreSlice.reducer;
