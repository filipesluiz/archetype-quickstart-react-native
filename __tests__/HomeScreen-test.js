/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeScreen } from '../src/scenes/Home/HomeScreen';
it('renders correctly', async () => {
  const component = await shallow(<HomeScreen />);
  expect(component).toMatchSnapshot();
});

it('renders correctly2', async () => {
  const component = await mount(<HomeScreen fetchData={() => {}} />);
  expect(component).toMatchSnapshot();
});
