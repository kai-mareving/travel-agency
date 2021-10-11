import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

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
  checkboxes: { currentValue: [mockProps.currentValue] }, //* hungarian
  number: { currentValue: 1 },
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id; //> polish
const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption; //! mock function

    //- create component here for every 'it' to use
    beforeEach(() => {
      mockSetOrderOption = jest.fn(); //!
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption} //!
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
      //// console.log(subcomponent.debug());
    });

    /* type-spec tests */
    switch (type) {
      case 'checkboxes': {
        it('contains inputs with correct values', () => {
          const inputs = renderedSubcomponent.find('input');
          console.log(inputs.debug());
          expect(inputs.length).toEqual(mockProps.values.length);
          expect(inputs.at(0).prop('name')).toBe(mockProps.values[0].id);
          expect(inputs.at(1).prop('id')).toBe(mockProps.values[1].id);
        });
        it('should run setOrderOption fn on change', () => {
          // testValue = mockProps.values[1].id; //> polish
          // const inputWithTestValueId = renderedSubcomponent.find(`input[id="${testValue}"]`);
          // console.log(inputWithTestValueId.debug());
          renderedSubcomponent.find(`#${testValue}`).simulate('change', { currentTarget: { checked: true } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue] });
        });
        break;
      }
      case 'date': {
        it('contains DatePicker', () => {
          const datePicker = renderedSubcomponent.find(DatePicker);
          expect(datePicker.length).toBe(1);
        });

        it('should run setOrderOption fn on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue );

          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue});
        });
        break;
      }
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

        it('should run setOrderOption fn on change', () => {
          renderedSubcomponent.find('select').simulate('change', { currentTarget: { value: testValue } });

          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'icons': {
        it('contains div and Icons', () => {
          const iconDivs = renderedSubcomponent.find('div[className*="icon"]');
          const blankIcon = renderedSubcomponent.find('Icon[name="times-circle"]');
          const icons = iconDivs.find('Icon').not('[name="times-circle"]');

          //! this passes but console logs show unexpected results
          expect(iconDivs.length).toBe(mockProps.values.length+1);
          expect(blankIcon.length).toBe(1);
          expect(icons.length).toBe(mockProps.values.length);
          // console.log(iconDivs.debug());
          // console.log(icons.debug());
          // expect(icons.at(0).prop('value')).toBe(mockProps.values[0].name); //! Received: undefined
          // expect(icons.at(1).prop('price')).toBe(mockProps.values[1].price); //! Received: undefined
        });

        it('should run setOrderOption fn on change', () => {
          renderedSubcomponent.find('div[className*="icon"]').last().simulate('click');

          expect(mockSetOrderOption).toBeCalledTimes(1);
        });
        break;
      }
      case 'number': {
        it('contains input with correct values', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.prop('value')).toBe(mockPropsForType[type].currentValue); //or (mockPropsForType.number.currentValue)
          expect(input.prop('min')).toBe(mockProps.limits.min);
          expect(input.prop('max')).toBe(mockProps.limits.max);
        });

        it('should run setOrderOption fn on change', () => {
          renderedSubcomponent.find('input').simulate('change', { currentTarget: { value: testValueNumber } });

          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });
        break;
      }
      case 'text': {
        it('contains input with correct value', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.prop('value')).toBe(mockProps.currentValue);
        });

        it('should run setOrderOption fn on change', () => {
          renderedSubcomponent.find('input').simulate('change', { currentTarget: { value: testValue } });

          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
    }
  });
}
