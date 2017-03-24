import { combineReducers } from 'redux';
import configureStore from './CreateStore';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    navigation: require('./NavigationRedux').reducer,
    startup: require('./StartupRedux').reducer,
  });

  return configureStore(rootReducer);
};
