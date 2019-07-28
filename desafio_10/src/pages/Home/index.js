import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { View } from 'react-native';
import { subDays, addDays, format, isBefore } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import logo from '~/assets/M.png';
import Button from '~/components/Button';

import Background from '~/components/Background';
import CardMeetup from '~/components/CardMeetup';
import { Container, Header, Strong, LogoImg, List } from './styles';

export default function Home({ navigation }) {
  const signed = useSelector(state => state.auth.signed);
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetup/events', {
        params: { page, date },
      });

      setMeetups(response.data);
    }
    loadMeetups();
  }, [date, page]);

  function handlePrevDay() {
    if (isBefore(new Date(), date)) setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  async function handleSubscription(id) {
    await api.post(`/meetup/${id}/subscription`);
    navigation.navigate('Registrations');
  }

  return (
    <Background>
      <Container>
        <Header sig={signed}>
          <Button type="button" onPress={handlePrevDay}>
            <Icon name="keyboard-arrow-left" size={14} color="#fff" />
          </Button>
          <Strong>{dateFormatted}</Strong>
          <Button type="button" onPress={handleNextDay}>
            <Icon name="keyboard-arrow-right" size={14} color="#fff" />
          </Button>
        </Header>

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: cardMeetup }) => (
            <CardMeetup
              subscription={() => handleSubscription(cardMeetup.id)}
              data={cardMeetup}
              signed={signed}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Home.navigationOptions = ({ navigation, isSigned }) => ({
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
  title: 'Meetups',

  headerTitle: <LogoImg source={logo} />,
  headerLeft: <View />,

  headerRight: !isSigned && (
    <Button
      onPress={() => {
        navigation.navigate('SignIn');
      }}
    >
      Login
    </Button>
  ),
});
