import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import PrivateRoute from "./components/PrivateRoute"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import PublicPage from "./pages/PublicPage"
import "./index.css"
const router = createBrowserRouter([
  { path: "/", element: <PublicPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/dashboard", element: <PrivateRoute><DashboardPage /></PrivateRoute> },
])
createRoot(document.getElementById("root")).render(<StrictMode><AuthProvider><RouterProvider router={router} /></AuthProvider></StrictMode>)
