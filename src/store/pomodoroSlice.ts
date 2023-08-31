import { createSlice } from "@reduxjs/toolkit";
import { IPomodoro } from "../models/IPomodoro";

export interface PomodoroState {
  pomodoros: IPomodoro[];
}

const initialState: PomodoroState = {
  pomodoros: [],
};

const pomodoroSlice = createSlice({
  name: "pomodoros",
  initialState,
  reducers: {
    addPomodoro(state, action) {
      // console.log("state.pomodoros: ", state.pomodoros);
      state.pomodoros.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
        pomodoroCnt: 1,
      });
    },

    setCompletePomodoro(state, action) {
      const settedPomodoro = state.pomodoros.find(
        (pomodoro) => pomodoro.id === action.payload
      );

      if (settedPomodoro !== undefined) {
        settedPomodoro.completed = true;
      }
    },

    removePomodoro(state, action) {
      const changedState = state.pomodoros.filter(
        (pomodoro) => pomodoro.id !== action.payload.id
      );

      state.pomodoros = changedState;
    },
  },
});

export const { addPomodoro, setCompletePomodoro, removePomodoro } =
  pomodoroSlice.actions;

export default pomodoroSlice.reducer;
