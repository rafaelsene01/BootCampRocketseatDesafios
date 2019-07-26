import { all, takeLatest, put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import getTime from 'date-fns/getTime';
import { parseISO } from 'date-fns';

import api from '~/services/api';

import { shareMeetupSuccess } from './actions';

export function* meetUp({ payload }) {
  const { meetup, myMeetup } = payload;
  yield put(shareMeetupSuccess(meetup, myMeetup));
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
    Alert.alert('Meetup criado');
  } catch (error) {
    Alert.alert('Falha no cadastro, verifique seus dados!');
  }
}

export function* editMeetup({ payload }) {
  console.tron.log(payload);
  try {
    const { id, imagem_id, title, descricao, data, localizacao } = payload;

    const newData = getTime(data) ? getTime(data) : getTime(parseISO(data));

    const meetup = Object.assign(
      { title, descricao, data: newData, localizacao },
      Number(imagem_id) || {}
    );

    yield call(api.put, `meetups/${id}`, meetup);

    Alert.alert('Meetup editado');
  } catch (error) {
    Alert.alert('Falha ao atualizar, verifique seus dados!');
  }
}
export function* deleteMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`, {});

    Alert.alert('Meetup deletado');
  } catch (error) {
    Alert.alert('Falha ao deletar');
  }
}
export default all([
  takeLatest('@meetup/SHARE_MEETUP_REQUEST', meetUp),

  takeLatest('@meetup/NEW_MEETUP_REQUEST', newMeetup),
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', deleteMeetup),
]);
