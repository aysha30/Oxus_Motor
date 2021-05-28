import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'tachyons';

import green from '@material-ui/core/colors/green';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#555c70',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', 'Open Sans'].join(',')
  }


});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
