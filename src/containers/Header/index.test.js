import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import CompanyName from 'components/CompanyName';
import MenuItems from 'containers/MenuItems';
import UserSettings from 'containers/UserSettings';

describe('<Header />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render <CompanyName />', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(CompanyName)).toHaveLength(1);
  })

  it('should render <MenuItems />', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(MenuItems)).toHaveLength(1);
  })

  it('should render <UserSettings />', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(UserSettings)).toHaveLength(1);
  })
})
