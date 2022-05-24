import axios from "axios";

const AxiosPagin = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "content-type": "application/json",
  },
});
export default AxiosPagin;
