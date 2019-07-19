import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { MdAddCircleOutline } from 'react-icons/md';
import { updateProfileRequest } from '~/store/modules/user/actions';

import ImageInput from './ImageInput';

import { Container } from '../styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <ImageInput name="image_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Textarea name="descricao" placeholder="Descrição completa" />

        <Input name="data" placeholder="Data do meetup" />

        <Input name="localizacao" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={20} />
          Salvar MeetUp
        </button>
      </Form>
    </Container>
  );
}
