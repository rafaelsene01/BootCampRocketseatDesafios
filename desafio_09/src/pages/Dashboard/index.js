import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MdChevronLeft,
  MdChevronRight,
  MdAddCircleOutline,
} from 'react-icons/md';
import pt from 'date-fns/locale/pt';

import { format, parseISO } from 'date-fns';
import api from '~/services/api';

import { shareMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Scroll, ButtonPrev, ButtonNext } from './styles';

export default function Dashboard() {
  const [meetUps, setMeetUps] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('meetups', { params: { page } });

      const data = await response.data.map(meetup => ({
        ...meetup,
        defaultData: meetup.data,
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

  function handleNavigateMeetup(meetup) {
    const myMeetup = true;
    dispatch(shareMeetupRequest(meetup, myMeetup));
  }
  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <Link to="/meetups/new">
          <MdAddCircleOutline size={20} />
          Novo MeetUp
        </Link>
      </header>

      {(!!meetUps.length || page > 1) && (
        <>
          <div id="page">
            <ButtonPrev type="button" onClick={handlePrev} page={page}>
              <MdChevronLeft size={36} color="#fff" />
            </ButtonPrev>
            <strong>{page}</strong>
            <ButtonNext
              type="button"
              onClick={handleNext}
              meetUps={meetUps.length}
            >
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
                    <button
                      type="button"
                      onClick={() => handleNavigateMeetup(event)}
                    >
                      <MdChevronRight size={24} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </Scroll>
        </>
      )}
    </Container>
  );
}
