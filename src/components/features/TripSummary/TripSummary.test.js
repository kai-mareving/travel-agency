import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary
      id='test'
      image='test.jpg'
      name='test name'
      cost='$23.000'
      days={2}
      tags={[]}
    />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct link', () => {
    const expectedLink = '/trip/testId';
    const expectedId = 'testId';
    const component = shallow(<TripSummary id={expectedId} tags={[]} />);
    expect(component.find('Link').prop('to')).toEqual(expectedLink);
  });
});