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

import Icon from "react-native-vector-icons/FontAwesome5";

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
     formdata.append('data', '2019-11-08');
     formdata.append('latitude', '-5.147');
     formdata.append('longitude', '119.432');
     formdata.append('timezone', '8');
     formdata.append('wilayah', 'Makassar');

      axios({
        url: 'https://krfdsawi.stiba.ac.id/wss/',
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

  }

  render() {
    return (
      <ScrollView scrollEnable paggingEnable style={{flex: 1, backgroundColor: '#fff'}}>

        <View style={{height: 310, width}}>
          <ImageBackground
            style={[styles.bgimg]}
            source={ require('../../../assets/headback.png') }
          >
            <View style={[styles.header]}>
              <Text style={[styles.name]}>Tabik Ustadz</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                <Icon name="info-circle" color="#fff" size={25} />
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
              <TouchableOpacity style={{width: '25%', alignItems: 'center'}}>
                <View style={[styles.divmenu2, styles.justify2]}>
                  <Image source={ require('../../../assets/icon/play.png')} />
                </View>
                <Text style={[styles.listmenu2]}>Wahdah Tv</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: '25%', alignItems: 'center'}}>
                <View style={[styles.divmenu2, styles.justify2]}>
                  <Image source={ require('../../../assets/icon/help.png')} />
                </View>
                <Text style={[styles.listmenu2]}>Tanya Ustadz</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: '25%', alignItems: 'center'}}>
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
          <View style={{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, marginTop: 20}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Wahdah TV</Text>
            <TouchableOpacity style={{padding: 5}}>
              <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal scrollEnable paggingEnable showsHorizontalScrollIndicator={false}>
            <View style={{width: 225, paddingTop: 16, paddingLeft: 15, backgroundColor: ' green'}}>
              <TouchableOpacity>
                <Image source={require('../../../assets/santri.jpg')} style={{height: 112, width: 225}}/>
                <View style={{padding: 13, borderWidth: 1, borderTopWidth: 0, borderColor: 'rgb(227, 226, 226)'}}>
                  <Text style={{fontSize: 11, fontWeight: 'bold', marginBottom: 10}}>DEVINISI DAKWAH ISLAM | USTADZ DR. RAHMAT ABDUL RAHMAN, LC, M.A</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width: 225, paddingTop: 16, paddingLeft: 15, backgroundColor: ' green'}}>
              <TouchableOpacity>
                <Image source={require('../../../assets/santri.jpg')} style={{height: 112, width: 225}}/>
                <View style={{padding: 13, borderWidth: 1, borderTopWidth: 0, borderColor: 'rgb(227, 226, 226)'}}>
                  <Text style={{fontSize: 11, fontWeight: 'bold', marginBottom: 10}}>DEVINISI DAKWAH ISLAM | USTADZ DR. RAHMAT ABDUL RAHMAN, LC, M.A</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    );
  }

}
export default Home;
