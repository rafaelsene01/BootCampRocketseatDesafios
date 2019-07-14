import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from '../../components/View/Container';
import {
  Footer,
  ContainerValor,
  TextTotal,
  TextValor,
  Carrinho,
} from '../../components/View/Footer';
import {
  Text,
  List,
  Product,
  ProductImg,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

import { formatPrice } from '../../util/format';

import api from '../../services/api';

export default class Main extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    console.tron.log(data);

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <List
          vertical
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Product key={item.id}>
              <ProductImg source={{ uri: item.image }} />
              <AddButton>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ProductAmountText>2</ProductAmountText>
                </ProductAmount>
                <AddButtonText>ADICIONAR</AddButtonText>
              </AddButton>
            </Product>
          )}
        />

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
