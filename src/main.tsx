import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookList from "./views/books/BookList.tsx";
import AuthorList from "./views/authors/AuthorList.tsx";
import BookDetail from "./views/books/BookDetails.tsx";
import AuthorDetails from "./views/authors/AuthorDetails.tsx";
import NotFoundPage from "./views/navigation/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/books",
        element: <BookList />,
      },
      {
    
        path: "books/:id",
        element: <BookDetail/>, 
      },
      {
        path: "/authors",
        element: <AuthorList />,
      },
      {
        path: "/authors/:id",
        element: <AuthorDetails />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
