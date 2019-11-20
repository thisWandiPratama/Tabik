import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons";
import { WebView } from 'react-native-webview';
import Footer from "../../component/Footer";

import styles from './style';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

class Home extends Component {
  state = {
    jadwal: false,
    hari: "",
    tgl: "",
  }

  componentDidMount () {

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

    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ];

    var t = new Date();
    this.setState({tgl: t.getDate() + ' ' + monthNames[t.getMonth()] + ' ' + t.getFullYear()});

    let formdata = new FormData();
    formdata.append('act', 'TANGGALM');
    formdata.append('data', '2019-11-20');
    formdata.append('latitude', '-5.147');
    formdata.append('longitude', '119.432');
    formdata.append('timezone', '8');
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
              <Text style={[styles.date]}>{this.state.hari}, {this.state.tgl}</Text>
              <Text style={[styles.fokus]}>17:57</Text>
              <View style={[styles.row, {alignItems: 'center'}]}>
                <Text style={[styles.note]}>Saatnya Shalat Maghrib</Text>
                <TouchableOpacity style={[styles.details]} onPress={() => this.props.navigation.navigate('Jadwal')}>
                  <Text style={{color: '#fff', fontSize: 10}}>Lihat Jadwal</Text>
                </TouchableOpacity>
              </View>
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
                source={ require('../../../assets/background/artikel.png') }
              >
                <Text style={styles.fokusTitle}>FATWA</Text>
              </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '45%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('KonsultasiList')}>
            <ImageBackground
                style={[styles.divArtik, styles.justify2]}
                source={ require('../../../assets/background/artikel.png') }
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
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Berita Terbaru</Text>
            <TouchableOpacity style={{padding: 5}}>
              <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal paggingEnable showsHorizontalScrollIndicator={false}>
            <View style={{width, paddingTop: 16, paddingHorizontal: 16, backgroundColor: ' green'}}>
              <Image source={require('../../../assets/santri.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
            </View>
            <View style={{width, paddingTop: 16, paddingHorizontal: 16, backgroundColor: ' green'}}>
              <Image source={require('../../../assets/santri.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
            </View>
            <View style={{width, paddingTop: 16, paddingHorizontal: 16, backgroundColor: ' green'}}>
              <Image source={require('../../../assets/santri.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
            </View>
          </ScrollView>
        </View>

        <View style={{marginVertical: 20}}>
          <View style={{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Artikel</Text>
            <TouchableOpacity style={{padding: 5}}>
              <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{width, paddingTop: 16, paddingHorizontal: 16, marginTop: 10}}>
            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgb(227, 227, 227)'}}>
              <Image source={require('../../../assets/pohon.jpg')} style={{height: 85, width: 110}}/>
              <View style={{paddingTop: 4, paddingLeft: 20,  paddingBottom: 10, width: 200, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>BEBERAPA TIPS PEKERJAAN SEDERHANA TAMBANG PAHALA</Text>
                <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>November, 19 2019</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width, paddingTop: 16, paddingHorizontal: 16, marginTop: 10}}>
            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgb(227, 227, 227)'}}>
              <Image source={require('../../../assets/tobat.jpg')} style={{height: 85, width: 110}}/>
              <View style={{paddingTop: 4, paddingLeft: 20,  paddingBottom: 10, width: 200, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>BERTOBAT, MENGUNDANG RAHMAT ALLAH  </Text>
                <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>September, 29 2019</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width, paddingTop: 16, paddingHorizontal: 16, marginTop: 10}}>
            <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgb(227, 227, 227)'}}>
              <Image source={require('../../../assets/pasrah.jpg')} style={{height: 85, width: 110}}/>
              <View style={{paddingTop: 4, paddingLeft: 20,  paddingBottom: 10, width: 200, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>MEMASRAHKAN DIRI HANYA PADA ALLAH</Text>
                <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>September, 39 2019</Text>
              </View>
            </View>
          </TouchableOpacity>

        </View>

        <View style={{marginBottom: 30}}>
          <View style={{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, marginTop: 20, marginBottom: 10}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Radio Wahdah</Text>
            <TouchableOpacity style={{padding: 5}}>
              <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Download </Text>
            </TouchableOpacity>
          </View>
          <View style={{width, alignItems: 'center', paddingHorizontal: 15}}>
            <TouchableOpacity style={{width: '100%', height: 180, padding: 20, backgroundColor: 'rgb(228, 228, 228)', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Radio')}>
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
