import React, { useEffect, useState } from "react";
import { useTriviaStore } from "../stoer/triviaStore";
import Card from "./Card";

export default function FavoriteQuestions() {
  const favoriteQuestions = useTriviaStore((state) => state.favoriteQuestions);
  
  const [favoriteQuestionsArray, setFavoriteQuestionsArray] = useState([]);
  
  useEffect(() => { 
    setFavoriteQuestionsArray(Object.entries(favoriteQuestions));
  }, [favoriteQuestions]);

  return <Card questions={favoriteQuestionsArray}/>;
}
