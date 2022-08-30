import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';

import { setEvents } from 'store/calendar';

import { fetchTodayEvents } from 'services/googleCalendar';

interface CustomError {
  result: {
    error: {
      code: number;
      message: string;
    };
  };
}

export function* handleEvents(): Generator<
  CallEffect<Array<EventItemData>> | PutEffect,
  void,
  Array<EventItemData>
> {
  try {
    const info = yield call(fetchTodayEvents);
    yield put(setEvents({ events: info, error: '' }));
  } catch (error) {
    if (error instanceof Error) {
      yield put(setEvents({ error: error.message }));
    } else {
      yield put(
        setEvents({ error: (error as CustomError).result.error.message })
      );
    }
  }
}
