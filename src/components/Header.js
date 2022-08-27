import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Displayer from '../utils/Displayer';

const {setWidth, setHeight} = Displayer;
const Header = ({children}) => {
  return <View style={[styles.header]}>{children}</View>;
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: setHeight(30),
    backgroundColor: '#03a9f4',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    elevation: 15,
  },
});
