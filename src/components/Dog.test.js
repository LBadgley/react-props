import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog component', () => {
  it('renders a doggo', () => {
    const wrapper = shallow(<Dog name="Ruby" age="2" weight="7.5 lbs"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
