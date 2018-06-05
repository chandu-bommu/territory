import React from 'react';
import UserDetails from '../../src/components/UserDetails.jsx';
import { shallow, mount } from 'enzyme';

describe('UserDetails', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UserDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
