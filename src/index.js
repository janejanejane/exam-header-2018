import React from 'react';
import ReactDOM from 'react-dom';
import './theme/globalStyle.js';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
