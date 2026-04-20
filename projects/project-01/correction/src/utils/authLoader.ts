import { redirect } from "react-router-dom";
import { storage } from "./storage";

export const requireAuth = () => {
  const token = storage.getToken();

  if (!token) {
    // Redirect to login if not authenticated
    throw redirect("/login");
  }

  // Return token if authenticated
  return { token };
};

export const redirectIfAuthenticated = () => {
  const token = storage.getToken();

  if (token) {
    // Redirect to home if already authenticated
    throw redirect("/");
  }

  return null;
};
