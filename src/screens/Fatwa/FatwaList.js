import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import axios from 'axios';
import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get('window');

class Fatwa extends Component {

  state = {
    posts: [],
  }

  componentDidMount () {
    axios.get('https://wahdah.or.id/api/get_category_posts/?id=317')
      .then( (response) => {
        this.setState({posts: response.data.posts});
      })
      .catch((error) => {
        console.log(error)
      });
  }


  renderFatwas = () => {
    return (
      <View style={[ styles.column, styles.datahome, {paddingTop: 25, height: 580}]}>
        <FlatList
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          style={{ overflow:'visible', height,}}
          data={this.state.posts}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => this.renderFatwa(item)}
        />
      </View>
    );
  }

  renderFatwa = item => {;
    return (

      <TouchableOpacity style={{marginBottom: 25}} activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Fatwa', { fatwa: item })}>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgb(227, 227, 227)'}}>
          <Image source={{uri: item.thumbnail }} style={{height: 85, width: 110}}/>
          <View style={{paddingTop: 4, paddingLeft: 20,  paddingBottom: 10, width: 200, justifyContent: 'space-between'}}>
            <Text style={{fontSize: 13, fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> Kumpulan Fatwa </Text>
          </View>
        </View>

        <ScrollView>
          {this.renderFatwas()}
        </ScrollView>

      </View>
    );
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

});
