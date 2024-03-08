import React from 'react';
import { shallow } from 'enzyme'; 
import UserDetails from './UserDetails';

describe('UserDetails component', () => {
  it('should render user details when user object is provided', () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'admin',
      dateJoined: '2021-01-01',
      lastLogin: '2021-02-01'
    };

    const wrapper = shallow(<UserDetails user={user} />);

    expect(wrapper.find('h4').text()).toEqual('J');
    expect(wrapper.find('div').at(1).text()).toEqual('John Doe');
    expect(wrapper.find('div').at(2).text()).toEqual('Email: johndoe@example.com');
    expect(wrapper.find('div').at(3).text()).toEqual('Role: admin');
    expect(wrapper.find('div').at(4).text()).toEqual('Date Joined: 2021-01-01');
    expect(wrapper.find('div').at(5).text()).toEqual('Last Login: 2021-02-01');
  });

  it('should render default user details when user object is null or undefined', () => {
    const wrapper = shallow(<UserDetails user={null} />);

    expect(wrapper.find('h4').text()).toEqual('');
    expect(wrapper.find('div').at(1).text()).toEqual('');
    expect(wrapper.find('div').at(2).text()).toEqual('Email: ');
    expect(wrapper.find('div').at(3).text()).toEqual('Role: ');
    expect(wrapper.find('div').at(4).text()).toEqual('Date Joined: ');
    expect(wrapper.find('div').at(5).text()).toEqual('Last Login: ');
  });
});
