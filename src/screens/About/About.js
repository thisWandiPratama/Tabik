import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
  Button
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome5";

class About extends Component {

  render() {
    return (

      <View style={{flex:1}}>

        <View style={{backgroundColor:'#ffffff', padding: 20, paddingBottom: 5,flexDirection: 'row'}}>
          <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
        </View>


        <ScrollView>
          <View style={styles.wrapper}>
            <View style={{width: '50%', marginBottom: 50, alignSelf: 'center'}}>
              <Text style={[styles.titleFocus]}>Tabik</Text>
              <Text style={[styles.note]}>versi 1.0.0</Text>
            </View>

            <Text style={[styles.paragraph]}>     Tabik Ustadz adalah aplikasi</Text>
            <Text style={[styles.paragraph]}>     Scelerisque enim. Sed eget hendrerit purus, at consequat ante. Quisque eu velit dictum erat porta fringilla ac et enim. Duis pulvinar posuere sem quis posuere. </Text>
            <Text style={[styles.paragraph]}>     Suspendisse vel porttitor sem, sed vulputate mauris. Aliquam iaculis dui metus, vitae tristique sapien maximus pretium. Aliquam enim neque, dictum vitae efficitur vitae, bibendum nec elit. Nunc vitae dapibus libero.</Text>

            <View style={{marginTop: 30, flexDirection: 'row'}}>
              <Image
               style={styles.logo}
               source={require('../../../assets/asset/wahdah.jpeg')}
              />
            <View style={{flexDirection: 'column', marginLeft: 20}}>
                <View style={styles.wahdah}>
                  <View style={styles.icon}>
                    <Icon name='facebook-f' style={[styles.iconStyle]}/>
                  </View>
                  <Text style={[styles.mainText]}>Wahdah Islamiyah</Text>
                </View>

                <View style={styles.wahdah}>
                  <View style={styles.icon}>
                    <Icon name='instagram' style={[styles.iconStyle]}/>
                  </View>
                  <Text style={[styles.mainText]}>@wahdah_islamiyah</Text>
                </View>

                <View style={styles.wahdah}>
                  <View style={styles.icon}>
                    <Icon name='twitter' style={[styles.iconStyle]}/>
                  </View>
                  <Text style={[styles.mainText]}>@wahdahislamiyah</Text>
                </View>

                <View style={styles.wahdah}>
                  <View style={styles.icon}>
                    <Icon name='youtube' style={[styles.iconStyle]}/>
                  </View>
                  <Text style={[styles.mainText]}>Wahdah TV</Text>
              </View>
              </View>

            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
  titleFocus: {
    fontSize: 60,
    fontFamily: 'Pacifico',
    color: '#3896A3'
  },
  note: {
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: -15,
    color: '#3896A3'
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'justify',
    lineHeight: 20
  },

  back: {
    width: 30,
    height:40,
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  header: {
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    fontSize: 20,
  },
  wahdah: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center'
  },
  mainText: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 3
  },
  icon: {
    backgroundColor: '#3896A3',
    width: 20,
    height: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    color: '#fff'
  },
  logo: {
    width: 150,
    height: 120
  }
});

export default About;


// <Image
//   style={styles.logo}
//   source={require('../../../assets/images/icon.png')}
// />
