import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Displayer from '../utils/Displayer';
import Container from './Container';
import CheckBox from '@react-native-community/checkbox';

const {setWidth, setHeight} = Displayer;
const questions = [
  '1 lorem ipsum dolor sit amet, consectetur',
  '2 lorem ipsum dolor sit amet, consectetur',
  '3 lorem ipsum dolor sit amet, consectetur',
  '4 lorem ipsum dolor sit amet, consectetur',
];

const Body = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Container>
      <View style={styles.Body}>
        <Text style={styles.h1}>Question 1</Text>
        <Text style={styles.p}>
          lorem ipsum dolor sit amet, consectetur adipiscing equality
          Comparisons of Lorem ipsum dolor sit amet et adip
        </Text>
        {questions.map((q, i) => {
          return <OneQuestion key={i} question={q} />;
        })}
      </View>
    </Container>
  );
};

const OneQuestion = ({question}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View flexDirection="row" alignItems="center">
      <CheckBox
        marginTop={10}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Text style={styles.p}> {question}</Text>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  p: {
    marginTop: 10,
    color: '#000',
  },
  Body: {
    height: setHeight(70),
    justifyContent: 'center',

    width: '100%',
  },
});
