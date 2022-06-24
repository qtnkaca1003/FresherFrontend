import { Box, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { addUsers, deleteUser } from "../../../../redux/slices/userSlices";
import { IPage, IUser } from "../../../../types/interface";
import CHeadmain from "../../../Molecules/HeadMain/index";
import TUser from "../../../Molecules/Table/TUser";
interface IProps {
  status: number;
  pages: IPage;
}
const dataListUser = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
];
const ListUser = (listUserProps: IProps) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");
  dispatch(addUsers(dataListUser))
  const listUser = useAppSelector((state) => state.users.propsUsers);

  const toAddUser = () => {
    ///dispatch(addUsers(dataListUser))
    router.push("/list-user/add-user");
  };
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filteredUsers = dataListUser.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.first_name.toLowerCase().indexOf(query) >= 0 ||
      item.last_name.toLowerCase().indexOf(query) >= 0 ||
      item.email.toLowerCase().indexOf(query) >= 0
    );
  });
  
  const handleDelete = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    const id = currentTarget.value;
    dispatch(deleteUser(id));
  };
  const color = colorMode === "dark" ? "#fff" : "#4A5568";
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
            color={color}
            fontSize={"3xl"}
            fontWeight={"600"}
            title="List user"
            placeholder="Search for something..."
            titleBtn="+ Add user"
          />
        </Box>
        <Box shadow={"2xl"} borderRadius={"10px"} padding={"24px 0"}>
          <TUser
            onClickBtn={handleDelete}
            data={listUserProps.pages}
            status={listUserProps.status}
            filteredUsers={filteredUsers}
          />
        </Box>
      </Box>
    </>
  );
};
export default ListUser;
