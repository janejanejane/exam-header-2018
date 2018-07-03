import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'containers/Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})