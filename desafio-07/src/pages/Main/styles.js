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
  flex-direction: column;
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;
export const ProductImg = styled.Image`
  min-height: 250px;
  min-width: 250px;
  border-radius: 5px;
`;

export const AddButton = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5px;
  padding: 5px;
`;
export const ProductAmount = styled.View`
  display: flex;
  flex-direction: row;
  background: ${darken(0.05, '#7159c1')};
  padding: 5px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

export const AddButtonText = styled.Text`
  color: white;
  flex: 1;
  text-align: center;
  background: #7159c1;
  padding: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  font-weight: bold;
`;

export const ProductAmountText = styled.Text`
  color: white;
  margin: 0 5px;
  font-weight: bold;
`;
