import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../components/App';

describe('<App />', () => {
  describe('render', () => {

  it('match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render a link', () => {
      const { getByText } = render(<App />);
      const linkElement = getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    })
  });
})
