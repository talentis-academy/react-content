import axiosQuery from "../../lib/axiosQuery";

// Login API
export const login = (
  userName,
  password,
  verified = true,
  blocked = false,
  delay = 0
) =>
  axiosQuery(
    "post",
    "/api/login",
    {
      data: {
        userName,
        password,
        verified,
        blocked,
        delay,
      },
    },
    false
  );

// Session API
export const verifySession = (token) =>
  axiosQuery(
    "post",
    "/api/session",
    {
      data: {
        token,
      },
    },
    false
  );

// Fetch cars by year
export const fetchCarsByYear = (year) =>
  axiosQuery("get", `/api/cars/year/${year}`, undefined, false);

// Fetch car by ID
export const fetchCarById = (id) =>
  axiosQuery("get", `/api/cars/${id}`, undefined, false);
