import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdChevronLeft,
  MdChevronRight,
  MdAddCircleOutline,
} from 'react-icons/md';
import pt from 'date-fns/locale/pt';

import { format, parseISO } from 'date-fns';
import api from '~/services/api';

import { Container, Scroll, ButtonPrev, ButtonNext } from './styles';

export default function Dashboard() {
  const [meetUps, setMeetUps] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('meetups', { params: { page } });

      const data = await response.data.map(meetup => ({
        ...meetup,
        data: format(parseISO(meetup.data), "dd 'de' MMMM',' 'as' HH'h'", {
          locale: pt,
        }),
      }));
      setMeetUps(data);
    }
    loadSchedule();
  }, [page]);

  function handlePrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function handleNext() {
    if (meetUps.length >= 9) {
      setPage(page + 1);
    }
  }
  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <Link to="/meetups/">
          <MdAddCircleOutline size={20} />
          Novo MeetUp
        </Link>
      </header>
      <div id="page">
        <ButtonPrev type="button" onClick={handlePrev} page={page}>
          <MdChevronLeft size={36} color="#fff" />
        </ButtonPrev>
        <strong>{page}</strong>
        <ButtonNext type="button" onClick={handleNext} meetUps={meetUps.length}>
          <MdChevronRight size={36} color="#fff" />
        </ButtonNext>
      </div>
      <Scroll>
        <ul>
          {meetUps.map(event => (
            <li key={event.id}>
              <strong>{event.title}</strong>
              <div id="data">
                <span>{event.data}</span>
                <MdChevronRight size={24} />
              </div>
            </li>
          ))}
        </ul>
      </Scroll>
    </Container>
  );
}
