import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Display numberString="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
