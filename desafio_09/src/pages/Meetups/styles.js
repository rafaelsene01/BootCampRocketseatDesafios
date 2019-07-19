import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 30px;

    input,
    textarea {
      width: 100%;
      height: 50px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      padding: 20px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      height: 200px;
      resize: none;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      width: 162px;
      margin: 10px 0 0;
      background: #f64c75;
      border: 0;
      border-radius: 4px;
      height: 44px;
      color: #fff;
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
`;
