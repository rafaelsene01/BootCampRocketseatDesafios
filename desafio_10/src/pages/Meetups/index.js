import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '~/components/Button';
import Background from '~/components/Background';

import { Container } from './styles';

export default function Meetups() {
  return (
    <Background>
      <Container>
        <Text>Meetups</Text>
      </Container>
    </Background>
  );
}

Meetups.navigationOptions = ({ navigation }) => ({
  title: 'Meetup',
  headerLeft: (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="arrow-back" size={20} color="#FFF" />
    </TouchableOpacity>
  ),

  headerRight: <Button>Login</Button>,
});
