import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  ImageBackground
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get('window');

class Profil extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>

        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> Profil Singkat</Text>
          </View>
        </View>

        <View style={[styles.container]}>
          <ImageBackground
              style={[styles.divProfil, styles.tengah]}
              source={ require('../../../assets/background/profil.jpg') }
            >
              <Icon name="user-alt" color={'#fff'} size={50} />
              <Text style={styles.title}>PROFIL SINGKAT</Text>
            </ImageBackground>

            <View style={{padding: 25}}>
              <Text style={styles.mainText}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nunc eget erat ornare rutrum vitae ac leo. Nulla vitae congue dolor, ut viverra massa. Fusce imperdiet auctor ipsum quis iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam eu nunc tincidunt, finibus elit eget, </Text>
              <Text style={styles.mainText}>  Scelerisque enim. Sed eget hendrerit purus, at consequat ante. Quisque eu velit dictum erat porta fringilla ac et enim. Duis pulvinar posuere sem quis posuere. </Text>
              <Text style={styles.mainText}>  Suspendisse vel porttitor sem, sed vulputate mauris. Aliquam iaculis dui metus, vitae tristique sapien maximus pretium. Aliquam enim neque, dictum vitae efficitur vitae, bibendum nec elit. Nunc vitae dapibus libero.</Text>
            </View>
        </View>

      </View>
    );
  }

}
export default Profil;

const styles = StyleSheet.create({
  tengah: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  divProfil: {
    width: 320,
    height: 161,
    backgroundColor: 'rgba(70, 192, 185, 0.67)',
    borderRadius: 10,
  },
  title: {
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
