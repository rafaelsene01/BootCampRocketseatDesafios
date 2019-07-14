import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, LogoImg, BasketContainer, ItemCount } from './styles';

export default function Header({ navigation }) {
  console.tron.log(navigation);
  return (
    <Container>
      <Logo onPress={() => navigation.navigate('Main')}>
        <LogoImg />
      </Logo>
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={30} />
        <ItemCount>10</ItemCount>
      </BasketContainer>
    </Container>
  );
}
