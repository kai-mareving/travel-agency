import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary
      id='apple'
      image='apple.jpg'
      name='Red apple'
      cost='$23.000'
      days={3}
      // tags={[]}
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
    const component = shallow(<TripSummary
      id={expectedId}
      image='apple.jpg'
      name='Red apple'
      cost='$23.000'
      days={3}
    />);

    expect(component.find('Link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct image', () => {
    const expectedSrc = 'apple.jpg';
    const expectedAlt = 'Red apple';
    const component = shallow(<TripSummary
      id='apple'
      image={expectedSrc}
      name={expectedAlt}
      cost='$23.000'
      days={3}
    />);

    const image = component.find('img');

    expect(image.prop('src')).toEqual(expectedSrc);
    expect(image.prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, days, cost', () => {
    const expectedName = 'Green Apple';
    const expectedDays = 5;
    const expectedCost = '$35.000';
    const component = shallow(<TripSummary
      id='apple'
      image='apple.jpg'
      name={expectedName}
      cost={expectedCost}
      days={expectedDays}
    />);
    const name = component.find('.title');
    const days = component.find('.details span').at(0);
    const cost = component.find('.details span').at(1);
    expect(name.text()).toEqual(expectedName);
    expect(days.text()).toEqual(`${expectedDays} days`);
    expect(cost.text()).toEqual(`from ${expectedCost}`);
  });
});