import DateTimePicker from '@react-native-community/datetimepicker';

import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class date extends Component {
  render() {
    return (
      <View>
        <Text>date</Text>
        <RNDateTimePicker mode="time" />
      </View>
    )
  }
}