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
import {
  List,
  Product,
  ProductImg,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
  ProductTitle,
  ProductPrice,
} from './styles';

import { formatPrice } from '../../util/format';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

class Main extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

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
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{formatPrice(item.price)}</ProductPrice>
              <AddButton onPress={() => this.handleAddProduct(item)}>
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
            <FooterButtonText>Shopping Cart</FooterButtonText>
          </Carrinho>
        </Footer>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Main);
