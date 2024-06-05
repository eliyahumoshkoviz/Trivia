import React, { useEffect, useState } from "react";
import { useTriviaStore } from "../stoer/triviaStore";
import Star from "./Star";

export default function Question({ index }) {
  const questions = useTriviaStore((state) => state.questions);


  return (
    <div key={index} className="relative flex justify-center i min-h-36 bg-gradient-to-r from-gray-200 to-gray-300 p-4 rounded-md shadow-md">
      <Star index={index}/>
      <div className="text-xl font-semibold text-gray-800 mb-4">
        {questions[index]}
      </div>
      </div>
  );
}
