import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Card />,
    },
    {
      path: "menu",
      element: <h1></h1>,
    },
    {
      path: "joinGame",
      element: <h1></h1>,
    },
    {
      path: "board",
      element: <h1></h1>,
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
