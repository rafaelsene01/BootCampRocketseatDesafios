import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  MdLocationOn,
  MdDeleteForever,
  MdModeEdit,
  MdEvent,
} from 'react-icons/md';

import { Container, Title } from './styles';

export default function Meetups() {
  const meetup = useSelector(state => state.meetup.meetup);
  const myMeetup = useSelector(state => state.meetup.myMeetup);

  return (
    <Container>
      <form>
        <Title>
          <strong>{meetup.title}</strong>
          {myMeetup && (
            <div>
              <Link to="/meetups/edit">
                <MdModeEdit size={20} />
                Editar
              </Link>
              <button type="button">
                <MdDeleteForever size={20} />
                Cancelar
              </button>
            </div>
          )}
        </Title>

        <img src={meetup.imagem.url} alt="" />
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
