import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./src/layouts/MainLayout";
import LoginLayout from "./src/layouts/LoginLayout";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import SavedPage from "./src/pages/SavedPage";
import RecipeDetailPage from "./src/pages/RecipeDetailPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import ErrorBoundary from "./src/components/ErrorBoundary";

// TODO: Wrap with <Provider store={store}> + <QueryClientProvider>
// TODO: Add authLoader to protect "/"

const router = createBrowserRouter([
  { path: "/login", element: <LoginLayout />, children: [{ index: true, element: <LoginPage /> }] },
  { path: "/", element: <MainLayout />, errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "saved", element: <SavedPage /> },
      { path: "recipe/:id", element: <RecipeDetailPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() { return <RouterProvider router={router} />; }
