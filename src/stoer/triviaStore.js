import axios from 'axios';
import { create } from 'zustand';

export const useTriviaStore = create((set) => ({
  trivia: [],
  questions: [],
  answers: [],
  correct_answer: [],
  selectedAnswers: {},
  favoriteQuestions: {},

  setTrivia: async () => {
    try {
      const { data: { results } } = await axios.get('https://opentdb.com/api.php?amount=10&category=27');
      const questions = results.map(result => result.question);
      const correct_answer = results.map(result => result.correct_answer);
      const answers = results.map(result => {
        const incorrectAnswers = result.incorrect_answers;
        const correctAnswer = result.correct_answer;
        const answers = [...incorrectAnswers, correctAnswer];
        answers.sort(() => Math.random() - 0.5);
        return answers;
      });

      set(() => ({ trivia: results, questions, answers, correct_answer }));
    } catch (error) {
      console.error("Failed to fetch trivia questions:", error);
    }
  },

  selectAnswer: (questionIndex, answer) => {
    set((state) => ({
      selectedAnswers: {
        ...state.selectedAnswers,
        [questionIndex]: answer,
      },
    }));
  },

  selectQuestions: (questionIndex, questions, answers) => {
    set((state) => ({
      favoriteQuestions: {
        ...state.favoriteQuestions,
        [questionIndex]: { answers, questions },
      },
    }));
  },

}));
