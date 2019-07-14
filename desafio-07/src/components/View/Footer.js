import styled from 'styled-components/native';

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-top-width: 2px;
  border-top-color: black;
`;

export const ContainerValor = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

export const TextTotal = styled.Text`
  color: white;
  font-size: 16px;
`;

export const TextValor = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: bold;
  margin-left: 5px;
`;

export const Carrinho = styled.TouchableOpacity`
  background: #7159c1;
  font-size: 30px;
  border-radius: 6px;
  padding: 10px;
`;
