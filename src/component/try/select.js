import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  SafeAreaView
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

class Jadwal extends Component {

  constructor(props) {
    super(props);this.state = {
      location: '',
    };
  }


  render() {
    return (
      <View>
        <RNPickerSelect
            onValueChange={(value) => this.setState({ location: value })}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />

        <View>
          <Text>{this.state.location}</Text>
        </View>
      </View>
    );
  }
}
export default Jadwal;
