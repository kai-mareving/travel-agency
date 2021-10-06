import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption
      type='icons'
    />);

    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<OrderOption />)).toThrow();
  });

  it('should return empty object if called without required type prop', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct title', () => {
    const expectedName = 'Sweet Cherry';
    const component = shallow(<OrderOption
      type='dropdown'
      name={expectedName}
    />);
    const title = component.find('.title');
    expect(title.text()).toEqual(expectedName);
  });
});