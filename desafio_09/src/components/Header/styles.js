import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #fff;
  }

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }

  aside {
    display: flex;
    align-items: center;

    a#dash {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    button {
      margin: 25px;
      width: 71px;
      height: 42px;
      border-radius: 4px;
      border: none;

      a {
        width: 31px;
        height: 18px;
        font-weight: 700;
      }
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
