import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from '../../components/View/Container';
import {
  Footer,
  ContainerValor,
  TextTotal,
  TextValor,
  Carrinho,
  FooterButtonText,
} from '../../components/View/Footer';
import { formatPrice } from '../../util/format';

import {
  List,
  Product,
  ProductImg,
  ProductAmount,
  ProductAmountText,
  IncrementAmount,
  DecrementAmount,
  ProductView,
  SubTotal,
  ProductTitle,
} from './styles';

export default class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        priceFormatted: 'R$ 179,90',
      },
      {
        id: 2,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        priceFormatted: 'R$ 179,90',
      },
    ],
  };

  async componentDidMount() {
    const { products } = this.state;

    const Nproducts = await products.map(product => ({
      ...product,
      amount: 1,
    }));
    const Nproducts2 = await Nproducts.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }));

    this.setState({ products: Nproducts2 });
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
              <ProductView>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductAmount>
                  <DecrementAmount>
                    <Icon
                      name="remove-circle-outline"
                      color="#7159c1"
                      size={24}
                    />
                  </DecrementAmount>
                  <ProductAmountText>{item.amount}</ProductAmountText>
                  <IncrementAmount>
                    <Icon name="add-circle-outline" color="#7159c1" size={24} />
                  </IncrementAmount>
                </ProductAmount>
                <SubTotal>{item.subtotal}</SubTotal>
              </ProductView>
            </Product>
          )}
        />
        <Footer>
          <ContainerValor>
            <TextTotal>total</TextTotal>
            <TextValor>R$ 1.595,99</TextValor>
          </ContainerValor>
          <Carrinho>
            <FooterButtonText>Buy Itens</FooterButtonText>
          </Carrinho>
        </Footer>
      </Container>
    );
  }
}
