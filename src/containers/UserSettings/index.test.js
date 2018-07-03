import React from 'react';
import { shallow, mount } from 'enzyme';
import UserSettings from './index';

describe('<UserSettings />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<UserSettings />);
    expect(wrapper).toHaveLength(1);
  });

  it('should have default states', () => {
    const defaultState = {
      settingsExpanded: false,
      settingsList: [
        {
          name: 'My Profile',
          link: '/profile'
        },
        {
          name: 'My Projects',
          link: '/projects',
          alert: 23
        },
        {
          name: 'Notifications',
          link: '/notifications',
          alert: 23
        },
        {
          name: 'Tasks',
          link: '/tasks',
          alert: 23
        },
        {
          name: 'Help',
          link: '/help'
        },
        {
          name: 'Logout',
          link: '/logout'
        }
      ]
    };

    const wrapper = shallow(<UserSettings />);
    expect(wrapper.state()).toMatchObject(defaultState);
  });
  
  it('should change settingsExpanded state value on click', () => {
    const wrapper = mount(<UserSettings />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('settingsExpanded')).toEqual(true);
  });
});