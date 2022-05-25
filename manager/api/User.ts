import { IUser } from "../types/interface";
import Axios from "./Axios";

const apiUser = {
  getAll: () => {
    const url = `/users`;
    return Axios.get(url);
  },
  addUser: (data :IUser ) => {
    const url = `/users`;
    return Axios.post(url, data);
  },
};
export default apiUser;
