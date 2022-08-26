import { RootState } from 'store/index';

export const selectEvents = (state: RootState) => state.calendar;
