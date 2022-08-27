import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Displayer from '../utils/Displayer';

const {setWidth, setHeight} = Displayer;

const Container = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    width: setWidth(90),

    alignSelf: 'center',
  },
});
