import React from 'react';

import { Container } from '../../components/View/Container';
import {
  Footer,
  ContainerValor,
  TextTotal,
  TextValor,
  Carrinho,
} from '../../components/View/Footer';
import { Text } from './styles';

export default class Main extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Text />

        <Footer>
          <ContainerValor>
            <TextTotal>total</TextTotal>
            <TextValor>R$ 1.595,99</TextValor>
          </ContainerValor>
          <Carrinho>
            <Text>Shopping Cart</Text>
          </Carrinho>
        </Footer>
      </Container>
    );
  }
}
