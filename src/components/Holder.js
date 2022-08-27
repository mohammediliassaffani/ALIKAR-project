import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Displayer from '../utils/Displayer';

const {setWidth, setHeight} = Displayer;

const Holder = () => {
  return (
    <View style={styles.Holder}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
        }}>
        <Iteam label="Question" inBox="1/20" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Iteam label="Temps écoulé" inBox="05" />
          <Iteam  inBox="08" />
        </View>
      </View>
    </View>
  );
};

const Iteam = ({label, inBox}) => (
  <View>
    <Text style={styles.p}>{label}</Text>
    <View style={styles.box}>
      <Text style={styles.h1}>{inBox}</Text>
    </View>
  </View>
);
export default Holder;

const styles = StyleSheet.create({
  Holder: {
    position: 'absolute',
    top: setHeight(22),
    alignSelf: 'center',
    width: setWidth(80),
    height: setHeight(8 * 2),
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    fontWeight: 'bold',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue',
  },
  box: {
    width: setWidth(18),
    height: setWidth(18),
    borderRadius: 15,
    opacity: 0.5,
    backgroundColor: '#03a9f4fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
