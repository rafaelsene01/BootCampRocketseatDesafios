export function shareMeetupRequest(meetup, myMeetup) {
  return {
    type: '@meetup/SHARE_MEETUP_REQUEST',
    payload: { meetup, myMeetup },
  };
}
export function shareMeetupSuccess(meetup, myMeetup) {
  return {
    type: '@meetup/SHARE_MEETUP_SUCCESS',
    payload: { meetup, myMeetup },
  };
}
export function newMeetupRequest(
  imagem_id,
  title,
  descricao,
  data,
  localizacao
) {
  return {
    type: '@meetup/NEW_MEETUP_REQUEST',
    payload: { imagem_id, title, descricao, data, localizacao },
  };
}

export function editMeetupRequest(
  id,
  imagem_id,
  title,
  descricao,
  data,
  localizacao
) {
  return {
    type: '@meetup/EDIT_MEETUP_REQUEST',
    payload: { id, imagem_id, title, descricao, data, localizacao },
  };
}

export function deleteMeetupRequest(id) {
  return {
    type: '@meetup/DELETE_MEETUP_REQUEST',
    payload: { id },
  };
}
