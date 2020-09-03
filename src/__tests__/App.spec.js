import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

describe('<App />', () => {
  describe('render', () => {

  it('match snapshot', () => {
      const {container} = render(<App />);
      expect(container.firstChild).toMatchSnapshot();
    });

  it('render a link', () => {
      const { getByText } = render(<App />);
      const linkElement = getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    })
  });
})
