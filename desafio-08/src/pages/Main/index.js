import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

export default function Main({ navigation }) {
  const [products, setProducts] = useState([]);
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalValor, product) => {
        return totalValor + product.price * product.amount;
      }, 0)
    )
  );
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  });

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <List
        vertical
        data={products}
        extraData={amount}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product key={item.id}>
            <ProductImg source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{formatPrice(item.price)}</ProductPrice>
            <AddButton onPress={() => handleAddProduct(item.id)}>
              <ProductAmount>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
              </ProductAmount>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </Product>
        )}
      />

      <Footer>
        <ContainerValor>
          <TextTotal>total</TextTotal>
          <TextValor>{total}</TextValor>
        </ContainerValor>
        <Carrinho onPress={() => navigation.navigate('Cart')}>
          <FooterButtonText>Shopping Cart</FooterButtonText>
        </Carrinho>
      </Footer>
    </Container>
  );
}
