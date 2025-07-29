import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:500/api",
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  puth: app.put,
  patch: app.patch,
};

export default http;
