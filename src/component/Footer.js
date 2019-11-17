import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get('window');

class Tanya extends Component {

  render() {
    const { navigation } = this.props;
    return (
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 40, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', paddingVertical: 22, borderTopWidth: 2, borderTopColor: 'rgba(212, 212, 212, 0.32)'}}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="home" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.back]}>
            <Icon name="play" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.back]}>
            <Icon name="question" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.back]}>
            <Icon name="users" color={'#3896A3'} size={22} />
          </TouchableOpacity>
        </View>
    );
  }

}
export default Tanya;

const styles = StyleSheet.create({
  divHeader: {
    height: 65,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor:'#ffffff',
  },
  header: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainHead: {
    fontSize: 21,
    color: '#3896A3',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'SourceSansPro',
  },
  back: {
    width: 30,
    height:'100%',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
});
