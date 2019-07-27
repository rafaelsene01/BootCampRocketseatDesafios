import React, { useMemo } from 'react';
import { formatRelative, parseISO, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '~/components/Button';

import {
  Container,
  MeetupImg,
  Info,
  Title,
  Additional,
  Item,
  Text,
} from './styles';

export default function CardMeetup({ data, signed }) {
  const dateParsed = useMemo(() => {
    return formatRelative(subHours(parseISO(data.data), 3), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.data]);

  return (
    <Container>
      {data.imagem && (
        <MeetupImg source={{ uri: data.imagem.url }} resizeMode="stretch" />
      )}
      <Info>
        <Title>{data.title}</Title>

        <Additional>
          <Item>
            <Icon name="event" size={14} color="#999" />
            <Text>{dateParsed}</Text>
          </Item>
          <Item>
            <Icon name="place" size={14} color="#999" />
            <Text>{data.localizacao}</Text>
          </Item>
          <Item>
            <Icon name="person" size={14} color="#999" />
            <Text>{data.user.name}</Text>
          </Item>
        </Additional>

        {signed && <Button>Realizar inscrição</Button>}
      </Info>
    </Container>
  );
}
