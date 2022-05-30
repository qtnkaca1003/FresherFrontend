import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppSelector } from "../../../hook";
import { IPage, IUser } from "../../../types/interface";
import CHeadmain from "../../molecules/headmain";
import TUser from "../../molecules/table/TUser";
interface IProps {
  users: IUser[];
  status: number;
  pages: IPage
}
const ListUser = (props: IProps) => {
  console.log(props.pages);
  
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const user = useAppSelector((state) => state.users.propsUsers);
  const arrUser = Object.assign([], ...user);
  const toAddUser = () => {
    router.push("/list-user/add-user");
  };
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filteredUsers = props.users.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.first_name.toLowerCase().indexOf(query) >= 0 ||
      item.last_name.toLowerCase().indexOf(query) >= 0 ||
      item.email.toLowerCase().indexOf(query) >= 0 
    );
  });
  return (
    <>
      <Box padding={"0 24px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          padding={"24px 0"}
        >
          {" "}
          <CHeadmain
            onClickBtn={toAddUser}
            onChangeSearch={handelChange}
            title="List user"
            placeholder="Search for something..."
            titleBtn="+ Add user"
          />
        </Box>
        <Box shadow={"2xl"} borderRadius={"10px"} padding={"24px 0"}>
          <TUser
            data={props.pages}
            status={props.status}
            filteredUsers={filteredUsers}
          />
        </Box>
      </Box>
    </>
  );
};
export default ListUser;
