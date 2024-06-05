import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { useTriviaStore } from "../stoer/triviaStore";


export default function Star({index}) {
  const [filled, setFilled] = useState(false);
  const selectQuestions = useTriviaStore((state) => state.selectQuestions);
  const questions = useTriviaStore((state) => state.questions[index]);
  const answers = useTriviaStore((state) => state.answers[index]);

  const toggleFill = () => {
    setFilled(!filled);
    selectQuestions(questions,answers)
  };
  const FavoriteQuestions = useTriviaStore((state) => state.FavoriteQuestions);
  console.log(FavoriteQuestions);
  return (
    <div className="absolute top-0 right-0 mt-1 mr-1 text-yellow-500">
      <FiStar
        onClick={toggleFill}
        style={{ fill: filled && "red", fontSize: "20px" }}
      />
    </div>
  );
}
