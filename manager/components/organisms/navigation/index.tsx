import { Box } from "@chakra-ui/react";
import React from "react";
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
    title: "User Profile",
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
  return (
    <>
      <Box minH={"100vh"} boxShadow="2xl" bg="white" w={"320px"}>
        <CLinknavi
          color={"#3d5170"}
          fontWeight="500"
          fontSize={"17px"}
          padding="20px 45px"
          title={"Dashboard"}
          link={"/"}
        />
        {button.map((item, index) => {
          return (
            <CLinknavi
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
