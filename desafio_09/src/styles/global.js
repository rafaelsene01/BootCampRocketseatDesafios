import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html, body, #root {
    height: 100%;
    min-width: 600px;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
    color: #fff;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #ffffff;
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    background-color: #e5556e !important;
  }

  button#voltar {
    position: absolute;
    top: 0;
    right: 0;
    margin: 25px 55px;
    width: 71px;
    height: 42px;
    border-radius: 4px;
    border: none;

    a{
      width: 31px;
      height: 18px;
      font-weight: 700;
    }
  }
`;
