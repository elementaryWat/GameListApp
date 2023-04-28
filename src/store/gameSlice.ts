import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../types/Game";

interface GameState {
  games: Game[];
}

const initialState: GameState = {
  games: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
  },
});

export const { setGames } = gameSlice.actions;

export default gameSlice;
