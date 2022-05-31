import { IAccount, IUser } from "../types/interface";
import Axios from "./Axios";
import AxiosUser from "./AxiosUser";

const apiUser = {
  //get
  getPagin: (id: string | string[] | number) => {
    const url = `/api/users?page=${id}`;
    return AxiosUser.get(url);
  },
  getUser: (id: string | undefined) => {
    const url = `/api/users/${id}`;
    return AxiosUser.get(url);
  },
  //post
  login: (data: IAccount) => {
    const url = `/api/login`;
    return AxiosUser.post(url, data);
  },
  register: (data: IAccount) => {
    const url = `/api/register`;
    return AxiosUser.post(url, data);
  },
  addUser: (data: IUser) => {
    const url = `/api/users`;
    return AxiosUser.post(url, data);
  },
  editUser: (id: string | undefined, data: IUser) => {
    const url = `/users/${id}`;
    return Axios.put(url, data);
  },
};
export default apiUser;
