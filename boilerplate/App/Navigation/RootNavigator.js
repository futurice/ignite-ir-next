import React from 'react';
import { StackNavigator } from 'react-navigation';

import LaunchScreen from '../Containers/LaunchScreen';

/**
 * This is the root navigator of your project. It selects which screen will be rendered based
 * on the current navigation state.
 *
 * You may nest other navigators inside the root navigator if you want to create more complex
 * navigation patterns.
 */
export default RootNavigator = StackNavigator({
  Launch: { screen: LaunchScreen },
});
