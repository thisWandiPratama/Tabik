import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Dewan from '../screens/Dewan/Dewan';
import Profil from '../screens/Dewan/Profil';
import Pengurus from '../screens/Dewan/Pengurus';
import Jadwal from '../screens/Jadwal/Jadwal';

export default createStackNavigator(

  {
    Home: {
      screen: Home,
    },
    About: {
      screen: About,
    },
    Dewan: {
      screen: Dewan,
    },
    Profil: {
      screen: Profil,
    },
    Pengurus: {
      screen: Pengurus,
    },
    Jadwal: {
      screen: Jadwal,
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);
