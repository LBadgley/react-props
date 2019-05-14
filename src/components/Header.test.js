import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('header component', () => {
  it('renders a header with a doggo in it', () => {
    const wrapper = shallow(<Dog name="Ruby" age="2" weight="7.5 lbs"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
