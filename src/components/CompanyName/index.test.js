import React from 'react';
import { shallow } from 'enzyme';
import CompanyName from './index';

describe('<CompanyName />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<CompanyName>TEST</CompanyName>);
    expect(wrapper.text()).toEqual('TEST');
  })
})