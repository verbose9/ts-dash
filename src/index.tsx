import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'halfmoon/css/halfmoon-variables.min.css';
import './styles/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
