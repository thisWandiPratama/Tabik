import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  SectionList,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get('window');

class Pengurus extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>

        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> Susunan Pengurus</Text>
          </View>
        </View>

        <View style={[styles.container]}>
          <ImageBackground
              style={[styles.divPengurus]}
              source={ require('../../../assets/background/pengurus.jpg') }
            >
              <Icon name="users" color={'#fff'} size={40} />
              <Text style={styles.title}>SUSUNAN PENGURUS</Text>
            </ImageBackground>

        </View>

      </View>
    );
  }

}
export default Pengurus;

const styles = StyleSheet.create({
  back: {
    width: 30,
    height:'100%',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
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
    fontSize: 23,
    color: '#3896A3',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'SourceSansPro',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20
  },
  divPengurus: {
    width: 320,
    height: 161,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(70, 192, 185, 0.67)',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    width: '90%',
    fontSize: 14,
    marginTop: 17,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  mainText: {
    fontSize: 14,
    textAlign: 'justify',
    marginTop: 20,
  },
});
