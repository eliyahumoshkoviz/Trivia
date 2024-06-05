import { useEffect } from "react";
import { useTriviaStore } from "./stoer/triviaStore";
import Lyout from "./components/Lyout";

export default function App() {
  const fetchQuestions = useTriviaStore((state) => state.setTrivia);
  useEffect(() => {
    fetchQuestions();
  }, []);

  return <Lyout />;
}
