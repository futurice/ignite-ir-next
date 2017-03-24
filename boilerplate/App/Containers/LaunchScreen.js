import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';

export default class LaunchScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <Text>
          {"This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite."}
        </Text>
        <Button
          onPress={() => navigate('Launch', {
            // Generate random ID param for screen to avoid idempotency check.
            // This only needs to be done if a screen wants to navigate to itself...
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
          })}
          title="Navigate to self"
        />
      </ScrollView>
    );
  }
}
