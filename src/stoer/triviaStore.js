import axios from 'axios';
import { create } from 'zustand';

export const useTriviaStore = create((set) => ({
  trivia: [],
  questions: [],
  answers: [],

  setTrivia: async () => {
    try {
      const { data: { results } } = await axios.get('https://opentdb.com/api.php?amount=10&category=27');
      const questions = results.map(result => result.question);
      const answers = results.map(result => {
        const incorrectAnswers = result.incorrect_answers;
        const correctAnswer = result.correct_answer;

        // Combine correct and incorrect answers
        const answers = [...incorrectAnswers, correctAnswer];

        // Shuffle answers
        answers.sort(() => Math.random() - 0.5);
        return answers;
      });

      set((state) => ({ trivia: results, questions: questions, answers: answers }));

    } catch (error) {
      console.error("Failed to fetch trivia questions:", error);
    }
  },
}));
