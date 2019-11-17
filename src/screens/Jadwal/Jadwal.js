import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';

import axios from 'axios';
import Icon from "react-native-vector-icons/FontAwesome5";
import CalendarPicker from 'react-native-calendar-picker';

const { width, height } = Dimensions.get('window');

class Jadwal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

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

  };


  render() {
    const { navigation } = this.props;
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>

        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> Jadwal Sholat </Text>
          </View>
        </View>

        <View style={{width: '100%', padding: 35}}>
          <Text style={styles.fokus}>Waktunnya Sholat Jadwal !</Text>
          <Text style={styles.notes}>Sholat terbaik adalah sholat yang dikerjakan diawal waktu.</Text>
        </View>

        <View style={{padding: 10,flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.adzan}>
            <Text style={styles.jam}>{this.state.jadwal.subuh}</Text>
            <Text style={styles.shalat}>Subuh</Text>
          </View>
          <View style={styles.adzan}>
            <Text style={styles.jam}>{this.state.jadwal.zuhur}</Text>
            <Text style={styles.shalat}>Dhuhur</Text>
          </View>
          <View style={styles.adzan}>
            <Text style={styles.jam}>{this.state.jadwal.asar}</Text>
            <Text style={styles.shalat}>Ashar</Text>
          </View>
          <View style={styles.adzan}>
            <Text style={styles.jam}>{this.state.jadwal.magrib}</Text>
            <Text style={styles.shalat}>Magrib</Text>
          </View>
          <View style={styles.adzan}>
            <Text style={styles.jam}>{this.state.jadwal.isya}</Text>
            <Text style={styles.shalat}>Isya</Text>
          </View>
        </View>

        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>

      </View>
    );
  }

}
export default Jadwal;

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
  fokus: {
    fontSize: 33,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10
  },
  notes: {
    fontSize: 15
  },
  adzan: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 88,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
  },
  jam: {
    width: '65%',
    color: '#3896A3',
    fontSize: 19,
    fontFamily: 'Montserrat-Bold',

  },
  shalat: {
    fontSize: 9,
    marginTop: 5,
    paddingLeft: 4,
    color: '#3896A3',
    alignSelf: 'flex-start',
    fontFamily: 'Montserrat-Regular',
  },
});
