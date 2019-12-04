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
import Icon from "react-native-vector-icons/FontAwesome5";
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

class WahdahTv extends Component {

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
            <Title style={{  fontSize: 21, color: '#3896A3', fontWeight: 'bold', fontFamily: 'SourceSansPro',}}>WahdahTv</Title>
          </Body>
        </Header>
        <Content>
          <WebView
            source={{ uri: 'https://wahdah.or.id/video/' }}
          />
        </Content>
        <Footer style={{height: 40}}>
            <FooterTab style={{backgroundColor:'#fff', height: 40, borderTopWidth: 1, borderTopColor: 'rgba(238, 238, 238, 0.64)'}}>
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

export default WahdahTv;

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
