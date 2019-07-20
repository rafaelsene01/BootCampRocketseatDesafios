import React, { useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import { MdAddCircleOutline } from 'react-icons/md';
import { newMeetupRequest } from '~/store/modules/meetup/actions';

import ImageInput from './ImageInput';

import { Container } from '../styles';

registerLocale('pt-BR', ptBR);

export default function New() {
  const [dataF, setDataF] = useState();
  const dispatch = useDispatch();

  function handleSubmit({ image_id, title, descricao, localizacao }) {
    dispatch(newMeetupRequest(image_id, title, descricao, dataF, localizacao));
  }

  function date() {
    return new Date();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ImageInput name="image_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Textarea name="descricao" placeholder="Descrição completa" />

        <div id="dt">
          <DatePicker
            showTimeSelect
            autoComplete="off"
            timeFormat="p"
            timeIntervals={30}
            dateFormat="P p"
            selected={dataF}
            onChange={e => setDataF(e)}
            minDate={date()}
            name="data"
            locale="pt-BR"
            placeholderText="Data do meetup"
          />
        </div>

        <Input name="localizacao" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={20} />
          Salvar MeetUp
        </button>
      </Form>
    </Container>
  );
}
