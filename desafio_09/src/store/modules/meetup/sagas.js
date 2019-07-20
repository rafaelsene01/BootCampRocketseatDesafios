import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import getTime from 'date-fns/getTime';
import { parseISO } from 'date-fns';

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

export function* editMeetup({ payload }) {
  console.tron.log(payload);
  try {
    const { id, imagem_id, title, descricao, data, localizacao } = payload;

    const newData = getTime(data) ? getTime(data) : getTime(parseISO(data));
    if (imagem_id) {
      yield call(api.put, `meetups/${id}`, {
        imagem_id: Number(imagem_id),
        title,
        descricao,
        data: newData,
        localizacao,
      });
    } else {
      yield call(api.put, `meetups/${id}`, {
        title,
        descricao,
        data: newData,
        localizacao,
      });
    }
    toast.success('Meetup editado');
    history.push('/dashboard');
  } catch (error) {
    toast.error(error);

    toast.error('Falha ao atualizar, verifique seus dados!');
  }
}
export function* deleteMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`, {});

    toast.success('Meetup deletado');
    history.push('/dashboard');
  } catch (error) {
    toast.error(error);

    toast.error('Falha ao deletar');
  }
}
export default all([
  takeLatest('@meetup/SHARE_MEETUP_REQUEST', meetUp),
  takeLatest('@meetup/SHARE_MEETUP_EDIT_REQUEST', meetupEdit),
  takeLatest('@meetup/NEW_MEETUP_REQUEST', newMeetup),
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', deleteMeetup),
]);
