import React, { useEffect } from "react";
import { useTriviaStore } from "../stoer/triviaStore";

export default function answers({ index }) {
  const fetchQuestions = useTriviaStore((state) => state.setTrivia);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const answers = useTriviaStore((state) => state.answers);
  return (
    <div className="flex flex-col gap-4 p-4">
      {answers[index].map((answer, idx) => (
        <div key={idx} className="w-full h-16 bg-green-200 flex items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <span className="text-lg font-medium text-gray-800">{answer}</span>
        </div>
      ))}
    </div>
  );
}

// className="bg-green-200 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
