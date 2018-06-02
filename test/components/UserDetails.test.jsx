import React from 'react';
import { shallow } from 'enzyme';
import UserDetails from './UserDetails';

describe("UserDetails", () => {
  it("should render my component", () => {
    const wrapper = shallow(<UserDetails />);
  });
});