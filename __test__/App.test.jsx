import React from 'react';
import App from '../src/App.jsx';
import { shallow, mount } from 'enzyme';

describe('App', () => {
	const wrapper = shallow(<App />);
	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});