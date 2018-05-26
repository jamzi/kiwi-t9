import React from 'react';
import ReactDOM from 'react-dom';
import Keypad from './Keypad';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const handleKeyPress = jest.fn();
  const handleShowOnlyRealWords = jest.fn();

  const tree = renderer
    .create(
      <Keypad
        onlyRealWords={true}
        handleKeyPress={handleKeyPress}
        handleShowOnlyRealWords={handleShowOnlyRealWords}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
