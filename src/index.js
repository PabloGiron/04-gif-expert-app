import React from 'react';
import ReactDOM from 'react-dom';

import GifExpertApp from './GifExpertApp';

import './index.css';

// import reportWebVitals from './reportWebVitals';

const divRoot = document.querySelector('#root')

ReactDOM.render(
  // <App />,
  // document.getElementById('root')
  // <GifExpertApp />,divRoot
  <GifExpertApp />,document.getElementById('root')
);
