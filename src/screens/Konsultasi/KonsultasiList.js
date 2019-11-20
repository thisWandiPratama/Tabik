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
import Footer from "../../component/Footer";
import HTMLView from 'react-native-htmlview';
import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get('window');

class Konsultasi extends Component {

  state = {
    posts: [],
  }

  componentDidMount () {
    axios.get('https://wahdah.or.id/api/get_category_posts/?id=491')
      .then( (response) => {
        console.log(response.data.posts)
        this.setState({posts: response.data.posts});
      })
      .catch((error) => {
        console.log(error)
      });
  }


  renderKonsultasis = () => {
    return (
      <View style={[  styles.column, {paddingTop: 25, height: 530} ]}>
        <FlatList
          scrollEnabled
          showsVerticalScrollIndicator={false}
          style={{ overflow:'visible', height,}}
          data={this.state.posts}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => this.renderKonsultasi(item)}
        />
      </View>
    );
  }

  renderKonsultasi = item => {;
    return (

      <TouchableOpacity style={{marginBottom: 25}} activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Konsultasi', { konsultasi: item })}>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgb(227, 227, 227)'}}>
          <Image source={{uri: item.thumbnail }} style={{height: 85, width: 110}}/>
          <View style={{paddingTop: 4, paddingLeft: 20,  paddingBottom: 10, width: 200, justifyContent: 'space-between'}}>
            <HTMLView value={item.title} stylesheet={styles.title}/>
            <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 13}}>
        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> Konsultasi Agama </Text>
          </View>
        </View>

        <ScrollView  style={{height: 500, paddingHorizontal: 13}}>
          {this.renderKonsultasis()}
        </ScrollView>

        <View style={{ flex:1, bottom: 0, height: 40, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', borderTopWidth: 2, borderTopColor: 'rgba(212, 212, 212, 0.32)'}}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="home" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.navigate('WahdahTv')}>
            <Icon name="play" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.navigate('Tanya')}>
            <Icon name="question" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.navigate('Dewan')}>
            <Icon name="users" color={'#3896A3'} size={22} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Konsultasi;

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
