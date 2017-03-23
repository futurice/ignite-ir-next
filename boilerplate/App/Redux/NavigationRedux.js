import Immutable from 'seamless-immutable'
import { NavigationActions } from 'react-navigation';
import includes from 'lodash/includes';

import RootNavigator from '../Navigation/RootNavigator';

// Attempt at making react-navigation idempotent, TODO: back button
// https://github.com/react-community/react-navigation/issues/135#issuecomment-276684675
function paramsEqual(params1: ?NavigationParams, params2: ?NavigationParams) {
  if (params1 == params2) {
    return true
  }

  if (!params1 || !params2 || Object.keys(params1).length != Object.keys(params2).length) {
    return false
  }

  for (let [key, value] of Object.entries(params1)) {
    if (value !== params2[key]) {
      return false
    }
  }

  return true
}

export const reducer = (state, action) => {
  // Initial state
  if (!state) {
    return Immutable(RootNavigator.router.getStateForAction(action, state));
  }

  // Somewhat hacky way of ensuring we don't push the same route twice (quick double tap of button etc.)
  if (includes(NavigationActions, action.type)) {
    const currentRoute = state.routes[state.index];

    // TODO: Is this correct for nested navigators (action != null)?
    if (currentRoute.routeName == action.routeName && paramsEqual(currentRoute.params, action.params)) {
      return state;
    }

    return Immutable(RootNavigator.router.getStateForAction(action, state.asMutable({deep: true})));
  }

  return state;
};
