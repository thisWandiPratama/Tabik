import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Animated,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import HTMLView from 'react-native-htmlview';
import Icon from "react-native-vector-icons/FontAwesome5";


const { width, height } = Dimensions.get('window');


// static navigationOptions = ({ navigation }) => {
//   return {
//     header: (
//       <View style={[styles.flex, styles.row, styles.header]}>
//         <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
//           <Icon name="arrow-left" color={'#3896A3'} size={22} />
//         </TouchableOpacity>
//       </View>
//     ),
//     headerTransparent: true,
//   }
// }

class Fatwa extends Component {

  render() {
    const { navigation } = this.props;
    const fatwa = navigation.getParam('fatwa');

    {fatwa.title}
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>

        <ScrollView style={styles.flex}>
          <View style={[styles.flex, styles.content]}>
            <View style={{backgroundColor: 'red', width, height: 300}}>
              <Image
                source={{uri: fatwa.thumbnail }}
                resizeMode='cover'
                style={{ width: '100%', height: '100%'}}
              />
            </View>
            <View style={[styles.flex, styles.contentHeader]}>
              <Text style={styles.title}>{fatwa.title}</Text>
              <View style={[styles.row,{ marginVertical: 36 / 2 }
              ]}>
                <Text style={{ marginLeft: 8, color: '#BCCCD4', marginTop: -10}}>
                   {fatwa.date}
                </Text>
              </View>
              <View>
                <HTMLView
                  value={fatwa.content}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Fatwa;


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
    fontSize: 23,
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

  contentHeader: {
    backgroundColor: 'transparent',
    padding: 25,
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: -13,
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 15,
    lineHeight: 30,
    color: 'rgb(116, 117, 116)',
    textAlign: 'justify',
  }


});
