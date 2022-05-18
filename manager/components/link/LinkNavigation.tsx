import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { CartIcon } from "../icons/CartIcon";
import { IconPlusUser } from "../icons/IconUserPlus";
import { IconList } from "../icons/list";
const LinkNavigation = () => {
  return (
    <>
      <Box>
        <Link href={"/list-user"}>
          <a>
            <Text
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
            >
              <IconList />
              List user
            </Text>
          </a>
        </Link>
      </Box>
      <Box>
        <Link href={"/list-product"}>
          <a>
            <Text
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
        <Link href={"/user"}>
          <a>
            <Text
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
              Add user
            </Text>
          </a>
        </Link>
      </Box>
      <Box>
        <Link href={"/user"}>
          <a>
            <Text
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
      </Box>
    </>
  );
};
export default LinkNavigation;
