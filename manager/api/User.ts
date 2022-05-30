import { IUser } from "../types/interface";
import Axios from "./Axios";
import AxiosUser from "./AxiosUser";

const apiUser = {
  getPagin: (id:string | string[] | number) => {
    const url = `/api/users?page=${id}`;
    return AxiosUser.get(url);
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
