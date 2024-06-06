import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useTriviaStore } from "../stoer/triviaStore";

import Card from "./Card";
import Home from "./Home";
import FavoriteQuestions from "./FavoriteQuestions";

export default function Lyout() {
  const questions = useTriviaStore((state) => state.questions);

  const router = createBrowserRouter([
    {
      element: <Home />,
      children: [
        { index: true },
        { path: "card", element: <Card questions={questions} /> },
        { path: "FavoriteQuestions", element: <FavoriteQuestions /> },
        { path: "Contact", element: <h1>Contact</h1> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
