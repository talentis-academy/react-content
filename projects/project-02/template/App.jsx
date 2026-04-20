import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./src/layouts/MainLayout";
import LoginLayout from "./src/layouts/LoginLayout";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import WatchlistPage from "./src/pages/WatchlistPage";
import MovieDetailPage from "./src/pages/MovieDetailPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import ErrorBoundary from "./src/components/ErrorBoundary";

// TODO: Wrap with <Provider store={store}> + <QueryClientProvider>
// TODO: Add authLoader to protect "/"

const router = createBrowserRouter([
  { path: "/login", element: <LoginLayout />, children: [{ index: true, element: <LoginPage /> }] },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "watchlist", element: <WatchlistPage /> },
      { path: "movie/:id", element: <MovieDetailPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() { return <RouterProvider router={router} />; }
