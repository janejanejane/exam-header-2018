import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItems from './index';
import Hamburger from 'components/Hamburger';

describe('<MenuItems />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<MenuItems />);
    expect(wrapper).toHaveLength(1);
  });

  it('should have default states', () => {
    const defaultState = {
      navbarExpanded: false,
      menuList: [
        {
          name: 'Dashboard',
          link: '/dashboard'
        },
        {
          name: 'Projects',
          link: '/projects'
        },
        {
          name: 'Team',
          link: '/team'
        },
        {
          name: 'Company',
          link: '/company'
        }
      ]
    };

    const wrapper = shallow(<MenuItems />);
    expect(wrapper.state()).toMatchObject(defaultState);
  });

  it('should change navbarExpanded state value on click', () => {
    const wrapper = mount(<MenuItems />);
    wrapper.find(Hamburger).simulate('click');
    expect(wrapper.state('navbarExpanded')).toEqual(true);
  });
});