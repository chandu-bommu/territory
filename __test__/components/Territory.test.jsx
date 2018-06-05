import React from 'react';
import Territory from '../../src/components/Territory.jsx';
import { shallow, mount } from 'enzyme';

describe('Territory', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Territory />);
    expect(wrapper).toMatchSnapshot();
  });
});
