import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getAllUsers = () => {
  return api.get("/users");
};
