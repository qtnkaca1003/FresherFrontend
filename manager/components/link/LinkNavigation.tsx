import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { CartIcon } from "../icons/CartIcon";
import { IconPlusUser } from "../icons/IconUserPlus";
import { IconList } from "../icons/list";
interface IButton {
  link: string;
  icon: ReactNode;
  title: string;
  id: string;
}
const button: IButton[] = [
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
    link: "add/add-user",
    icon: <IconPlusUser />,
    title: "User Profile",
    id: "3",
  },
  {
    link: "add/add-product",
    icon: <CartIcon />,
    title: "Add Product",
    id: "4",
  },
];
const LinkNavigation = () => {
  const [menuActive, setMenuState] = useState<number>(0);
  const handleClick = (index: any) => {
    const id = index.target.id;
    setMenuState(id);
  };

  return (
    <>
      {button.map((item, index) => {
        return (
          <Box key={index}>
            <Link href={item.link}>
              <a>
                <Text
                  id={item.id}
                  className={`${
                    menuActive == Number(item.id) ? "activeMenu" : ""
                  }`}
                  lineHeight={"16px"}
                  fontSize={"13.6px"}
                  color={"#3d5170"}
                  borderLeft={"solid 4px #fff"}
                  w={"100%"}
                  _hover={{
                    background: "#f5f6f8",
                    color: "#007bff",
                    borderLeft: "solid 4px #007bff",
                    fill: "#007bff",
                  }}
                  display={"inline-flex"}
                  padding={"20px 25px"}
                  onClick={handleClick}
                >
                  {item.icon}
                  {item.title}
                </Text>
              </a>
            </Link>
          </Box>
        );
      })}

      {/*  <Box>
        <Link href={"/list-user/1"}>
          <a>
            <Text
              className={menuActive ? "activeMenu" : ""}
              lineHeight={"16px"}
              color={"#3d5170"}
              borderLeft={"solid 4px #fff"}
              w={"100%"}
              _hover={{
                background: "#f5f6f8",
                color: "#007bff",
                borderLeft: "solid 4px #007bff",
                fill: "#007bff",
              }}
              display={"inline-flex"}
              padding={"20px 25px"}
              onClick={handleClick}
            >
              <IconList />
              List user
            </Text>
          </a>
        </Link>
      </Box>
      <Box>
        <Link href={"/list-product/1"}>
          <a>
            <Text
              className={menuActive ? "activeMenu" : ""}
              onClick={handleClick}
              color={"#3d5170"}
              lineHeight={"16px"}
              borderLeft={"solid 4px #fff"}
              w={"100%"}
              _hover={{
                background: "#f5f6f8",
                color: "#007bff",
                borderLeft: "solid 4px #007bff",
                fill: "#007bff",
              }}
              display={"inline-flex"}
              padding={"20px 25px"}
            >
              <IconList />
              List Product
            </Text>
          </a>
        </Link>
      </Box>
      <Box>
        <Link href={"/add-user"}>
          <a>
            <Text
              className={menuActive ? "activeMenu" : ""}
              onClick={handleClick}
              color={"#3d5170"}
              lineHeight={"16px"}
              borderLeft={"solid 4px #fff"}
              w={"100%"}
              _hover={{
                background: "#f5f6f8",
                color: "#007bff",
                borderLeft: "solid 4px #007bff",
                fill: "#007bff",
              }}
              display={"inline-flex"}
              padding={"20px 25px"}
            >
              <IconPlusUser />
              User Profile
            </Text>
          </a>
        </Link>
      </Box>
      <Box>
        <Link href={"/add-product"}>
          <a>
            <Text
              className={menuActive ? "activeMenu" : ""}
              onClick={handleClick}
              color={"#3d5170"}
              lineHeight={"16px"}
              borderLeft={"solid 4px #fff"}
              w={"100%"}
              _hover={{
                background: "#f5f6f8",
                color: "#007bff",
                borderLeft: "solid 4px #007bff",
                fill: "#007bff",
              }}
              display={"inline-flex"}
              padding={"20px 25px"}
            >
              <CartIcon />
              Add Product
            </Text>
          </a>
        </Link>
      </Box> */}
    </>
  );
};
export default LinkNavigation;
