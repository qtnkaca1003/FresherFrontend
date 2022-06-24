import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { addUserEdit } from "../../../redux/slices/userSlices";
import { IUser } from "../../../types/interface";
import { CartIcon } from "../../atoms/icons/CartIcon";
import { IconPlusUser } from "../../atoms/icons/IconUserPlus";
import { IconList } from "../../atoms/icons/list";
import CLinknavi from "../../molecules/linknavi";
const button = [
  {
    link: "/list-user/1",
    icon: <IconList />,
    title: "List user",
    id: "1",
  },
  {
    link: "/list-product/1",
    icon: <IconList />,
    title: "List Product",
    id: "2",
  },
  {
    link: "/list-user/add-user",
    icon: <IconPlusUser />,
    title: "Add User",
    id: "3",
  },
  {
    link: "/list-product/add-product",
    icon: <CartIcon />,
    title: "Add Product",
    id: "4",
  },
];

export const Navigation = () => {
  const { colorMode } = useColorMode();
  const dispatch = useAppDispatch();
  const handleBack = () => {
    const userEdit: IUser = {
      avatar: "",
      email: "",
      first_name: "",
      id: "",
      last_name: "",
      password: "",
    };
    dispatch(addUserEdit(userEdit));
  };
  const fill = colorMode === "dark" ? "#fff" : "#000";
  const color = colorMode === "dark" ? "#fff" : "#000";
  const active = useAppSelector((state) => state.activeMenu.change);
  return (
    <>
      <Box
        minH={"100vh"}
        boxShadow="2xl"
        className={active === true ? "activeMenu1" : "activeMenu"}
      >
        {colorMode === "dark"
          ? button.map((item, index) => {
              return (
                <CLinknavi
                  idActive={index}
                  className={"activeMenuNa"}
                  color={color}
                  onClick={handleBack}
                  padding="20px 25px"
                  display={"inline-flex"}
                  lineHeight={"16px"}
                  w={"100%"}
                  _hover={{
                    background: "#6F8FAF",
                  }}
                  fill={fill}
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  link={item.link}
                />
              );
            })
          : button.map((item, index) => {
              return (
                <CLinknavi
                  idActive={index}
                  onClick={handleBack}
                  padding="20px 25px"
                  borderLeft={"solid 4px #fff"}
                  display={"inline-flex"}
                  lineHeight={"16px"}
                  w={"100%"}
                  _hover={{
                    background: "#f5f6f8",
                    color: "#007bff",
                    borderLeft: "solid 4px #007bff",
                    fill: "#007bff",
                  }}
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  link={item.link}
                />
              );
            })}
      </Box>
    </>
  );
};
