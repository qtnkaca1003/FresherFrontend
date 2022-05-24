import { IUser } from "../types/interface";
import Axios from "./Axios";
import AxiosPagin from "./AxiosPagin";
interface IApiUser{
    id: string | undefined
}
const apiUser = {
  getPage: (id: string | undefined) => {
    const url = `/list-user/${id}`;
    return AxiosPagin.get(url);
  },
  addUser: (data :IUser ) => {
    const url = `/users`;
    return Axios.post(url, data);
  },
};
export default apiUser;
