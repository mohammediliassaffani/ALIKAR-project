import {StyleSheet, StatusBar, View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Separator from '../../components/Separetor';
import Profile from '../../components/Profile';
import Container from '../../components/Container';
import Displayer from '../../utils/Displayer';
import Holder from '../../components/Holder';
import Body from '../../components/Body';

const {setWidth, setHeight} = Displayer;

const QuistionScreen = () => {
  return (
    <View
      style={{
        height: setHeight(100),
        width: setWidth(100),
        backgroundColor: '#fff',
      }}>
      <StatusBar backgroundColor="#03a9f4" />
      <Header>
        <Separator height={40} />
        {/* Container To have The Same Space */}
        <Container>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View></View>
            {/* Profil Box */}
            <Profile />
          </View>
          {/* Text H1 */}
          <Text style={styles.h1}>Hi, User name </Text>
          {/* Paragraph */}
          <Text style={{marginTop: 5}}>Lorem ipsum dolor sit amet, </Text>
        </Container>
      </Header>
      <Body></Body>
      <Holder />
    </View>
  );
};

export default QuistionScreen;

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  p1: {
    marginTop: 10,
  },
});
