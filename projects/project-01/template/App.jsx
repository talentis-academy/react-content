import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./src/layouts/MainLayout";
import LoginLayout from "./src/layouts/LoginLayout";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import FavoritesPage from "./src/pages/FavoritesPage";
import CarDetailPage from "./src/pages/CarDetailPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import ErrorBoundary from "./src/components/ErrorBoundary";

// TODO: Import your Redux Provider and configure the store
// TODO: Import QueryClientProvider from @tanstack/react-query
// TODO: Add an authLoader to protect the "/" route

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    // TODO: add loader: authLoader
    children: [
      { index: true, element: <HomePage /> },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "car/:id", element: <CarDetailPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  // TODO: Wrap RouterProvider with <Provider store={store}> and <QueryClientProvider client={queryClient}>
  return <RouterProvider router={router} />;
}
