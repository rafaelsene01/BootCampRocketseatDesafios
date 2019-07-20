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
export function shareMeetupEditRequest() {
  return {
    type: '@meetup/SHARE_MEETUP_EDIT_REQUEST',
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
