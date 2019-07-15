import styled from 'styled-components';
import { darken } from 'polished';

export const Text = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Product = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  background: white;
  margin: 15px;
  padding: 5px;
  border-radius: 5px;
`;
export const ProductImg = styled.Image`
  min-height: 100px;
  min-width: 100px;
  border-radius: 5px;
`;

export const ProductAmount = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const ProductAmountText = styled.Text`
  margin: 0 15px;
  font-weight: bold;
  font-size: 16px;
`;

export const IncrementAmount = styled.TouchableOpacity``;

export const DecrementAmount = styled.TouchableOpacity``;

export const ProductView = styled.View`
  flex: 1;
`;

export const SubTotal = styled.Text`
  font-weight: bold;
  font-size: 22px;
  text-align: center;
`;

export const ProductTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
