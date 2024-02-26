
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getAllUsers = async () => {
  const response = api.get("/users");
  try {
    const res = await response;
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};
