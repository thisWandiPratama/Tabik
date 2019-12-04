import React, { Component } from 'react';
import {
  Left,
  Body,
  Right,
  Title,
  Footer,
  Header,
  Button,
  Content,
  Container,
  FooterTab,
} from 'native-base';

import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import axios from 'axios';
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
        this.setState({posts: response.data.posts});
      })
      .catch((error) => {
        console.log(error)
      });
  }

  renderKonsultasis = () => {
    return (
      <View style={[ styles.column, {paddingTop: 15, height: 550}]}>
        <FlatList
          scrollEnabled
          maxToRenderPerBatch={3}
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

      <TouchableOpacity style={{marginBottom: 5}} activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Konsultasi', { konsultasi: item })}>
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
      <Container>
        <Header  style={{backgroundColor:'#fff'}}>
          <Left>
            <Button style={{backgroundColor:'#fff'}}>
              <Icon name="arrow-left" color={'#3896A3'} size={22} />
            </Button>
          </Left>
          <Body>
            <Title style={{  fontSize: 21, color: '#3896A3', fontWeight: 'bold', fontFamily: 'SourceSansPro',}}>Kumpulan Konsultasi</Title>
          </Body>
        </Header>
        <Content>
          {this.renderKonsultasis()}
        </Content>
        <Footer style={{height: 45}}>
            <FooterTab style={{backgroundColor:'#fff', height: 45, borderTopWidth: 2, borderTopColor: 'rgba(212, 212, 212, 0.32)'}}>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" color={'#3896A3'} size={22} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('WahdahTv')}>
              <Icon name="play" color={'#3896A3'} size={22} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Tanya')}>
              <Icon name="question" color={'#3896A3'} size={22} />
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Dewan')}>
              <Icon name="users" color={'#3896A3'} size={22} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
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
  title: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  back: {
    width: 30,
    height:'100%',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },

});
