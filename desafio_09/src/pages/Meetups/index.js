import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  MdLocationOn,
  MdDeleteForever,
  MdModeEdit,
  MdEvent,
} from 'react-icons/md';
import { isBefore, parseISO } from 'date-fns';

import { deleteMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Title } from './styles';

export default function Meetups() {
  const meetup = useSelector(state => state.meetup.meetup);
  const myMeetup = useSelector(state => state.meetup.myMeetup);
  const dispatch = useDispatch();

  function datePassed() {
    return isBefore(parseISO(meetup.defaultData), new Date());
  }

  return (
    <Container>
      <form>
        <Title>
          <strong>{meetup.title}</strong>
          {myMeetup && (
            <div>
              {!datePassed() && (
                <Link to="/meetups/edit">
                  <MdModeEdit size={20} />
                  Editar
                </Link>
              )}

              <button
                type="button"
                onClick={() => dispatch(deleteMeetupRequest(meetup.id))}
              >
                <MdDeleteForever size={20} />
                Cancelar
              </button>
            </div>
          )}
        </Title>
        {meetup.imagem && <img src={meetup.imagem.url} alt="" />}

        <textarea id="textarea" disabled value={meetup.descricao} />
        <div id="LH">
          <MdLocationOn size={20} />
          <p>{meetup.localizacao}</p>
          <MdEvent size={20} />
          <p>{meetup.data}</p>
        </div>
      </form>
    </Container>
  );
}
