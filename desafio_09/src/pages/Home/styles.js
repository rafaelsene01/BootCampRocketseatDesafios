import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: calc(100% - 120px);

  div#page {
    margin: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    strong {
      font-size: 18px;
      color: #e5556e;
    }

    button {
      margin: 0 10px;
      background: none !important;
      border: 0;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 140px;

    strong {
      width: 223px;
      height: 36px;
      font-size: 32px;
      font-weight: 700;
    }

    a {
      width: 162px;
      background: #e5556e;
      border: 0;
      border-radius: 4px;
      height: 44px;
      font-weight: bold;
      font-size: 16px;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }

  ul {
    li {
      margin: 10px 0;
      padding: 30px;
      height: 62px;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.1);

      display: flex;
      justify-content: space-between;
      align-items: center;

      strong {
        width: 165px;
        height: 21px;
        font-size: 18px;
        font-weight: 700;
      }

      div#data {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          color: rgba(255, 255, 255, 0.6);
          font-size: 16px;
          margin-right: 25px;
        }

        > button {
          background: none !important;
          border: 0;
        }
      }
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)``;
export const ButtonPrev = styled.button.attrs(props => ({
  disabled: props.page <= 1,
}))`
  opacity: ${props => (props.page <= 1 ? 0.3 : 1)};
`;
export const ButtonNext = styled.button.attrs(props => ({
  disabled: props.meetUps < 9,
}))`
  opacity: ${props => (props.meetUps < 9 ? 0.3 : 1)};
`;

export const Meetup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: -webkit-fill-available;
`;
