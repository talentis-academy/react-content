import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./src/layouts/MainLayout";
import LoginLayout from "./src/layouts/LoginLayout";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import FavoritesPage from "./src/pages/FavoritesPage";
import CarDetailPage from "./src/pages/CarDetailPage";
import ApiDemoPage from "./src/pages/ApiDemoPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import ErrorBoundary from "./src/components/ErrorBoundary";
import { requireAuth, redirectIfAuthenticated } from "./src/utils/authLoader";

const router = createBrowserRouter(
  [
    {
      path: "/login",
      element: <LoginLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
          loader: redirectIfAuthenticated,
        },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "favorites",
          element: <FavoritesPage />,
          loader: requireAuth,
        },
        {
          path: "car/:id",
          element: <CarDetailPage />,
        },
        {
          path: "api-demo",
          element: <ApiDemoPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
);

export default function App() {
  return <RouterProvider router={router} />;
}
