import React from 'react';

import { View } from 'react-native';

import Button from '~/components/Button';

import Background from '~/components/Background';
// import { Container } from './styles';

export default function Home() {
  return <Background />;
}

Home.navigationOptions = ({ navigation }) => ({
  title: 'Meetups',
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
