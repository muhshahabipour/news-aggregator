import "react-loading-skeleton/dist/skeleton.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Article from "@/pages/Article/Article";
import ErrorPage from "@/pages/ErrorPages/ErrorPage";
import Home from "../pages/Home/Home";
import Loading from "@/pages/Loading/Loading";
import NewsByCategory from "@/pages/NewsByCategory/NewsByCategory";
import Root from "@/pages/Root";
import Search from "@/pages/Search/Search";
import { Suspense } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "categories/:category",
          element: <NewsByCategory />,
        },
        {
          path: "sources/:source",
          element: <NewsByCategory />,
        },
        {
          path: "article/:id",
          element: <Article />,
        },
        {
          path: "search",
          element: <Search />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={Loading}>
      <div className="min-h-screen flex flex-col mx-auto w-full max-w-screen-2xl">
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
}

export default App;
