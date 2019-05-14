import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('app component test', () => {
  it('renders the app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
