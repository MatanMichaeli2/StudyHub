import React from 'react';
import { shallow } from 'enzyme'; // Importing shallow from Enzyme
import ActivityLog from './ActivityLog'; // Assuming ActivityLog is the component being tested

describe('ActivityLog component', () => {
  it('should render a div with class \'activity-log-container\' when activities prop is passed', () => {
    const activities = ['activity1', 'activity2'];
    const wrapper = shallow(<ActivityLog activities={activities} />);
    expect(wrapper.find('.activity-log-container')).toHaveLength(1);
  });

  it('should render a div with class \'activity-log-container\' when activities prop is not passed', () => {
    const wrapper = shallow(<ActivityLog />);
    expect(wrapper.find('.activity-log-container')).toHaveLength(1);
  });
});
