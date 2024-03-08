import React from 'react';
import { shallow } from 'enzyme'; // Importing shallow from Enzyme
import AdditionalInfo from './AdditionalInfo'; // Assuming AdditionalInfo is the component being tested

describe('AdditionalInfo component', () => {
  it('should render additional info when user is an admin', () => {
    const user = {
      role: 'Admin',
      permissions: ['permission1', 'permission2'],
      adminId: 'admin123'
    };

    const wrapper = shallow(<AdditionalInfo user={user} />);

    expect(wrapper.find('.additional-info-container')).toHaveLength(1);
    expect(wrapper.text()).toContain('Permissions: permission1, permission2');
    expect(wrapper.text()).toContain('Admin ID: admin123');
  });

  it('should not render additional info when user is null', () => {
    const user = null;

    const wrapper = shallow(<AdditionalInfo user={user} />);

    expect(wrapper.find('.additional-info-container')).toHaveLength(0);
  });
});
