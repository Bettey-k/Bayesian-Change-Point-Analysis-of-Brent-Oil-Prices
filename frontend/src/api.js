import axios from "axios";

const API_BASE = "http://127.0.0.1:5000/api";

export const fetchPrices = async () => {
  const response = await axios.get(`${API_BASE}/prices`);
  return response.data;
};

export const fetchEvents = async () => {
  const response = await axios.get(`${API_BASE}/events`);
  return response.data;
};

export const fetchChangePoints = async () => {
  const response = await axios.get(`${API_BASE}/changepoints`);
  return response.data;
};
