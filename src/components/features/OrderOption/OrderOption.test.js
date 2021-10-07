import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption
      type='icons'
    />);

    expect(component).toBeTruthy();
    //// console.log(component.debug());
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

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    //? create component here for every 'it' to use
    beforeEach(() => {
      component = shallow(
        <OrderOption
          type={type}
        />
      );
    });

    /* common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
      console.log(component.debug());
    });

    /* type-spec tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        break;
      }
    }
  });
}
