import React from 'react';
import { shallow } from 'enzyme'; 
import AdminDisplay from './AdminDisplay'; 
import Header from './Header'; 
import UserDetails from './UserDetails'; 

describe('AdminDisplay component', () => {
  it('should render the header component', () => {
    const wrapper = shallow(<AdminDisplay />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render no users when no users are returned from the JSON file', () => {
    const wrapper = shallow(<AdminDisplay />);
    expect(wrapper.find(UserDetails)).toHaveLength(0);
  });
});

  