import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({


  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  justify1: {
    justifyContent: 'space-between'
  },
  justify2: {
    justifyContent: 'center'
  },
  itemc: {
    alignItems: 'center'
  },
  date: {
    fontSize: 11,
    color: '#fff'
  },
  divjadwal: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRightWidth: 1,
    alignItems: 'center',
    borderColor: 'rgba(17, 170, 191, 0.32)',
    justifyContent: 'space-between',
  },
  jadwal: {
    fontSize: 11,
    color: '#3896A3',
    fontFamily: 'Roboto',
  },
  bgimg: {
    width,
    height: 270,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  header: {
    width,
    height: 60,
    padding: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Pacifico',
  },
  fokus: {
    fontSize: 60,
    color: '#fff',
    fontFamily: 'Montserrat-Regular'
  },
  note: {
    fontSize: 12,
    color: '#fff',
    marginHorizontal: 10,
    fontFamily: 'Montserrat-Regular'
  },
  details: {
    width: 72,
    height: 23,
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(42, 194, 227, 0.7)',
  },
  jam: {
    top: 45,
    width: 297,
    height: 63,
    left: 31,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: '#fff',
  },

  divmenu1: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },

  divArtik: {
    width: '100%',
    height: 80,
  },
  fokusTitle: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  noteTitle: {
    fontSize: 10,
    color: '#fff',
    marginTop: 8,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    letterSpacing: 10
  },

  menu1: {
    height: 51  ,
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#3a969e',
    borderRadius: 8,
  },
  listmenu1: {
    fontSize: 13,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff'
  },
  divmenu2: {
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 100,
    alignItems: 'center'
  },
  listmenu2: {
    fontSize: 13,
    width: 50,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 6
  }


});
export default styles;
