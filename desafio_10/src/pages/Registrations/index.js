import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import CardMeetup from '~/components/CardMeetup';
import { Container, List } from './styles';

export default function Registrations() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetup/subscriptions');

      setMeetups(response.data);
    }
    loadMeetups();
  }, [meetups]);

  async function Unsubscribe(id) {
    await api.delete(`/meetup/${id}/subscriptions`);
  }

  return (
    <Background>
      <Container>
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: cardMeetup }) => (
            <CardMeetup
              data={cardMeetup.meetup}
              unsubscribe={() => Unsubscribe(cardMeetup.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Registrations.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
  title: 'Inscrições',
});
