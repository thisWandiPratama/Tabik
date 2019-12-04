import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Animated,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';

import axios from 'axios';
import styles from './style';
import HTMLView from 'react-native-htmlview';
import { WebView } from 'react-native-webview';
import Icon from "react-native-vector-icons/MaterialIcons";
import Geolocation from '@react-native-community/geolocation';

const { width, height } = Dimensions.get('window');

class Home extends Component {

  constructor(props) {
    super(props);

    let d = new Date();
    var today = d.getFullYear()+'-'+(d.getMonth() + 1)+'-'+d.getDate();

    let date = new Date();
    var zone = date.getTimezoneOffset() / -60;

    this.state = {
      selectedStartDate: today.toString(),
      jadwal: false,
      today: '',
      ini: '2019-11-20',
      hari: "",
      tgl: "",
      jamSekarang: "",
      posts: [],
      posts2: [],
      latitude: '-5.147',//Initial Latitude
      longitude: '119.432',//Initial Longitude
      zoneTime: zone.toString(),
    };
  }

  componentDidMount () {
    var that =this;
      async function requestLocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
              'title': 'Location Access Required',
              'message': 'This App needs to Access your location'
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            that.callLocation(that);
          } else {
            alert("Permission Denied");
          }
        } catch (err) {
          alert("err",err);
          console.warn(err)
        }
      }
      requestLocationPermission();
    setInterval(function(){
      var jam = new Date();
      var min = jam.getMinutes();
      if (min < 10) {
          min = "0" + min;
      }
      var hour = jam.getHours();
      if (hour < 10) {
          hour = "0" + hour;
      }
      this.setState({ jamSekarang: hour + ':' + min });
    }.bind(this), 1000);

    this.getJadwal();
    this.getWaktu();
    this.getFatwa();
    this.getKonsultasi();
  };

  getJadwal() {
     let formdata = new FormData();
     formdata.append('act', 'TANGGALM');
     formdata.append('data', this.state.selectedStartDate);
     formdata.append('latitude', this.state.latitude);
     formdata.append('longitude', this.state.longitude);
     formdata.append('timezone', this.state.zoneTime);
     formdata.append('wilayah', 'Makassar');

      axios({
        url: 'http://krf.simakad.id/wss/',
        method: 'post',
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res.response.data.info)
        // const jadwals = res.data;
        // this.setState({ jadwals });
      })
      .catch(e => {
        // console.log(e.response.data.data.jadwal)
        this.setState({jadwal: e.response.data.data.jadwal});
      })
  };
  getWaktu() {
    var days = [
      "Ahad",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum'at",
      "Sabtu",
    ];
    this.setState({hari: days[new Date().getDay()]});

    var monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    var t = new Date();
    this.setState({tgl: t.getDate() + ' ' + monthNames[t.getMonth()] + ' ' + t.getFullYear()});
    //
  }
  getFatwa() {
    axios.get('https://wahdah.or.id/api/get_category_posts/?id=317')
      .then( (response) => {
        this.setState({posts: response.data.posts});
      })
      .catch((error) => {
        console.log(error)
      });
  }
  getKonsultasi () {
    axios.get('https://wahdah.or.id/api/get_category_posts/?id=491')
      .then( (response) => {
        console.log(response.data.posts)
        this.setState({posts2: response.data.posts});
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
          data={this.state.posts2}
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

  renderFatwas = () => {
    return (
      <View style={[ styles.column, {paddingTop: 25, height: 530}]}>
        <FlatList
          scrollEnabled
          maxToRenderPerBatch={3}
          showsVerticalScrollIndicator={false}
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
            <HTMLView value={item.title} stylesheet={styles.title}/>
            <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  callLocation(that){
     Geolocation.getCurrentPosition(
       //Will give you the current location
        (position) => {
           const currentLongitude = JSON.stringify(position.coords.longitude);
           //getting the Longitude from the location json
           const currentLatitude = JSON.stringify(position.coords.latitude);
           //getting the Latitude from the location json
           that.setState({ longitude:currentLongitude });
           //Setting state Longitude to re re-render the Longitude Text
           that.setState({ latitude:currentLatitude });
           //Setting state Latitude to re re-render the Longitude Text
        },
        (error) => alert('Sedang mencari lokasi'),
        { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
     );
     that.watchID = Geolocation.watchPosition((position) => {
       //Will give you the location on location change
         console.log(position);
         const currentLongitude = JSON.stringify(position.coords.longitude);
         //getting the Longitude from the location json
         const currentLatitude = JSON.stringify(position.coords.latitude);
         //getting the Latitude from the location json
        that.setState({ longitude:currentLongitude });
        //Setting state Longitude to re re-render the Longitude Text
        that.setState({ latitude:currentLatitude });
        //Setting state Latitude to re re-render the Longitude Text
        this.getWaktu();
     });
  }
  componentWillUnmount = () => {
     Geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView scrollEnable showsVerticalScrollIndicator={false} paggingEnable style={{flex: 1, backgroundColor: '#fff'}}>

        <View style={{height: 310, width}}>
          <ImageBackground
            style={[styles.bgimg]}
            source={ require('../../../assets/headback.png') }
          >
            <View style={[styles.header]}>
              <Text style={[styles.name]}>Tabik Ustadz</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('About')} style={{padding: 10}}>
                <Icon name="info-outline" color="#fff" size={28} />
              </TouchableOpacity>
            </View>

            <View style={[styles.justify2, styles.itemc]}>
              <Text style={[styles.date]}>Makassar, {this.state.hari}, {this.state.tgl}</Text>
              <Text style={[styles.fokus]}>{this.state.jamSekarang}</Text>
              <View style={[styles.row, {alignItems: 'center'}]}>
                <Text style={[styles.note]}>Shalat Tepat Waktu</Text>
                <TouchableOpacity style={[styles.details]} onPress={() => this.props.navigation.navigate('Jadwal')}>
                  <Text style={{color: '#fff', fontSize: 10}}>Lihat Jadwal</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.justify2, styles.itemc, {marginTop: 18}]}>
              <Text style={{justifyContent: 'center', color: '#fff', textDecorationLine: 'underline'}}>Makassar, Indonesia</Text>
            </View>

            <TouchableOpacity
              style={[styles.justify2, styles.itemc, styles.row, styles.jam]}
              onPress={() => this.props.navigation.navigate('Jadwal')}
              >
              <View style={[styles.divjadwal]}>
                <Text style={[styles.jadwal]}>Subuh</Text>
                <Text style={[styles.jadwal]}>{this.state.jadwal.subuh}</Text>
              </View>
              <View style={[styles.divjadwal]}>
                <Text style={[styles.jadwal]}>Dhuhur</Text>
                <Text style={[styles.jadwal]}>{this.state.jadwal.zuhur}</Text>
              </View>
              <View style={[styles.divjadwal]}>
                <Text style={[styles.jadwal]}>Ashar</Text>
                <Text style={[styles.jadwal]}>{this.state.jadwal.asar}</Text>
              </View>
              <View style={[styles.divjadwal]}>
                <Text style={[styles.jadwal]}>Maghrib</Text>
                <Text style={[styles.jadwal]}>{this.state.jadwal.magrib}</Text>
              </View>
              <View style={[styles.divjadwal,{borderRightWidth: 0}]}>
                <Text style={[styles.jadwal]}>Isya</Text>
                <Text style={[styles.jadwal]}>{this.state.jadwal.isya}</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={[styles.row, styles.justify1, styles.divmenu1 ]}>
          <TouchableOpacity style={{width: '45%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('FatwaList')}>
            <ImageBackground
                style={[styles.divArtik, styles.justify2]}
                source={ require('../../../assets/background/fatwa.jpeg') }
              >
                <Text style={styles.fokusTitle}>FATWA</Text>
              </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '45%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('KonsultasiList')}>
            <ImageBackground
                style={[styles.divArtik, styles.justify2]}
                source={ require('../../../assets/background/konsul.jpeg') }
              >
                <Text style={styles.fokusTitle}>KONSULTASI</Text>
              </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 10}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{alignSelf: 'flex-start',marginLeft: 15, fontSize: 14, fontWeight: 'bold'}}>Fitur Lainnya</Text>
            <View style={[styles.row, styles.justify1, {width: '90%', marginTop: 18}]}>
              <TouchableOpacity style={{width: '25%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('WahdahTv')}>
                <View style={[styles.divmenu2, styles.justify2]}>
                  <Image source={ require('../../../assets/icon/play.png')} />
                </View>
                <Text style={[styles.listmenu2]}>Wahdah Tv</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: '25%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Tanya')}>
                <View style={[styles.divmenu2, styles.justify2]}>
                  <Image source={ require('../../../assets/icon/help.png')} />
                </View>
                <Text style={[styles.listmenu2]}>Tanya Ustadz</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: '25%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Jadwal')}>
                <View style={[styles.divmenu2, styles.justify2]}>
                  <Image source={ require('../../../assets/icon/mosque.png')} />
                </View>
                <Text style={[styles.listmenu2]}>Jadwal Sholat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: '25%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Dewan')}>
                <View style={[styles.divmenu2, styles.justify2]}>
                  <Image source={ require('../../../assets/icon/dewan.png')} />
                </View>
                <Text style={[styles.listmenu2]}>Dewan Syariah</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={{marginVertical: 20}}>
          <View style={{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Konsultasi Terbaru</Text>
            <TouchableOpacity style={{padding: 5}} onPress={() => this.props.navigation.navigate('KonsultasiList')}>
              <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{height: 345, paddingHorizontal: 16}}>
            {this.renderKonsultasis()}
          </ScrollView>
        </View>

        <View style={{marginVertical: 20}}>
          <View style={{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Fatwa Terbaru</Text>
            <TouchableOpacity style={{padding: 5}} onPress={() => this.props.navigation.navigate('FatwaList')}>
              <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{height: 345, paddingHorizontal: 16}}>
            {this.renderFatwas()}
          </ScrollView>
        </View>

        <View style={{marginBottom: 30}}>
          <View style={{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, marginTop: 20, marginBottom: 10}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Radio Wahdah</Text>
            <TouchableOpacity style={{padding: 5}}>
              <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Download </Text>
            </TouchableOpacity>
          </View>
          <View style={{width, alignItems: 'center', paddingHorizontal: 15}}>
            <TouchableOpacity style={{width: '100%', height: 180, padding: 20, backgroundColor: 'rgb(228, 228, 228)', alignItems: 'center', borderRadius: 8}} onPress={() => this.props.navigation.navigate('Radio')}>
              <Image source={require('../../../assets/asset/radio.png')} style={{height: '100%', width: '75%'}}/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      </View>
    );
  }

}
export default Home;
