import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import Home from "./Home";

export default function Lyout() {
  const router = createBrowserRouter([

    

    {
      element: <Home />,
      children: [
        { index: true, element: <Home /> },
        { path: 'card', element: <Card /> },
        { path: 'FavoriteQuestions', element: <h1>dfds</h1> },
        { path: 'Contact', element: <h1>Contact</h1> },
 
      ]
    },

  ]);
  return (
    <RouterProvider router={router} />
  );
}
