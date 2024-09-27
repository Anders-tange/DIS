// components/QuestionCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionCard = ({ question }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  questionText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default QuestionCard;
