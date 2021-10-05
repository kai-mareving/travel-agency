import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary
      id='apple'
      image='apple.jpg'
      tags={[]}
    />);

    expect(component).toBeTruthy();
    // console.log(component.debug());
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
      tags={[]}
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
      tags={[]}
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
      tags={[]}
    />);

    const name = component.find('.title');
    const days = component.find('.details span').at(0);
    const cost = component.find('.details span').at(1);
    expect(name.text()).toEqual(expectedName);
    expect(days.text()).toEqual(`${expectedDays} days`);
    expect(cost.text()).toEqual(`from ${expectedCost}`);
  });

  it('should render array with correct tags', () => {
    const expectedTags = ['blueberry', 'cherry', 'banana', 'pineapple'];
    const component = shallow(<TripSummary
      id='fruitTags'
      image='fruits.png'
      tags={expectedTags}
    />);

    const tags = component.find('.tags');
    expect(tags.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(tags.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(tags.find('.tag').at(2).text()).toEqual(expectedTags[2]);
    expect(tags.find('.tag').at(3).text()).toEqual(expectedTags[3]);
  });
});
