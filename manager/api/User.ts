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
  editUser: (id: string|undefined, data: IUser) => {
    const url = `/users/${id}`;
    return Axios.put(url, data);
  },
};
export default apiUser;
