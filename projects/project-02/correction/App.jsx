import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./src/store/store";
import { authLoader } from "./src/utils/auth";
import MainLayout from "./src/layouts/MainLayout";
import LoginLayout from "./src/layouts/LoginLayout";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import WatchlistPage from "./src/pages/WatchlistPage";
import MovieDetailPage from "./src/pages/MovieDetailPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import ErrorBoundary from "./src/components/ErrorBoundary";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  { path: "/login", element: <LoginLayout />, children: [{ index: true, element: <LoginPage /> }] },
  { path: "/", element: <MainLayout />, errorElement: <ErrorBoundary />, loader: authLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: "watchlist", element: <WatchlistPage /> },
      { path: "movie/:id", element: <MovieDetailPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}
