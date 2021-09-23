import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import { StrictMode } from 'react';
import { App } from './app';

const root = document.querySelector('#root');

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);
