import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import getTime from 'date-fns/getTime';

import api from '~/services/api';
import history from '~/services/history';

import { shareMeetupSuccess } from './actions';

export function* meetUp({ payload }) {
  const { meetup, myMeetup } = payload;
  yield put(shareMeetupSuccess(meetup, myMeetup));

  history.push('/meetups');
}
export function meetupEdit() {
  history.push('/meetups/edit');
}

export function* newMeetup({ payload }) {
  console.tron.log();
  try {
    const { imagem_id, title, descricao, data, localizacao } = payload;

    yield call(api.post, 'meetups', {
      imagem_id,
      title,
      descricao,
      data: getTime(data),
      localizacao,
    });
    toast.success('Meetup criado');
    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados!');
  }
}

export default all([
  takeLatest('@meetup/SHARE_MEETUP_REQUEST', meetUp),
  takeLatest('@meetup/SHARE_MEETUP_EDIT_REQUEST', meetupEdit),
  takeLatest('@meetup/NEW_MEETUP_REQUEST', newMeetup),
]);
