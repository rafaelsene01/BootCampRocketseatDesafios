import React, { useState, useMemo, useEffect } from 'react';

import { View, ActivityIndicator } from 'react-native';
import { subDays, addDays, format, isBefore } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import logo from '~/assets/M.png';
import Button from '~/components/Button';

import Background from '~/components/Background';
import CardMeetup from '~/components/CardMeetup';
import { Container, Header, Strong, LogoImg, List } from './styles';
import meetup from '~/store/modules/meetup/reducer';

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
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
  return (
    <Background>
      <Container>
        <Header>
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
            <CardMeetup data={cardMeetup} />
          )}
        />
        {loading && <ActivityIndicator />}
      </Container>
    </Background>
  );
}

Home.navigationOptions = ({ navigation }) => ({
  headerTitle: <LogoImg source={logo} />,
  headerLeft: <View />,

  headerRight: (
    <Button
      onPress={() => {
        navigation.navigate('SignIn');
      }}
    >
      Login
    </Button>
  ),
});
