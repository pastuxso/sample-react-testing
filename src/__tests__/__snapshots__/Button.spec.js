import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';

describe('<Button />', () => {
  describe('render', () =>  {
    it('match snapshot', () => {
      const tree = renderer.create(<Button />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('match snapshot with text prop', () => {
      const tree = renderer.create(<Button text="Button text"/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('match snapshot with onClick prop', () => {
      const mockFn = jest.fn();
      const tree = renderer.create(<Button onClick={mockFn} text="text"/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('#onClick', () => {
    it ('the callback should be called', () => {
      const text = "Click me please!"
      const mockFn = jest.fn();

      render(<Button onClick={mockFn} text={text}/>);

      fireEvent.click(screen.getByText(text));

      expect(mockFn).toHaveBeenCalled();
    })
  });
});
