import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, LogoImg, BasketContainer, ItemCount } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Logo onPress={() => navigation.navigate('Main')}>
        <LogoImg />
      </Logo>
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={30} />
        <ItemCount>{cartSize}</ItemCount>
      </BasketContainer>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
