import { all, takeLatest, put } from 'redux-saga/effects';

import history from '~/services/history';

import { shareMeetupSuccess } from './actions';

export function* meetUp({ payload }) {
  const { meetup, myMeetup } = payload;
  yield put(shareMeetupSuccess(meetup, myMeetup));

  history.push('/meetups');
}
export function meetUpEdit() {
  history.push('/meetups/edit');
}

export default all([
  takeLatest('@meetup/SHARE_MEETUP_REQUEST', meetUp),
  takeLatest('@meetup/SHARE_MEETUP_EDIT_REQUEST', meetUpEdit),
]);
