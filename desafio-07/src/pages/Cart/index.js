import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
import * as CartActions from '../../store/modules/cart/actions';

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
  RemoveButton,
} from './styles';

function Cart({ products, removeFromCart }) {
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
            <RemoveButton onPress={() => removeFromCart(item.id)}>
              <Icon name="remove-shopping-cart" size={24} color="#7159c1" />
            </RemoveButton>
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
const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
