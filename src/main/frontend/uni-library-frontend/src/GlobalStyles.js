import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
    color: #343a40;
    margin: 0;
    padding: 0;
    line-height: 1.6;

    /* Add background image */
    background-image: url('/BookPicture/background.jpeg');
    background-size: cover; /* Adjust as needed */
    background-repeat: no-repeat; /* Adjust as needed */
    background-attachment: fixed; /* Optional: for fixed background */
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: #212529;
  }

  button {
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  input[type="text"],
  input[type="file"] {
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
`;

export default GlobalStyle;