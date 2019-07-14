import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 60px;
  background: black;
  padding: 10px;
`;
export const Logo = styled.TouchableOpacity``;

export const LogoImg = styled.Image.attrs({
  source: logo,
})`
  width: 200px;
  height: 26px;
`;

export const BasketContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  right: -5px;
  top: -5px;
  color: white;
  min-width: 15px;
  min-height: 15px;
  background: #7159c1;
  padding: 2px;
  border-radius: 10px;
`;
