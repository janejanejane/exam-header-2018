import React from 'react';
import { shallow } from 'enzyme';
import Hamburger from './index';

describe('<Hamburger />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Hamburger />);
    expect(wrapper.find('div')).toHaveLength(3);
  })
})