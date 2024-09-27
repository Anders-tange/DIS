// screens/QuizScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import questions from '../data/questions';
import QuestionCard from '../components/QuestionCard';
import AnswerButton from '../components/AnswerButton';

const QuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (selectedOption) => {
    const question = questions[currentQuestionIndex];
    const correctAnswer = question.correctAnswer;

    // Opdater scoren, hvis svaret er korrekt
    let updatedScore = score;
    if (selectedOption === correctAnswer) {
      updatedScore = score + 1;
      setScore(updatedScore);
    }

    // Gem brugerens svar
    setUserAnswers([
      ...userAnswers,
      {
        question: question.question,
        selectedOption,
        correctAnswer,
      },
    ]);

    // Gå til næste spørgsmål eller resultatskærm
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Result', {
        score: updatedScore,
        totalQuestions: questions.length,
        userAnswers,
      });
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <QuestionCard question={question.question} />
      {question.options.map((option, index) => (
        <AnswerButton key={index} option={option} onPress={() => handleAnswer(option)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default QuizScreen;
