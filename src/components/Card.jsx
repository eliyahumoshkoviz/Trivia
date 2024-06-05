import React from "react";
import { useTriviaStore } from "../stoer/triviaStore";
import Question from "./Question";
import Answers from "./Answers";


export default function Card() {
 
  const questions = useTriviaStore((state) => state.questions);
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {questions.map((question, index) => (
        <div key={index} className="flex flex-col gap-4 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4 bg-lime-100 rounded-lg shadow-md">
          <Question  index={index} /> 
          <Answers index={index} />
        </div>
      ))}
    </div>
  );
}