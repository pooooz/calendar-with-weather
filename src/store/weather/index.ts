import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface weatherDay {
  temperature: number;
  description: string;
}
interface weatherState {
  arr: Array<weatherDay>;
}
const initialState: weatherState = {
  arr: [{ temperature: 27, description: 'sunny' }],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<{ message: string }>) => {
      console.log(action.payload.message);
    },
  },
});

export const { setWeather } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
