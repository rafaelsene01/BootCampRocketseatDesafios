import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  flex-direction: column;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingBotton: 10,
  },
})`
  margin-top: 10px;
`;
