import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MovieListPage from "./pages/MovieListPage"
import MovieDetailPage from "./pages/MovieDetailPage"
import NotFoundPage from "./pages/NotFoundPage"
import "./index.css"
const router = createBrowserRouter([
  { path: "/", element: <MovieListPage /> },
  { path: "/movies/:id", element: <MovieDetailPage /> },
  { path: "*", element: <NotFoundPage /> },
])
createRoot(document.getElementById("root")).render(<StrictMode><RouterProvider router={router} /></StrictMode>)
