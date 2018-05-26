import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Suggestions from './Suggestions';

it('renders correctly', () => {
  const mockWordSuggestions = ['tree', 'trie', 'troo'];
  const tree = renderer
    .create(<Suggestions words={mockWordSuggestions} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
