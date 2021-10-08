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

const mockProps = {
  id: 'plum',
  name: 'Plum',
  values: [
    { id: 'hungarian', icon: 'h-square', name: 'Hungarian plum', price: 0},
    { id: 'polish', icon: 'h-square', name: 'Polish plum', price: 100},
  ],
  required: false,
  currentValue: 'hungarian',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: { currentValue: [mockProps.currentValue] },
  number: { currentValue: 1 },
  text: {},
  date: {},
};

// const testValue = mockProps.values[1].id;
// const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;

    //- create component here for every 'it' to use
    beforeEach(() => {
      component = shallow(
        <OrderOption
          type={type}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
      //// console.log(component.debug());
      //// console.log(subcomponent.debug());
    });

    /* type-spec tests */
    switch (type) {
      case 'dropdown': {
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          //- if !required component renders 1 empty option
          const optionBlank = select.find('option[value=""]').length;
          expect(optionBlank).toBe(1);
          //- all other options
          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          //- check if values are correct
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        break;
      }
    }
  });
}
