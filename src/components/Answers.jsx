import React from "react";
import { useTriviaStore } from "../stoer/triviaStore";

export default function Answers({ index }) {
  const answers = useTriviaStore((state) => state.answers);
  const correctAnswer = useTriviaStore((state) => state.correct_answer[index]);
  const selectedAnswer = useTriviaStore(
    (state) => state.selectedAnswers[index]
  );
  const selectAnswer = useTriviaStore((state) => state.selectAnswer);

  const handleAnswerClick = (answer) => {
    selectAnswer(index, answer);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {answers[index].map((answer) => {
        let answerClass =
          "w-full h-16 flex items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out";
        if (answer === selectedAnswer) {
          answer === correctAnswer
            ? (answerClass += " bg-green-200 border-2 border-green-500")
            : (answerClass += " bg-red-200 border-2 border-red-500");
        } else {
          answerClass += "bg-gray-200";
        }

        return (
          <div
            key={answer}
            className={answerClass}
            onClick={() => handleAnswerClick(answer)}
          >
            <span className="text-lg font-medium text-gray-800">{answer}</span>
          </div>
        );
      })}
    </div>
  );
}
