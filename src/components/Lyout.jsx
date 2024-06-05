import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";

export default function Lyout() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Card />,
    },
    {
      path: "FavoriteQuestions",
      element: <h1>dfds</h1>,
    },
  ]);
  return (
    <>
      <div className="w-screen bg-green-600">
        <Header />
      </div>
      <RouterProvider router={router} />
    </>
  );
}
