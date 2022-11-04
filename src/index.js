import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateProvider from './Context/StateProvider';
import { ThemeProvider } from 'styled-components';
const theme = {
  colors: {
    primary: '#487792',
    secondary: ' #37577A',

  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CookiesProvider> */}
    <StateProvider >
      <ThemeProvider theme={theme}>

        <App />
      </ThemeProvider>
    </StateProvider>
    {/* </CookiesProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
