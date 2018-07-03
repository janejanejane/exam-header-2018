import React from 'react';
import { shallow, mount } from 'enzyme';
import Navigation from './index';

describe('<Navigation />', () => {
  it('should not render the list elements if there are no items passed', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.children()).toHaveLength(0);
  })

  it('should render the list elements passed as items', () => {
    const list = [
      {
        name: 'test1',
        link: '/test1'
      },
      {
        name: 'test2',
        link: '/test2'
      }
    ];
    const wrapper = mount(<Navigation items={list} />);
    expect(wrapper.children()).toHaveLength(list.length);
  })
})