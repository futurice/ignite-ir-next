import { combineReducers } from 'redux';
import configureStore from './CreateStore';

/* ------------- Import The Reducers ------------- */
import { reducer as navigation } from './NavigationRedux';
import { reducer as startup } from './StartupRedux';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    navigation,
    startup,
  });

  return configureStore(rootReducer);
};
