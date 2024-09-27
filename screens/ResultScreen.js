// screens/ResultScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
  const { score, totalQuestions, userAnswers } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Quiz Resultat</Text>
      <Text style={styles.score}>
        Du fik {score} ud af {totalQuestions} rigtige svar!
      </Text>

      <View style={styles.answersContainer}>
        {userAnswers.map((answer, index) => (
          <View key={index} style={styles.answerItem}>
            <Text style={styles.questionText}>
              {index + 1}. {answer.question}
            </Text>
            <Text style={styles.answerText}>
              Dit svar: {answer.selectedOption}
            </Text>
            <Text
              style={[
                styles.correctnessText,
                {
                  color:
                    answer.selectedOption === answer.correctAnswer
                      ? 'green'
                      : 'red',
                },
              ]}
            >
              {answer.selectedOption === answer.correctAnswer
                ? 'Korrekt'
                : `Forkert (Rigtigt svar: ${answer.correctAnswer})`}
            </Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Gå til Hjem</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  score: {
    fontSize: 20,
    marginBottom: 20,
  },
  answersContainer: {
    width: '100%',
    marginBottom: 20,
  },
  answerItem: {
    marginBottom: 15,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  answerText: {
    fontSize: 16,
  },
  correctnessText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ResultScreen;
