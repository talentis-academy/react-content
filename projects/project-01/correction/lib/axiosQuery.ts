import axios from "axios";
import { API_KEY, BASE_URL, THROTTLLE_TIME } from "../src/api/config";
import { storage } from "../src/utils/storage";

let lastRequestTime = 0;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 30000,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = storage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else if (API_KEY) {
    config.headers.Authorization = `Bearer ${API_KEY}`;
  }

  const withThrottle = (config as any).WithThrottle;
  if (withThrottle) {
    const now = Date.now();
    const delay = Math.max(THROTTLLE_TIME - (now - lastRequestTime), 0);
    lastRequestTime = now + delay;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  return config;
});

const axiosQuery = async (method, url, config, WithThrottle) => {
  const { data, ...restConfig } = config || {};
  const requestConfig = { ...restConfig, WithThrottle: WithThrottle || false };

  if (method === "post") {
    const response = await axiosInstance.post(url, data, requestConfig);
    return response.data;
  } else {
    const response = await axiosInstance.get(url, requestConfig);
    return response.data;
  }
};

export default axiosQuery;
