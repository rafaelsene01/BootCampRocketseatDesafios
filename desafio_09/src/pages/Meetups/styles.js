import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 30px;

    img {
      margin: 0 0 30px;
      width: 100%;
      height: 300px;
    }

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
    textarea#textarea {
      font-size: 18px;
      padding: 0;
      resize: none;
      height: none;
      background: none;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      padding: 0 20px;
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
    div#dt {
      width: 100%;
      button {
        height: 15px;
      }
    }
    div#LH {
      display: flex;
      align-items: center;
      opacity: 0.6;

      svg {
        margin-left: 20px;
      }

      p {
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 50px 0;

  strong {
    font-size: 32px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a:first-child {
      background-color: #4dbaf9 !important;
      margin-right: 10px;
    }

    a,
    button {
      padding: 0 20px;
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
`;
