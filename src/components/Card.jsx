import React, { useEffect } from "react";
import Question from "./Question";
import CorrectAnswer from "./CorrectAnswer";
import { useTriviaStore } from "../stoer/triviaStore";

export default function Card() {
  const fetchQuestions = useTriviaStore((state) => state.setTrivia);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const questions = useTriviaStore((state) => state.questions);
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center p-4">
      {questions.map((question, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white rounded-lg shadow-md">
          <Question question={question} index={index} />
          <CorrectAnswer />
        </div>
      ))}
    </div>
  );
}
