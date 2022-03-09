import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class TimerText extends Component {

  _renderTitle() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>ЦАГ</Text>
      </View>
    );
  }
  _renderTimers() {
    return (
      <View style={styles.timerWrapper}>
        <Text>00:00.95</Text>
        <Text>00:02.95</Text>
      </View>
    );
  }
  _renderButtons() {
    return (
      <View style={styles.buttonWrapper}>
        <Text>Lap</Text>
        <Text>Start</Text>
      </View>
    );
  }
}
