import React, { Component, PropTypes } from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import RootNavigator from '../Navigation/RootNavigator';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';

// Styles
import styles from './Styles/RootContainerStyles';

const mapStateToProps = state => ({
  navigation: state.navigation,
  loading: state.startup.loading,
});

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
  dispatch,
});

@connect(mapStateToProps, mapDispatchToProps)
export default class RootContainer extends Component {

  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  render() {
    const { loading } = this.props;

    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        { loading
          ? <ActivityIndicator style={styles.spinner} />
          : <RootNavigator
            navigation={addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.navigation,
            })}
          />
        }
      </View>
    );
  }
}
