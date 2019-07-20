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
